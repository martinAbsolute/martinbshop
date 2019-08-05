import { combineReducers } from 'redux'

import cartReducer from './cart'
import categorySelectorReducer from './categorySelector'
import shopDisplayReducer from './shopDisplay'

const rootReducer = combineReducers({
    cart: cartReducer,
    categorySelector: categorySelectorReducer,
    shopDisplay: shopDisplayReducer,
})

export default rootReducer