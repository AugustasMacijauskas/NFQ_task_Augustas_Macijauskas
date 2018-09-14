import { api } from 'core';

export const GET_ORDERS_REQUEST = 'ORDERS/GET_ORDERS_REQUEST';
export const GET_ORDERS_SUCCESS = 'ORDERS/GET_ORDERS_SUCCESS';

export const GET_CUSTOMERIDMIN_REQUEST = 'PRODUCTS/GET_CUSTOMERIDMIN_REQUEST';
export const GET_CUSTOMERIDMIN_SUCCESS = 'PRODUCTS/GET_CUSTOMERIDMIN_SUCCESS';

export const GET_CUSTOMERIDMAX_REQUEST = 'PRODUCTS/GET_CUSTOMERIDMAX_REQUEST';
export const GET_CUSTOMERIDMAX_SUCCESS = 'PRODUCTS/GET_CUSTOMERIDMAX_SUCCESS';

export const GET_PRODUCTIDMIN_REQUEST = 'PRODUCTS/GET_PRODUCTIDMIN_REQUEST';
export const GET_PRODUCTIDMIN_SUCCESS = 'PRODUCTS/GET_PRODUCTIDMIN_SUCCESS';

export const GET_PRODUCTIDMAX_REQUEST = 'PRODUCTS/GET_PRODUCTIDMAX_REQUEST';
export const GET_PRODUCTIDMAX_SUCCESS = 'PRODUCTS/GET_PRODUCTIDMAX_SUCCESS';

export const GET_AMOUNTMIN_REQUEST = 'PRODUCTS/GET_AMOUNTMIN_REQUEST';
export const GET_AMOUNTMIN_SUCCESS = 'PRODUCTS/GET_AMOUNTMIN_SUCCESS';

export const GET_AMOUNTMAX_REQUEST = 'PRODUCTS/GET_AMOUNTMAX_REQUEST';
export const GET_AMOUNTMAX_SUCCESS = 'PRODUCTS/GET_AMOUNTMAX_SUCCESS';

export const getOrders = (params = {}) => async dispatch => {
    dispatch({ type: GET_ORDERS_REQUEST });

    dispatch({
        type: GET_ORDERS_SUCCESS,
        payload: await api.getOrders(params)
    });
};

export const getCustomerIDMin = () => async dispatch => {
    dispatch({ type: GET_CUSTOMERIDMIN_REQUEST });

    dispatch({
        type: GET_CUSTOMERIDMIN_SUCCESS,
        payload: await api.getCustomerIDMin()
    });
};

export const getCustomerIDMax = () => async dispatch => {
    dispatch({ type: GET_CUSTOMERIDMAX_REQUEST });

    dispatch({
        type: GET_CUSTOMERIDMAX_SUCCESS,
        payload: await api.getCustomerIDMax()
    });
};

export const getProductIDMin = () => async dispatch => {
    dispatch({ type: GET_PRODUCTIDMIN_REQUEST });

    dispatch({
        type: GET_PRODUCTIDMIN_SUCCESS,
        payload: await api.getProductIDMin()
    });
};

export const getProductIDMax = () => async dispatch => {
    dispatch({ type: GET_PRODUCTIDMAX_REQUEST });

    dispatch({
        type: GET_PRODUCTIDMAX_SUCCESS,
        payload: await api.getProductIDMax()
    });
};

export const getAmountMin = () => async dispatch => {
    dispatch({ type: GET_AMOUNTMIN_REQUEST });

    dispatch({
        type: GET_AMOUNTMIN_SUCCESS,
        payload: await api.getAmountMin()
    });
};

export const getAmountMax = () => async dispatch => {
    dispatch({ type: GET_AMOUNTMAX_REQUEST });

    dispatch({
        type: GET_AMOUNTMAX_SUCCESS,
        payload: await api.getAmountMax()
    });
};