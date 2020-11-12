import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";
import { DateTime } from "luxon";
var now = DateTime.local();
// const initialSet = new Set();
// const initialSet = [];

export default createStore({
  plugins: [createPersistedState()],
  state: {
    myFavorites: [],
    emptySearch: false,
    objectDetails: [],
    rawSearchResults: null,
    searchString: "",
    searchLoading: false,
    submitted: false,
  },
  mutations: {
    clearFavorites(state) {
      if (confirm("Do you really want to clear your favorites?")) {
        state.myFavorites = [];
      }
    },
    setEmptySearch(state, payload) {
      state.emptySearch = payload.emptySearch;
    },
    setSubmitted(state, payload) {
      state.submitted = payload.submitted;
    },
    setSearchString(state, payload) {
      state.searchString = payload.searchString;
    },
    setLoading(state, payload) {
      state.searchLoading = payload.loading;
    },
    setRawResults(state, payload) {
      state.rawResults = payload.rawResults;
    },
    setObjectDetails(state, payload) {
      state.objectDetails = payload.objectDetails;
    },
    addToList(state, payload) {
      console.log("listened for " + payload.id);
      if (state.myFavorites.some((obj) => obj.objectID === payload.objectID)) {
        alert("Already have the item!");
      } else {
        state.myFavorites.push({
          ...payload,
          appAddedDate: now,
        });
      }
    },
  },
  actions: {
    fetchSearchAsync({ state, commit }) {
      commit("setLoading", { loading: true });
      const params = new URLSearchParams({
        q: state.searchString,
      });
      return fetch(
        "https://collectionapi.metmuseum.org/public/collection/v1/search?" +
          params.toString()
      )
        .then((resp) => resp.json())
        .then((data) => {
          // console.log("Should have assigned the raw results" + data);
          if (data.total === 0) {
            commit("setRawResults", { rawResults: {} });
            commit("setEmptySearch", { emptySearch: true });
          } else {
            commit("setRawResults", { rawResults: data });
            commit("setEmptySearch", { emptySearch: false });
            this.dispatch("fetchObjectDetails");
          }
        });
    },

    fetchObjectDetails({ commit, getters }) {
      commit("setLoading", { loading: true });
      return Promise.all(
        getters
          .currentObjectPage(14, 1)
          .map((objectId) =>
            fetch(
              "https://collectionapi.metmuseum.org/public/collection/v1/objects/" +
                objectId
            )
          )
      )
        .then((results) => {
          return Promise.all(results.map((d) => d.json()));
        })
        .then((data) => {
          commit("setLoading", { loading: false });
          commit("setObjectDetails", { objectDetails: data });
        });
    },
  },
  modules: {},
  getters: {
    currentObjectPage: (state) => (count, pageNum) => {
      return state.rawResults?.objectIDs.slice(pageNum, pageNum + count);
    },
    getSearchCount: (state) => {
      return state.rawSearchResults?.total;
    },
    // searchResults: (state) => {
    //   return null;
    // },
    topResults: (state) => {
      return state?.rawResults?.objectIDs.slice(1, 5);
    },
  },
});
