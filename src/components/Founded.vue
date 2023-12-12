<script>
import { store } from '../store';
export default {
    name: 'Founded',
}
</script>

<template>
    <div class="founded">
        <p></p>
    </div>
</template>

<style lang="scss">
@use '../style/partials/variables' as *;

.founded {
    background-color: $founded-bg;
    padding: 18px;
    color: $cards-bg;
}
</style>