<script>
export default {
    name: 'Card',
    props: ['immagine', 'nome', 'tipo']
}
</script>

<template>
    <div class="card">
        <div class="image-container">
            <img :src="immagine" alt="">
        </div>
        <div class="card-info">
            <h3>{{ nome.toUpperCase() }}</h3>
            <p>{{ tipo }}</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../style/partials/variables' as *;

.card {
    width: calc((100% /5) - ((4/5) * 25px));


    img {
        display: block;
        width: 100%;
    }

    .card-info {
        background-color: $main-bg;
        padding: 20px;
        text-align: center;
        height: 133px;

        h3 {
            color: $cards-bg;
            margin-bottom: 20px;
            font-size: 14px;
        }
    }
}
</style>