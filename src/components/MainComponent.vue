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
        this.searchCard()
    },
    methods: {
        searchCard() {
            if (store.searchInput !== '') {
                axios.get(store.urlApiCards + 'archetype=' + store.searchInput).then((response) => {
                    console.log('Archetipo' + store.searchInput)
                    console.log(response.data.data);
                    store.cards = response.data.data;
                });
            }
            else {
                axios.get(store.urlApiCards).then((response) => {
                    store.cards = response.data.data;
                });
            }
        }
    }
}
</script>

<template>
    <main>
        <SearchCard @search="searchCard" />
        <CardContainer />
    </main>
</template>

<style lang="scss">
@use '../style/partials/variables' as *;

main {
    background-color: $main-bg;
}
</style>