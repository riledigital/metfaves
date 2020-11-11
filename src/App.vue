<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> •
    <router-link to="/test">Test</router-link> •
    <router-link to="/search">Search</router-link> •
    <router-link to="/favorites">Favorites</router-link> •
  </div>
  <router-view />
</template>

<script>
export default {
  name: "MetFaves",
  mounted() {
    console.info("mounted the #app");
  },
  // store,
};
</script>


<style>
:root {
  --color-bg: #300000;
  --color-bg-2: #581515;
  --color-text: white;
  --color-text: white;
  --color-links: rgb(255, 111, 111);
  --font-sans:  -apple-system, "Avenir Next", BlinkMacSystemFont, Helvetica,
    Arial, sans-serif;
}

#app {
  font-family: var(--font-sans);
  color: var(--color-text);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#nav {
  background: var(--color-bg-2);
  padding: 1rem;
}

#nav a {
  font-weight: bold;
  color: var(--color-links);
}

#nav a.router-link-exact-active {
  color: #42b983;
}

* {
  margin: 0;
  padding: 0;
}

body {
  background: var(--color-bg);
  font-size: 18px;
  line-height: 1.35;
}

img {
  height: auto;
  max-width: 100%;
}

input {
  font-family: var(--font-sans);
}

button {
  font-family: var(--font-sans);
  font-size: 1rem;
}

.spinning {
  animation: 3s linear 1s infinite alternate spin;
}

@keyframes spin {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360);
  }
}
</style>
