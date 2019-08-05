import { GET_PRODUCT_INFO, PRODUCT_LOADING, PRODUCT_ERRORED } from '.'


export const fetchProductInfo = url => {
    return dispatch => {
        dispatch(productLoading(true))
        fetch(url)
            .then(res => {
                dispatch(productLoading(false))
                return res;
            })
            .then(res => res.json())
            .then(product => dispatch(getProductInfoSuccess(product)))
            .catch(() => dispatch(productErrored(true)))
    }
}

export const getProductInfoSuccess = productObject => {
    return {
        type: GET_PRODUCT_INFO,
        payload: productObject,
    }
}

export const productLoading = bool => {
    return {
        type: PRODUCT_LOADING,
        payload: bool,
    }
}

export const productErrored = bool => {
    return {
        type: PRODUCT_ERRORED,
        payload: bool,
    }
}