<template>
  <div class="container">
    <div class="image-container">
      <img
        class="img"
        :src="
          primaryImageSmall
            ? primaryImageSmall
            : 'https://via.placeholder.com/150'
        "
      />
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
        <span class="footer__culture">
          {{ culture }}
        </span>
        <span class="footer__dept">{{ department }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Postcard",
  mounted() {
    // debugger;
  },
  props: [
    "title",
    "primaryImage",
    "department",
    "primaryImageSmall",
    "objectDate",
    "objectURL",
    "objectID",
    "classification",
    "culture",
    // objectData: Object,
  ],
  methods: {
    addItem() {
      console.log("lol clicked: " + this.title);
      this.$emit("added", this.objectID);
    },
  },
};
</script>

<style scoped>
.container {
  place-items: center;
  --padding: 1rem;
  background: gray;
  overflow: hidden;
  border-radius: 1rem;
  position: relative;
  display: flex;
  /* margin: auto; */
  margin: 1rem;
  /* min-width: 150px; */
  max-height: auto;
}

.image-container {
  display: flex;
  position: relative;
  min-height: 100%;
  min-width: 100%;
}

.img {
  object-fit: cover;
  width: auto;
  height: auto;
  /* position: relative;
  height: auto;
  max-width: auto;
  margin: auto; */
}

button {
  padding: 0.25rem 2rem;
}

.actions {
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: flex-start;
  align-content: flex-start;
  flex-flow: row wrap;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
}

.actions > * {
  display: inline-flex;
  flex: none;
}

.preview {
  max-width: 100%;
}

.overlay {
  box-sizing: border-box;
  color: white;
  font-size: 1rem;
  text-align: left;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  transition: all 0.3s ease;
}

.overlay:hover {
  opacity: 1;
  transform: translate(0, 0);
}

p {
  font-size: 1rem;
  padding: 0;
  margin: 0;
}

.card__info {
  background: rgba(0, 0, 0, 0.5);
  padding: var(--padding);
  padding-top: 0;
}

.card__footer {
  font-weight: bold;
  font-size: 0.95rem;
  letter-spacing: 0.25px;
  position: absolute;
  display: flex;
  align-items: flex-end;
  max-width: 100%;
  min-width: 50;
  justify-content: space-between;
  bottom: 0;
  left: 0;
  right: 0;
  padding: var(--padding);
  text-shadow: 1px 1px 0.5px rgba(0, 0, 0, 0.5);
}

.footer__dept {
  text-align: right;
}

.card__link {
  text-decoration: none;
  line-height: 1.2;
  color: unset;
}

.card__link:hover {
  opacity: 0.7;
}

.card__title {
  font-size: 1rem;
}
</style>