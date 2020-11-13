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
  --color-bg: #382d2d;
  --color-met-red: #e4002b;
  --color-bg-2: var(--color-met-red);
  --color-text: white;
  --color-links: rgb(255, 111, 111);
  --color-links-active: rgb(255, 111, 111);
  --font-sans: "Source Sans Pro", -apple-system, "Avenir Next",
    BlinkMacSystemFont, Helvetica, Arial, sans-serif;
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

a {
  color: var(--color-links);
}

#nav a {
  font-weight: bold;
  color: var(--color-text);
}

#nav a.router-link-exact-active {
  /* color:  var(--color-links-active); */
  opacity: 0.9;
  text-decoration: none;
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

button {
  border: 1px solid var(--color-links);
  border-radius: 1rem;
  transition: all 0.15s ease;
  padding: 0.25rem 4rem;

  background: var(--color-links);
  color: var(--color-bg);
}

button:active {
  transform: scale(0.7);
}

button:hover,
button:focus {
  color: var(--color-links);
  background: rgba(0, 0, 0, 0.75);
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
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

/* Reusable */
.header {
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  margin-bottom: 1rem;
}

.header__h1 {
  font-weight: normal;
}

th,
td {
  padding: 0.5rem;
}
</style>
