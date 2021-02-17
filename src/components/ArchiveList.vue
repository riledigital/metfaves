<template>
  <main class="content">
    <div class="card-grid">
      <Postcard
        @added="add"
        v-for="(item, index) in objectDetails"
        v-bind="item"
        :objectData="item"
        :key="index"
      ></Postcard>
    </div>
  </main>
</template>

<script>
import Postcard from "./Postcard.vue";

export default {
  name: "Cards",
  props: ["objectDetails"],
  components: {
    Postcard,
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