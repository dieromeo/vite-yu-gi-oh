<script>
import HeaderComponent from './components/HeaderComponent.vue';
import MainComponent from './components/MainComponent.vue';
export default {
    name: 'App',
    components: {
        HeaderComponent,
        MainComponent
    }
}
</script>

<template>
    <HeaderComponent />
    <MainComponent />
</template>

<style lang="scss">
@use './style/main.scss'
</style>