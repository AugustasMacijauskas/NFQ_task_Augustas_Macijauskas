import {
    GET_PRODUCTS_SUCCESS,
    GET_CATEGORIES_SUCCESS,
    GET_BRANDS_SUCCESS,
    GET_OSS_SUCCESS
} from './actions';

const initialState = {
    products: [],
    categories: [],
    brands: [],
    oss: [],
};

export default function (state = initialState, { type, payload }) {
    switch (type) {
        case GET_PRODUCTS_SUCCESS:
            return {
                ...state,
                products: payload
            };
        case GET_CATEGORIES_SUCCESS:
            return {
                ...state,
                categories: payload
            };
        case GET_BRANDS_SUCCESS:
            return {
                ...state,
                brands: payload
            };
        case GET_OSS_SUCCESS:
            return {
                ...state,
                oss: payload
            }
        default:
            return state;
    }
}