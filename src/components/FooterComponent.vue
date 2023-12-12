<script>
import Logo from './Logo.vue';

export default {
    name: 'FooterComponent',
    components: {
        Logo
    }
}
</script>

<template>
    <footer>
        <Logo />
    </footer>
</template>

<style lang="scss">
@use '../style/partials/variables' as *;

footer {
    background-color: $founded-bg;
    padding: 10px;
    text-align: center;

    img[data-v-42795242] {
        height: 40px;
        margin: 0;
    }
}
</style>