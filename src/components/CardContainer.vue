<script>
import Card from './Card.vue';
import Founded from './Founded.vue';

export default {
    name: 'CardContainer',
    components: {
        Founded,
        Card
    }
}
</script>

<template>
    <div class="card-container">
        <Founded />
        <Card />
    </div>
</template>

<style lang="scss">
@use '../style/partials/variables' as *;

.card-container {
    max-width: 1140px;
    margin: 0 auto;
    padding: 50px;
    background-color: $cards-bg;
}
</style>