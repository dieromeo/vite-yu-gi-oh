<script>
import CardContainer from './CardContainer.vue';
import SearchCard from './SearchCard.vue';

export default {
    name: 'MainComponent',
    components: {
        SearchCard,
        CardContainer
    }
}
</script>

<template>
    <SearchCard />
    <CardContainer />
</template>

<style></style>