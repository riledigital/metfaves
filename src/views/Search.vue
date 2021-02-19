<template>
<div>
  <header class="header"><h1 class="header__h1">Search</h1></header>

  <form class="form" @submit.prevent="handleSubmit">
    <input
      class="searchbox"
      v-model="searchString"
      type="text"
      placeholder="Search for an item"
    />
  </form>
  <div class="alerts"></div>
  <div class="my-list">
    {{ getSearchCount }}
    {{ myFavorites }}
  </div>
  <div class="search-results">
    <div v-if="emptySearch">None found for {{ searchedFor }}, try again?</div>
    <div v-else-if="!submitted">Enter your search above.</div>
    <div v-else-if="searchLoading">
      <span class="spinning"><progress>progress</progress></span>
    </div>
    <div v-else>
      <h3 class="searched-for" v-if="searchedFor">{{ searchedForString }}</h3>
      <ArchiveList :objectDetails="objectDetails"> </ArchiveList>
    </div>
  </div>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex';
import ArchiveList from '../components/ArchiveList';

export default {
  data() {
    return {
      emptySearch: false,
      searchedFor: '',
    };
  },
  methods: {
    ...mapMutations({
      setSubmitted: 'setSubmitted',
      add: 'addToList',
      setSearchString: 'setSearchString',
    }),
    ...mapActions({
      fetchSearch: 'fetchSearchAsync',
      fetchObjectDetails: 'fetchObjectDetails',
    }),

    handleSubmit() {
      console.log(this.searchString);
      this.setSearchString({ searchString: this.searchString });
      this.searchedFor = this.searchString;
      this.setSubmitted({ submitted: true });

      return this.fetchSearch();
    }
  },
  computed: mapState({
    emptySearch: (state) => state.emptySearch,
    submitted: (state) => state.submitted,
    searchLoading: (state) => state.searchLoading,
    rawResults: (state) => state.rawResults,
    objectDetails: (state) => {
      return state.objectDetails;
    },
    getSearchCount: (state) => {
      return state.getSearchCount;
    },
  }),

  components: {
    ArchiveList,
  },
};
</script>

<style scoped>

.form {
  max-width: 100%;
}

.searchbox {
  box-sizing: border-box;
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
  /* transform: translate(1vh); */
}

.searched-for {
  font-size: 1.5rem;
  /* margin: 1rem 0; */
}

.search-results {
  /* margin: 2rem; */
  font-size: 1.5rem;
}

.search-load {
  margin: 2rem;
  font-size: 2rem;
}
</style>