import { GET_CART, ADD_TO_CART, REMOVE_FROM_CART, LOAD_CART_DATA } from '../actions'

export default function (state, action) {
    switch (action.type) {
        case GET_CART:
            return {
                ...state
            }
        case ADD_TO_CART:
            return {
                ...state
            }
        case REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter(id => id !== action.payload)
            }
        case LOAD_CART_DATA:
            return {
                ...state
            }
        default:
            return state
    }
}