<template>
  <nav class="nav">
    <router-link class="link" v-for="link in links" :to="link.route" :key="link.name">{{ link.name }}</router-link>
  </nav>
</template>

<script>
export default {
  name: 'Navigation',
  data: () => ({
    links: [
      { 'route': '/about',
        'name': 'About' },
      { 'route': '/search',
        'name': 'Search' },
      { 'route': '/Favorites',
        'name': 'Favorites' }
    ] })
};
</script>

<style scoped>

.nav {
  /* background: var(--color-bg-2); */
  display: flex;
  justify-content: center;
  gap: 1rem;
  width: 100%;
}

.link {
    color: white;
    font-weight: bold;
    padding: 0.5rem;
    transition: color 200ms ease;
}

a:link {
    text-decoration: none;
}


.router-link-active {
    color: var(--color-bg);
}
</style>
