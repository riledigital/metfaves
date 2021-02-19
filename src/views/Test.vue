<template>
  <main>
    <h1>This is a test page!</h1>
    <Postcard v-bind="theObject" />
    <BaseStyles v-if="true" />
  </main>
</template>

<script>
import BaseStyles from '../components/BaseStyles.vue';
import Postcard from '../components/Postcard.vue';
const objectId = 45432;
const URL_BASE = 'https://collectionapi.metmuseum.org';
let useFetchy = 0;

export default {
  name: 'Test',
  created() {
    console.log('lol mounted');
    if (useFetchy) {
      fetch(URL_BASE + '/public/collection/v1/objects/' + objectId)
        .then((resp) => resp.json())
        .then((data) => {
          this.theObject = data;
        });
    }
  },
  updated() {
    console.log(this.theObject);
  },
  data() {
    return {
      theObject: { title: 'Test' },
    };
  },
  components: { Postcard, BaseStyles },
};
</script>

<style>
</style>
