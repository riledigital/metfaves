<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/test">Test</router-link>
    <router-link to="/search">Search</router-link>
  </div>
  <router-view />
</template>

<script>
// import db from "./database.js";
// this.prototype.db = db;
export default {
  name: "MetFaves",
  mounted() {
    console.info("mounted the #app");
  },
};
</script>


<style>
#app {
  --font-sans: "Avenir Next", -apple-system, BlinkMacSystemFont, Helvetica,
    Arial, sans-serif;

  font-family: var(--font-sans);
  color: #2c3e50;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#nav {
  background: lightgray;
  padding: 1rem;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

* {
  margin: 0;
  padding: 0;
}

body {
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
  font-family: sans-serif;
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
