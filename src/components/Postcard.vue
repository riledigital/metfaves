<template>
  <transition appear name="slide-fade">
    <div class="container">
      <div class="image-container">
        <img
          class="img"
          :src="
              objectData?.primaryImageSmall ??
              'https://via.placeholder.com/150'
          "
        />
      </div>
      <div class="overlay">
        <div class="actions">
          <button
            v-if="!added"
            @click="
              () => {
                this.added = true;
                addItem(objectData);
              }
            "
          >
            Add ⊕
          </button>
          <button
            v-if="!removed"
            @click="
              () => {
                this.removed = true;
                removeItem(objectData);
              }
            "
          >
            Remove
          </button>
        </div>
        <div class="card__info">
          <h4 class="card__title">
            <a :href="objectData?.objectURL" class="card__link">{{
              objectData?.title
            }}</a>
          </h4>
          <p>{{ objectData?.objectDate }}</p>
          <p>{{ objectData?.classification }}</p>
        </div>
        <div class="card__footer">
          <span class="footer__culture">
            {{ objectData?.culture }}
          </span>
          <span class="footer__dept">{{ objectData?.department }}</span>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'Postcard',
  mounted() {
    // debugger;
  },
  props: ['objectData'],
  data() {
    return {
      added: false,
      removed: false,
    };
  },
  methods: {
    ...mapMutations({
      addItem: 'addToList',
      removeItem: 'removeFromFavorites',
    }),
  },
};
</script>

<style scoped>
.container {
  align-items: center;
  align-content: center;
  place-items: center;
  --padding: 1rem;
  background: gray;
  overflow: hidden;
  border-radius: 0.5rem;
  position: relative;
  display: flex;
  margin: 0.25rem;
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

.actions {
  /* background: rgba(0, 0, 0, 0.5); */
  display: flex;
  justify-content: flex-start;
  align-content: flex-start;
  flex-flow: row wrap;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
  position: absolute;
  margin: auto auto;
  align-self: center;
}

.actions > * {
  display: inline-flex;
  flex: none;
}

.preview {
  max-width: 100%;
}

.overlay {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  box-sizing: border-box;
  color: white;
  font-size: 1.5rem;
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
  background: rgba(0, 0, 0, 0.5);
  opacity: 1;
  transform: translate(0, 0);
}

p {
  font-size: 1rem;
  padding: 0;
  margin: 0;
}

.card__info {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  /* background: rgba(0, 0, 0, 0.5); */
  height: auto;
  width: 100%;
  padding: var(--padding);
  transition: all 0.2s ease;
  transform: translate(0, -100px);
}

.overlay:hover > .card__info {
  transform: translate(0, 0);
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

/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-50px);
  opacity: 0;
}
</style>