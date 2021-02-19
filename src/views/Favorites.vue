<template>
  <main class="container">
    <!-- <header class="header">
      <h1 class="header__h1">Your faves</h1>
    </header> -->
    <div>
      <details>
        <summary>Add by Object ID
        </summary>
        <p>Already have the Object ID for an item? Enter it here to add it to your Faves.</p>
        <label>Object ID</label><input class="input-text" type="text" name="" placeholder="eg: 39666"/>
        <br/>
        <button>Add by ID</button>
      </details>

    </div>

    <h2>Your Faves</h2>
    <div class="favorites-container">
      <button @click="clearFaves">Clear favorites</button>
      <div v-if="emptyFavorites">
        You have not yet selected any favorites. Search for some favorite works
        and add them here!
      </div>
      <ArchiveList v-else favorites :objectDetails="myFavorites"> </ArchiveList>
      <ListView v-if="showList" :objectDetails="myFavorites" />
    </div>
  </main>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import ArchiveList from '../components/ArchiveList';
import ListView from '../components/Favorites/ListView';

export default {
  name: 'Favorites',
  methods: {
    ...mapMutations({
      clearFaves: 'clearFavorites',
    }),
  },
  components: {
    ArchiveList,
    ListView
  },
  data(){
    return {
      showList: true
    };
  },
  computed: {
    ...mapState({
      myFavorites: (state) => state.myFavorites,
      emptyFavorites: (state) => {
        return state.myFavorites.length === 0;
      }
    }),
  },
};
</script>

<style scoped>

.container {
  padding: var(--margin-base);
}
</style>