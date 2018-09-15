import { api } from 'core';

export const GET_PRODUCTS_REQUEST = 'PRODUCTS/GET_PRODUCTS_REQUEST';
export const GET_PRODUCTS_SUCCESS = 'PRODUCTS/GET_PRODUCTS_SUCCESS';

export const GET_CATEGORIES_REQUEST = 'PRODUCTS/GET_CATEGORIES_REQUEST';
export const GET_CATEGORIES_SUCCESS = 'PRODUCTS/GET_CATEGORIES_SUCCESS';

export const GET_BRANDS_REQUEST = 'PRODUCTS/GET_BRANDS_REQUEST';
export const GET_BRANDS_SUCCESS = 'PRODUCTS/GET_BRANDS_SUCCESS';

export const GET_PRICEMIN_REQUEST = 'PRODUCTS/GET_PRICEMIN_REQUEST';
export const GET_PRICEMIN_SUCCESS = 'PRODUCTS/GET_PRICEMIN_SUCCESS';

export const GET_PRICEMAX_REQUEST = 'PRODUCTS/GET_PRICEMAX_REQUEST';
export const GET_PRICEMAX_SUCCESS = 'PRODUCTS/GET_PRICEMAX_SUCCESS';

export const GET_CAMERAMIN_REQUEST = 'PRODUCTS/GET_CAMERAMIN_REQUEST';
export const GET_CAMERAMIN_SUCCESS = 'PRODUCTS/GET_CAMERAMIN_SUCCESS';

export const GET_CAMERAMAX_REQUEST = 'PRODUCTS/GET_CAMERAMAX_REQUEST';
export const GET_CAMERAMAX_SUCCESS = 'PRODUCTS/GET_CAMERAMAX_SUCCESS';

export const GET_STORAGEMIN_REQUEST = 'PRODUCTS/GET_STORAGEMIN_REQUEST';
export const GET_STORAGEMIN_SUCCESS = 'PRODUCTS/GET_STORAGEMIN_SUCCESS';

export const GET_STORAGEMAX_REQUEST = 'PRODUCTS/GET_STORAGEMAX_REQUEST';
export const GET_STORAGEMAX_SUCCESS = 'PRODUCTS/GET_STORAGEMAX_SUCCESS';

export const GET_SIZEMIN_REQUEST = 'PRODUCTS/GET_SIZEMIN_REQUEST';
export const GET_SIZEMIN_SUCCESS = 'PRODUCTS/GET_SIZEMIN_SUCCESS';

export const GET_SIZEMAX_REQUEST = 'PRODUCTS/GET_SIZEMAX_REQUEST';
export const GET_SIZEMAX_SUCCESS = 'PRODUCTS/GET_SIZEMAX_SUCCESS';

export const GET_OSS_REQUEST = 'PRODUCTS/GET_OS_REQUEST';
export const GET_OSS_SUCCESS = 'PRODUCTS/GET_OS_SUCCESS';

export const getProducts = (params = {}) => async dispatch => {
    dispatch({ type: GET_PRODUCTS_REQUEST });

    dispatch({
        type: GET_PRODUCTS_SUCCESS,
        payload: await api.getProducts(params)
    });
};

export const getCategories = () => async dispatch => {
    dispatch({ type: GET_CATEGORIES_REQUEST });

    dispatch({
        type: GET_CATEGORIES_SUCCESS,
        payload: await api.getCategories()
    });
};

export const getBrands = () => async dispatch => {
    dispatch({ type: GET_BRANDS_REQUEST });

    dispatch({
        type: GET_BRANDS_SUCCESS,
        payload: await api.getBrands()
    });
};

export const getOss = () => async dispatch => {
    dispatch({ type: GET_OSS_REQUEST });

    dispatch({
        type: GET_OSS_SUCCESS,
        payload: await api.getOss()
    });
};

