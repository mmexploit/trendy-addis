import { createSelector } from 'reselect'

const COLLECTION_ID_MAP = {
    mens :1,
    womens: 2,
    clothing: 3,
    bags: 4,
    jewellery: 5,
    glasses: 6,
    tech_accessories: 7,
}

const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
)

export const selectCollection = collectionUrlParam => 
    createSelector(
        [selectCollections],
        collections => collections.find(collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam])
    )