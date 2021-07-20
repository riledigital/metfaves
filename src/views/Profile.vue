<template>
  <div v-if="!loggedIn">You are not currently logged in. 
    <router-link to="/register">Register</router-link> to get started!</div>
  <div v-else>
    <div>
      Welcome {{ sessionUsername }}!
      <user-collections @user="sessionUserId"></user-collections>
    </div>
  </div>
</template>

<script>
import UserCollections from '@/components/UserCollections.vue';
/*
 * @ is an alias to /src
 * import HelloWorld from '@/components/HelloWorld.vue'
 */
// import { mapMutations } from 'vuex';
import { mapGetters, mapState } from 'vuex';

export default {
  name: 'Profile',
  components: {UserCollections},
  computed: {
    ...mapState({
      sessionUserId: state => state.sessionUserId,
      sessionUsername: state => state.sessionUsername,
      userCollections: state => state.userCollections}), 
    ...mapGetters(['loggedIn'])
  },
  data() {
    return {
      store: this.$store
    };
  },
  methods: {
    async registerApi() {
      try {
        const postBody = { name: this.name, email: this.email, bio: this.bio };
        const resp = await fetch(process.env.VUE_APP_API_BASE + '/user', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          // mode: 'no-cors',
          body: JSON.stringify(postBody)
        });
        this.data = await resp.text();
        this.response = resp;
        if (resp.status == 200) {
          this.$router.push('welcome');
          this.$store.commit('setSessionUser', {id: this.data.id, name: this.data.name});
        }
        console.log('REDIRECT');
      } catch (err) { }
    }
  }
  
};
</script>

<style scoped>
.form {
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  max-width: 50vw;
  gap: 1rem;
}
</style>
