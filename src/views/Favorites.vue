<template>
  <header class="header"><h1 class="header__h1">Favorites</h1></header>
  <div class="favorites-container">
    <button @click="clearFaves">Clear favorites</button>
    <div v-if="myFavorites.length === 0">
      You have not yet selected any favorites. Search for some favorite works
      and add them here!
    </div>
    <ArchiveList v-else favorites :objectDetails="myFavorites"> </ArchiveList>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import ArchiveList from "../components/ArchiveList";

export default {
  name: "Favorites",
  methods: {
    ...mapMutations({
      clearFaves: "clearFavorites",
    }),
  },
  components: {
    ArchiveList,
  },
  computed: {
    ...mapState({
      myFavorites: (state) => state.myFavorites,
    }),
  },
};
</script>