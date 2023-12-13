<script>
import axios from 'axios';
import { store } from '../store';
export default {
    name: 'SearchCard',
    data() {
        return {
            store
        }
    },
    //chiamata api per gli archetipi
    created() {
        axios.get(store.urlApiArchetypes).then((response) => {
            store.archetypes = response.data;
        })
    }
}
</script>

<template>
    <div class="select-container">
        <!-- select per la ricerca delle carte  -->
        <label for="card"></label>
        <select name="card" id="card">
            <option v-for="archetype in store.archetypes" :value="archetype.archetype_name">{{ archetype.archetype_name }}
            </option>
        </select>
    </div>
</template>

<style lang="scss" scoped>
.select-container {
    width: 1140px;
    margin: 0 auto;
}

#card {
    margin: 20px 12px;
    padding: 8px;
    border-radius: 5px;
    width: 165px;
}
</style>