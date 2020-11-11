<template>
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