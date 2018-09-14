import {
    GET_PRODUCTS_SUCCESS,
    GET_CATEGORIES_SUCCESS,
    GET_BRANDS_SUCCESS,
    GET_PRICEMIN_SUCCESS,
    GET_PRICEMAX_SUCCESS,
    GET_CAMERAMIN_SUCCESS,
    GET_CAMERAMAX_SUCCESS,
    GET_STORAGEMIN_SUCCESS,
    GET_STORAGEMAX_SUCCESS,
    GET_SIZEMIN_SUCCESS,
    GET_SIZEMAX_SUCCESS,
    GET_OSS_SUCCESS
} from './actions';

const initialState = {
    products: [],
    categories: [],
    brands: [],
    priceMin: 0,
    priceMax: 0,
    cameraMin: 0,
    cameraMax: 0,
    storageMin: 0,
    storageMax: 0,
    sizeMin: 0,
    sizeMax: 0,
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
        case GET_PRICEMIN_SUCCESS:
            return {
                ...state,
                priceMin: payload
            }
        case GET_PRICEMAX_SUCCESS:
            return {
                ...state,
                priceMax: payload
            }
        case GET_CAMERAMIN_SUCCESS:
            return {
                ...state,
                cameraMin: payload
            }
        case GET_CAMERAMAX_SUCCESS:
            return {
                ...state,
                cameraMax: payload
            }
        case GET_STORAGEMIN_SUCCESS:
            return {
                ...state,
                storageMin: payload
            }
        case GET_STORAGEMAX_SUCCESS:
            return {
                ...state,
                storageMax: payload
            }
        case GET_SIZEMIN_SUCCESS:
            return {
                ...state,
                sizeMin: payload
            }
        case GET_SIZEMAX_SUCCESS:
            return {
                ...state,
                sizeMax: payload
            }
        case GET_OSS_SUCCESS:
            return {
                ...state,
                oss: payload
            }
        default:
            return state;
    }
}