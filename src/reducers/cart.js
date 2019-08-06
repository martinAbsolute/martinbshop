import { ADD_TO_CART, REMOVE_FROM_CART, LOAD_CART_DATA, CART_LOADING, CART_ERRORED } from '../actions'

const initialState = {
    cartIds: [],
    cartDetails: [],
    cartLoading: false,
    cartErrored: false,
}

export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                cartIds: [...state.cartIds, action.payload],
            }
        case REMOVE_FROM_CART:
            const newCartDetails = state.cartDetails.slice()
            function findWithAttr(array, attr, value) {
                for (var i = 0; i < array.length; i += 1) {
                    if (array[i][attr] === value) {
                        return i;
                    }
                }
                return -1;
            }
            newCartDetails.splice(findWithAttr(newCartDetails, '_id', action.payload), 1)
            const newCart = state.cartIds.slice()
            newCart.splice(newCart.indexOf(action.payload), 1)
            return {
                ...state,
                cartIds: newCart,
                cartDetails: newCartDetails
            }
        case LOAD_CART_DATA:
            return {
                ...state,
                cartDetails: action.payload
            }
        case CART_LOADING:
            return {
                ...state,
                cartLoading: action.payload
            }
        case CART_ERRORED:
            return {
                ...state,
                cartErrored: action.payload
            }
        default:
            return state
    }
}