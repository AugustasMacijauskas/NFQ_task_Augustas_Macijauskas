import {
    GET_ORDERS_SUCCESS,
} from './actions';

const initialState = {
    orders: [],
};

export default function (state = initialState, { type, payload }) {
    switch (type) {
        case GET_ORDERS_SUCCESS:
            return {
                ...state,
                orders: payload
            };
        default:
            return state;
    }
}