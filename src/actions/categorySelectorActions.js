import { GET_CATEGORIES, CATEGORIES_LOADING } from '.'

export const getCategories = items => {
    return {
        type: GET_CATEGORIES,
        items,
    }
}

export const categoriesLoading = bool => {
    return {
        type: CATEGORIES_LOADING,
        payload: bool,
    }
}

export const fetchCategories = url => {
    return dispatch => {
        dispatch(CATEGORIES_LOADING(true))
        fetch(url)
            .then((res) => {
                if (!res.ok) {
                    throw Error(res.statusText);
                }
                dispatch(CATEGORIES_LOADING(false));
                return res;
            })
            .then((res) => res.json())
            .then((items) => dispatch(getCategories(items)))
    }
}