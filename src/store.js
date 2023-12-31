import { reactive } from "vue";

export const store = reactive({
    urlApiCards: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?&num=20&offset=0&',
    urlApiArchetypes: 'https://db.ygoprodeck.com/api/v7/archetypes.php',
    cards: [],
    archetypes: [],
    searchInput: ''
});