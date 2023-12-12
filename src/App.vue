<script>
import FooterComponent from './components/FooterComponent.vue';
import HeaderComponent from './components/HeaderComponent.vue';
import MainComponent from './components/MainComponent.vue';
export default {
    name: 'App',
    components: {
        HeaderComponent,
        MainComponent,
        FooterComponent
    }
}
</script>

<template>
    <HeaderComponent />
    <MainComponent />
    <FooterComponent />
</template>

<style lang="scss">
@use './style/main.scss'
</style>