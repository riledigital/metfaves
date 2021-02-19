<template>
  <div>
    <AppHeader />
    <router-view />
    <Notification @showNotification="handleNotification"/>
    <Bottom />
  </div>
</template>

<script>

import 'normalize.css';
import AppHeader from '@/components/AppHeader.vue';
import Bottom from '@/components/Bottom.vue';

export default {
  name: 'MetFaves',
  components: {
    AppHeader,
    Bottom,
  },
  mounted() {
    console.info('mounted the #app');
  }
};
</script>


<style>
:root {
  --color-gray: #393939;
  --color-red: #e4002b;
  --color-text: white;
  --color-bg: #393939;
  --color-bg-2: var(--color-met-red);
  --color-links: var(--color-red);
  --color-links-active: rgb(255, 111, 111);
  --font-sans: "Source Sans 3", -apple-system, "Avenir Next",
    BlinkMacSystemFont, Helvetica, Arial, sans-serif;
}

#app {

}

a:link {
  color: var(--color-links);
}

#nav a.router-link-exact-active {
  /* color:  var(--color-links-active); */
  opacity: 0.9;
  text-decoration: none;
}
/* Resets */
* {
  margin: 0;
  padding: 0;
}

body {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  background: var(--color-bg);
  color: var(--color-text);
  font-family: var(--font-sans);
  font-size: 18px;
  line-height: 1.35;
}

img {
  height: auto;
  max-width: 100%;
}

button {
  border: 1px solid var(--color-links);
  border-radius: .5rem;
  transition: all 0.15s ease;
  padding: 0.25rem 4rem;
  background: var(--color-links);
  color: var(--color-bg);
  font-size: 1rem;
  font-weight: 700;
}

button:active {
  transform: scale(0.95);
}

button:hover,
button:focus {
  color: var(--color-links);
  background: rgba(0, 0, 0, 0.75);
}

input {
  font-family: var(--font-sans);
  font-size: 1.5rem;
  padding: .5rem;
  /* height: 1.5rem; */
  background-color: #eaeaea;
  border: none;
  border-radius: 8px;
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
  /* margin-top: 2rem; */
  display: flex;
  /* justify-content: center; */
  /* text-align: center; */
  /* align-items: center; */
  /* margin-bottom: 1rem; */
}

.header__h1 {
  font-size: 1.5rem;
  font-weight: 700;
}

th,
td {
  padding: 0.5rem;
}
</style>
