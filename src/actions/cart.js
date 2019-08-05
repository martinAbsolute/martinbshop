import {GET_CART, ADD_TO_CART, REMOVE_FROM_CART, LOAD_CART_DATA} from '.'

export const getCart = () => {
    return {
        type: GET_CART,
    }
}

export const addToCart = id => {
    return {
        type: ADD_TO_CART,
        payload: id,
    }
}

export const removeFromCart = id => {
    return {
        type: REMOVE_FROM_CART,
        payload: id,
    }
}

export const loadCartData = idArray => {
    return {
        type: LOAD_CART_DATA,
        payload: idArray,
    }
}