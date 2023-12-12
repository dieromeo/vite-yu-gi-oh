<script>
export default {
    name: 'Logo',
    data() {
        return {
            logo: {
                image: '../../public/logo.png',
                alt: 'Yu-Gi-Oh'
            }
        }
    }
}
</script>

<template>
    <img :src="logo.image" :alt="logo.alt">
</template>

<style lang="scss" scoped>
img {
    height: 20px;
    margin: 0 25px;
}
</style>