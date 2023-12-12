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
    <main>
        <SearchCard />
        <CardContainer />
    </main>
</template>

<style lang="scss">
@use '../style/partials/variables' as *;

main {
    background-color: $main-bg;
}
</style>