<template>
  <div class="container">
    <h1>Search</h1>
    <form @submit.prevent="handleSubmit">
      <input
        v-model="searchString"
        type="text"
        placeholder="Search for an item"
      />
    </form>
    {{ searchString }}
    <h3>Top results</h3>
    {{ topResults }}
    <div class="card-grid">
    <Postcard v-for="(item, index) in objectDetails" v-bind="item" :key="index"></Postcard>
</div>
    <h3>Raw results</h3>
    {{ rawResults }}
  </div>
</template>

<script>
import Postcard from "../components/Postcard.vue";

export default {
  data() {
    return {
      rawResults: null,
      searchString: "",
      objectDetails: []
    };
  },
  methods: {
    async fetchObjectDetails() {
      return Promise.all(
        this?.topResults.map( objectId => fetch('https://collectionapi.metmuseum.org/public/collection/v1/objects/' + objectId)))
        .then((resps) => resps.map(d => d.json()))
        .then((data) => {
          this.objectDetails = data;
        });
    },
    handleSubmit(e) {
      e;
      console.log(this.searchString);
      // console.log(e);
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
          this.rawResults = data;
        });
    },
  },

  computed: {
    searchResults: function () {
      return null;
    },
    topResults: function () {
      return this?.rawResults?.objectIDs.slice(1, 5);
    },

  },
  components: {
    Postcard
  }
};
</script>

<style scoped>
.container {
  margin: 2rem;
}

input {
  box-sizing: border-box;
  min-width: 100%;
  font-size: 2rem;
  padding: 1rem;
  /* height: 1.5rem; */
  background-color: #dddddd;
  border: none;
  border-radius: 8px;
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
}
</style>