<script>
import Card from './Card.vue';
import Founded from './Founded.vue';

export default {
    name: 'CardContainer',
    props: ['carte'],
    components: {
        Founded,
        Card
    },
}

</script>

<template>
    <div class="container">
        <Founded />
        <div class="card-container">
            <Card v-for="(card, index) in carte" :immagine="card.card_images[0].image_url_small" :nome="card.name"
                :tipo="card.type" />
        </div>
    </div>
</template>

<style lang="scss">
@use '../style/partials/variables' as *;

.container {
    max-width: 1140px;
    margin: 0 auto;
    padding: 50px;
    background-color: $cards-bg;

    .card-container {
        display: flex;
        flex-wrap: wrap;
        gap: 25px;
    }
}
</style>