<template>
  <div class="content">
    <h1>Search</h1>
    <form @submit.prevent="handleSubmit">
      <input
        class="searchbox"
        v-model="searchString"
        type="text"
        placeholder="Search for an item"
      />
    </form>
    <div class="alerts"></div>
    <div class="my-list">
      {{ myFavorites }}
    </div>
    <div class="search-results">
      <div v-if="emptySearch">None found, try again?</div>
      <div v-else-if="!submitted">Enter your search above.</div>
      <div v-else-if="searchLoading" class="spinning">Loading results...</div>
      <div v-else>
        <h3 class="searched-for" v-if="searchedFor">{{ searchedForString }}</h3>
        <div class="card-grid">
          <Postcard
            @added="addToList"
            v-for="(item, index) in objectDetails"
            v-bind="item"
            :key="index"
          ></Postcard>
        </div>
        <h3>Raw results</h3>
        {{ rawResults }}
      </div>
    </div>
  </div>
</template>

<script>
import Postcard from "../components/Postcard.vue";
let initialSet = new Set();
export default {
  data() {
    return {
      emptySearch: false,
      rawResults: null,
      searchString: "",
      objectDetails: [],
      searchedFor: "",
      searchLoading: true,
      submitted: false,
      myFavorites: initialSet,
    };
  },
  methods: {
    addToList(id) {
      console.log("listened for " + id);
      if (this.myFavorites.has(id)) {
        alert("Already have the item!");
      }
      this.myFavorites.add(id);
    },
    async fetchObjectDetails() {
      this.searchLoading = true;
      return Promise.all(
        this?.currentObjectPage(14, 1).map((objectId) =>
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
          this.searchLoading = false;
          this.objectDetails = data;
        });
    },

    handleSubmit(e) {
      e;
      console.log(this.searchString);
      // console.log(e);
      this.searchedFor = this.searchString;
      this.submitted = true;
      return this.fetchSearch().then(() => {
        this.fetchObjectDetails();
      });
    },

    async fetchSearch() {
      const params = new URLSearchParams({
        q: this.searchString,
      });

      return fetch(
        "https://collectionapi.metmuseum.org/public/collection/v1/search?" +
          params.toString()
      )
        .then((resp) => resp.json())
        .then((data) => {
          // console.log("Should have assigned the raw results" + data);
          this.emptySearch = data.total === 0;
          this.rawResults = data;
        });
    },
    currentObjectPage(count, pageNum) {
      return this?.rawResults?.objectIDs.slice(pageNum, pageNum + count);
    },
  },

  computed: {
    searchedForString: function () {
      return `${this?.rawResults.total} results for '${this.searchedFor}'`;
    },
    searchResults: function () {
      return null;
    },
    topResults: function () {
      return this?.rawResults?.objectIDs.slice(1, 5);
    },
  },
  components: {
    Postcard,
  },
};
</script>

<style scoped>
.content {
  margin: 2rem;
}

.searchbox {
  box-sizing: border-box;
  min-width: 100%;
  font-size: 2rem;
  padding: 1rem;
  /* height: 1.5rem; */
  background-color: #eaeaea;
  border: none;
  border-radius: 8px;
  transform: translate(0, 0);
  transition: 0.1s ease-out;
}

.searchbox:focus {
  transform: translate(1vh);
}

.card-grid {
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: space-around;
  flex-wrap: wrap;
  /* display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr)); */
}

.card-grid > * {
  width: 25rem;
  flex-shrink: 3;
}

.searched-for {
  font-size: 1.5rem;
  margin: 1rem 0;
}

.search-results {
  margin: 2rem;
  font-size: 1.5rem;
}

.search-load {
  margin: 2rem;
  font-size: 2rem;
}
</style>