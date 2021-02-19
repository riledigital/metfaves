<template>
<div>
Search for a work.

<Search/>
</div>
</template>

<script>

/*
 * @ is an alias to /src
 * import HelloWorld from '@/components/HelloWorld.vue'
 */
import Search from './Search.vue';

export default {
  name: 'Home',
  components: {
    Search
  }
};
</script>
