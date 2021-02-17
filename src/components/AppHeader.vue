<template>
<header>
<span class="app-title">
  MetFaves
</span>
  <div id="nav">
    <router-link v-for="link in links" :to="link.route" :key="link.name">{{ link.name }}</router-link>
  </div>
</header>
</template>

<script>
export default {
    name: 'AppHeader',
    data: () => {
      return ({links: [
        {'route': '/about', 'name': 'About'},
        {'route': '/search', 'name': 'Search'},
        {'route': '/Favorites', 'name': 'Favorites'}
      ]});
    }
}
</script>

<style scoped>
.app-title {
  display: inline-block;
}
</style>