<template>
  <header class="header">
    <span class="header__branding">
      MetFaves
    </span>
    <div class="account">
      <span>{{ sessionUsername }}</span>
      <button v-if="loggedIn" @click="setLogout">Logout</button>
    </div>
  </header>
</template>

<script>

import { mapMutations } from 'vuex';
import { mapState } from 'vuex';
import { mapGetters } from 'vuex';

export default {
  name: 'AppHeader',
  computed: {
    ...mapState(['sessionUsername']),
    ...mapGetters(['loggedIn'])},
  methods: {
    ...mapMutations(['setLogout'])
  }
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
.account {
  
}

.logout {
  
}
</style>
