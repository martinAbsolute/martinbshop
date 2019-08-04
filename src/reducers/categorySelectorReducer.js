import { GET_CATEGORIES, CATEGORIES_LOADING } from '../actions'

export default function (state = [], action) {
    switch (action.type) {
        case GET_CATEGORIES:
            return {
                ...state
            }
        case CATEGORIES_LOADING:
            return {
                ...state
            }
        default:
            return state
    }
}