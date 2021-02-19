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
background: var(--color-red);
  display: flex;
  justify-content: center;
  gap: 1rem;
  width: 100%;
}

.link {
    background: var(--color-red);
    border-radius: 1rem;
    color: white;
    font-weight: bold;
    padding: 0.75rem;
    transition: color 200ms ease, transform 200ms ease-in-out;
}

a:link {
    text-decoration: none;
}


.router-link-active {
    color: var(--color-gray);
    transform: translateY(-1rem);
}
</style>
