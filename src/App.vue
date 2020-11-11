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
  --color-bg: #382D2D;
  --color-met-red: #E4002B;
  --color-bg-2: var(--color-met-red);
  --color-text: white;
  --color-links: rgb(255, 111, 111);
  --color-links-active: rgb(255, 111, 111);
  --font-sans:  "Source Sans Pro", -apple-system, "Avenir Next", BlinkMacSystemFont, Helvetica,
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

a {
  color: var(--color-links);
}

#nav a {
  font-weight: bold;
  color: var(--color-text);
}

#nav a.router-link-exact-active {
  /* color:  var(--color-links-active); */
  opacity: .90;
  text-decoration: none;;
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
  background: none;
border: 1px solid var(--color-links);
border-radius: 1rem;
color: var(--color-links);
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
  justify-content: center;;
  text-align:center;
  align-items:center;
  margin-bottom: 1rem;

}

.header__h1 {
  font-weight: normal;

}

</style>
