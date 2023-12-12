<script>
export default {
    name: 'SearchCard'
}
</script>

<template>
    <div class="select-container">
        <!-- select per la ricerca delle carte  -->
        <label for="card"></label>
        <select name="card" id="card">
            <option value="Alien">Alien</option>
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