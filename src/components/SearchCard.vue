<script>
export default {
    name: 'SearchCard'
}
</script>

<template>
    <label for="card"></label>
    <select name="card" id="card">
        <option value="Alien">Alien</option>
    </select>
</template>

<style lang="scss" scoped>
#card {
    margin: 20px 120px;
    padding: 8px;
    border-radius: 5px;
    width: 165px;
}
</style>