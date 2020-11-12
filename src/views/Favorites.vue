<template>
    <header class="header"><h1 class="header__h1">Favorites</h1></header>
    <div class="favorites-container">
        <button @click="clearFaves">Clear favorites</button>
    <Postcard v-for="item of myFavorites" :key="item?.objectID" :objectData="item"></Postcard>

        {{ myFavorites }}
    </div>
</template>
<script>
import {mapState, mapMutations} from 'vuex';
import Postcard from '../components/Postcard.vue';

export default {
    name: "Favorites",
    methods: {...mapMutations({
        clearFaves: 'clearFavorites'
    })},
    components: {
        Postcard
    },
    computed: mapState({
        myFavorites: (state) => state.myFavorites
    })
}
</script>