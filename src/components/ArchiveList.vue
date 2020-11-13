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
.content {
  margin: 2rem;
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
  max-width: 35vw;
  height: auto;
  flex-shrink: 3;
}
</style>