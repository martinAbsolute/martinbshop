import { GET_CATEGORIES, CATEGORIES_LOADING, CATEGORIES_ERRORED } from '.'

export const fetchCategories = url => {
    return dispatch => {
        dispatch(categoriesLoading(true))
        fetch(url)
            .then(res => {
                dispatch(categoriesLoading(false))
                return res;
            })
            .then(res => res.json())
            .then(items => dispatch(getCategoriesSuccess(items)))
            .catch(() => dispatch(categoriesErrored(true)))
    }
}

export const getCategoriesSuccess = itemsArray => {
    return {
        type: GET_CATEGORIES,
        payload: itemsArray,
    }
}

export const categoriesLoading = bool => {
    return {
        type: CATEGORIES_LOADING,
        payload: bool,
    }
}

export const categoriesErrored = bool => {
    return {
        type: CATEGORIES_ERRORED,
        payload: bool,
    }
}