import { api } from 'core';

export const GET_ORDERS_REQUEST = 'ORDERS/GET_ORDERS_REQUEST';
export const GET_ORDERS_SUCCESS = 'ORDERS/GET_ORDERS_SUCCESS';

export const getOrders = (params = {}) => async dispatch => {
    dispatch({ type: GET_ORDERS_REQUEST });

    dispatch({
        type: GET_ORDERS_SUCCESS,
        payload: await api.getOrders(params)
    });
};