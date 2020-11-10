<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/test">Test</router-link>
    <router-link to="/search">Search</router-link>
  </div>
  <router-view />
</template>

<style>
#app {
  font-family: -apple-system, BlinkMacSystemFont, "Avenir Next", Helvetica,
    Arial, sans-serif;
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

svg {
  /* height: 100%; */
  /* width: 100%; */
}

body {
  font-size: 18px;
  line-height: 1.35;
}

img {
  height: auto;
  max-width: 100%;
}
</style>
