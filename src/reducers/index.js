import { combineReducers } from 'redux'

import cartReducer from './cart'
import categorySelectorReducer from './categorySelector'
import shopDisplayReducer from './shopDisplay'
import productPageReducer from './productPage'

const rootReducer = combineReducers({
    cart: cartReducer,
    categorySelector: categorySelectorReducer,
    shopDisplay: shopDisplayReducer,
    productPage: productPageReducer,
})

export default rootReducer