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
    <Founded />
    <Card />
</template>

<style></style>