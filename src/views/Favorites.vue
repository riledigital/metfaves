<template>
    <header class="header"><h1 class="header__h1">Favorites</h1></header>

    <div class="favorites-container">
{{ myFavorites }}
        </div>
</template>
<script>
import {mapState} from 'vuex';
export default {
    name: "Favorites",
    computed: mapState({
        myFavorites: (state) => state.myFavorites
    })
}
</script>