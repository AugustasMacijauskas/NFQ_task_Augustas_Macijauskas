import {
    GET_ORDERS_SUCCESS,
    GET_CUSTOMERIDMIN_SUCCESS,
    GET_CUSTOMERIDMAX_SUCCESS,
    GET_PRODUCTIDMIN_SUCCESS,
    GET_PRODUCTIDMAX_SUCCESS,
    GET_AMOUNTMIN_SUCCESS,
    GET_AMOUNTMAX_SUCCESS,
} from './actions';

const initialState = {
    orders: [],
    customerIDMin: 0,
    customerIDMax: 0,
    productIDMin: 0,
    productIDMax: 0,
    amountMin: 0,
    amountMax: 0,
};

export default function (state = initialState, { type, payload }) {
    switch (type) {
        case GET_ORDERS_SUCCESS:
            return {
                ...state,
                orders: payload
            };
        case GET_CUSTOMERIDMIN_SUCCESS:
            return {
                ...state,
                customerIDMin: payload
            };
        case GET_CUSTOMERIDMAX_SUCCESS:
            return {
                ...state,
                customerIDMax: payload
            };
        case GET_PRODUCTIDMIN_SUCCESS:
            return {
                ...state,
                productIDMin: payload
            }
        case GET_PRODUCTIDMAX_SUCCESS:
            return {
                ...state,
                productIDMax: payload
            }
        case GET_AMOUNTMIN_SUCCESS:
            return {
                ...state,
                amountMin: payload
            }
        case GET_AMOUNTMAX_SUCCESS:
            return {
                ...state,
                amountMax: payload
            }
        default:
            return state;
    }
}