<script>
import CardContainer from './CardContainer.vue';
import SearchCard from './SearchCard.vue';
import axios from "axios";
import { store } from '../store';

export default {
    name: 'MainComponent',
    data() {
        return {
            store
        }
    },
    components: {
        SearchCard,
        CardContainer
    },
    created() {
        axios.get(store.urlApi).then((response) => {
            store.cards = response.data.data;
            console.log(store.cards[1].card_images[0].image_url)
        });
    }
}
</script>

<template>
    <main>
        <SearchCard />
        <CardContainer :carte="store.cards" />
    </main>
</template>

<style lang="scss">
@use '../style/partials/variables' as *;

main {
    background-color: $main-bg;
}
</style>