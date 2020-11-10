<template>
  <div class="container">
    <div class="image">
      <img class="img" :src="primaryImage ? primaryImage : 'https://placekitten.com/200/300'" />
    </div>
    <div class="overlay">
      <div class="actions">
        <button @click="addItem">Add ⊕</button>
      </div>
      <div class="card__info">
        <h4 class="card__title">
          <a :href="objectURL" class="card__link">{{ title }}</a>
        </h4>
        <p>{{ objectDate }}</p>
        <!-- <p>{{ department }}</p> -->
        <p>{{ culture }}</p>

        <p>{{ classification }}</p>
      </div>
      <div class="card__footer">
        <span>
          {{ culture }}
        </span>
        <span>Department {{ department }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Postcard",
  props: [
    "title",
    "primaryImage",
    "department",
    "primaryImageSmall",
    "objectDate",
    "objectURL",
    "classification",
    "culture",
    // objectData: Object,
  ],
  methods: {
    addItem() {
      console.log("lol clicked: " + this.title);
    },
  },
};
</script>

<style scoped>
.container {
  background: gray;
  --padding: 2rem;
  overflow: hidden;
  border-radius: 1rem;
  position: relative;
  display: flex;
  margin: auto;
  max-width: 50vw;
  min-width: 150px;
  max-height: auto;
}

.img {
  max-width: 100%;
  min-height: 100%;
}

.actions {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.preview {
  max-width: 100%;
}

.overlay {
  box-sizing: border-box;
  color: white;
  font-size: 1.5rem;
  text-align: left;
  padding: var(--padding);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  opacity: 0;
  transition: all 0.3s ease;
}

.overlay:hover {
  opacity: 1;
  transform: translate(0, 0);
}

p {
  font-size: 1.5rem;
  padding: 0;
  margin: 0;
}
.card__footer {
  position: absolute;
  display: flex;
  max-width: 100%;
  min-width: 50;
  justify-content: space-between;
  bottom: 0;
  left: 0;
  right: 0;
  padding: var(--padding);
}
.card__link {
  font-size: 2rem;
  color: unset;
}
.card__title {
  font-size: 1.5rem;
}
</style>