<script>
import Logo from './Logo.vue';

export default {
    name: 'HeaderComponent',
    components: {
        Logo,
    }
}
</script>

<template>
    <header>
        <Logo />
        <h1>Yu-Gi-Oh Api</h1>
    </header>
</template>

<style lang="scss">
header {
    display: flex;
    align-items: center;

    h1 {
        padding: 18px 0;
    }
}
</style>