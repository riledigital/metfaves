<template>
  <header class="header">
    <span class="header__branding">
      MetFaves
    </span>
  </header>
</template>

<script>
export default {
  name: 'AppHeader'
};
</script>

<style scoped>
.app-title {
  display: inline-block;
}



.header {
  display: flex;
  gap: 1rem;
  padding: .5rem;
  justify-content: center;
}

.header__branding {
  font-weight: bold;
  pointer-events: none;
}
</style>
