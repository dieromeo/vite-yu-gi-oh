<script>
import { store } from '../store';
export default {
    name: 'Founded',
    data() {
        return {
            store,
        }
    }
}
</script>

<template>
    <div class="founded">
        <p>Found {{ store.cards.length }} cards</p>
    </div>
</template>

<style lang="scss">
@use '../style/partials/variables' as *;

.founded {
    background-color: $founded-bg;
    padding: 18px;
    color: $cards-bg;

    p {
        font-size: 14px;
        font-weight: bold;
    }
}
</style>