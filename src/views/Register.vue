<template>
  <div>
    Register for an account!

    <form @submit.prevent @submit="registerApi" class="form">
      <input v-model="name" placeholder="Name" />
      <input v-model="email" placeholder="Email" />
      <input v-model="bio" placeholder="Bio" />
      {{ response.status }} {{ response }}
      <button>Register</button>
    </form>
  </div>
</template>

<script>
/*
 * @ is an alias to /src
 * import HelloWorld from '@/components/HelloWorld.vue'
 */
import { mapMutations } from 'vuex';

export default {
  name: 'Home',
  data: function() {
    return {
      name: '',
      email: '',
      bio: '',
      response: '',
      data: ''
    };
  },
  components: {},
  methods: {
    ...mapMutations(['setSessionUser']),
    handleSubmit(e) {
      e.preventDefault();
      this.registerApi();
    },
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
        const data = await resp.json();
        this.data = data;
        this.response = resp;
        console.log(data);
        this.setSessionUser({id: data.id, name: data.name});
        if (this.response.status === 200) { 
          console.log('redirecting!');
          this.$router.push('profile');
        }
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
