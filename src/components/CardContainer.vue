<script>
import Card from './Card.vue';
import Founded from './Founded.vue';
import { store } from '../store';

export default {
    name: 'CardContainer',
    components: {
        Founded,
        Card
    },
    data() {
        return {
            store
        }
    }
}

</script>

<template>
    <div class="container">
        <Founded />
        <div class="card-container">
            <Card v-for="card in store.cards" :immagine="card.card_images[0].image_url_small" :nome="card.name"
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