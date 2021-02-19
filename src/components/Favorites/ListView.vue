<template>
  <div class="list">
    List View
    <ul>
      <li v-for="(item) in objectDetails" :key="item.objectID">
        <span v-for="key in Object.keys(item)" :key="key"> {{ key }}</span>
        {{item}} {{ accessionNumber }}</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'ListView',
  data() {return {
    fields: []
  };},
  props: {
    objectDetails: []
  }
};
</script>

<style scoped>
.list {

}
</style>