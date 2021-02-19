<template>
    <div class="bottom">
        <Navigation />
        </div>
</template>

<script>
import Navigation from './Navigation.vue';
export default {
  name: 'Bottom',
  components: {
    Navigation
  }
};
</script>
<style scoped>

.bottom {
    background-color: red;
    position: fixed;
    display: flex;
    width: 100%;
    bottom: 0;
    left: 0;

    justify-content: space-between;
}
</style>