<template>
  <main class="content">
    <h2>Your collections</h2>
    <archive-list :items="userCollections"></archive-list>
    <span :v-if="userCollections.length === 0">You currently have no collections. Make a new one!</span>
  </main>
</template>

<script>
import ArchiveList from './ArchiveList.vue';
import { mapActions, mapState } from 'vuex';
export default {
  name: 'Cards',
  props: ['user'],
  components: {
    ArchiveList,
  },
  computed: {
    ...mapState(['userCollections', 'sessionUserId'])
  },
  methods: {
    ...mapActions(['fetchCollectionsForUser'])
  },
  mounted() {
    this.fetchCollectionsForUser({user: this.sessionUserId});
  },

};
</script>

<style scoped>

.card-grid {
  display: grid;
  grid-template-columns: 1fr;
  flex-direction: row;
  align-items: flex-start;
  align-content: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
}

@media screen and (min-width: 600px) {
.card-grid {
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  }
}

</style>