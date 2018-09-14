import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import Orders from './Orders';
import {
    getOrders,
    getCustomerIDMin,
    getCustomerIDMax,
    getProductIDMin,
    getProductIDMax,
    getAmountMin,
    getAmountMax
} from './actions';

class OrdersContainer extends PureComponent {
    componentDidMount() {
        const {
            getOrders,
            getCustomerIDMin,
            getCustomerIDMax,
            getProductIDMin,
            getProductIDMax,
            getAmountMin,
            getAmountMax
        } = this.props;

        getOrders();
        getCustomerIDMin();
        getCustomerIDMax();
        getProductIDMin();
        getProductIDMax();
        getAmountMin();
        getAmountMax();
    }

    render() {
        const {
            orders,
            customerIDMin,
            customerIDMax,
            productIDMin,
            productIDMax,
            amountMin,
            amountMax,
        } = this.props;

        return <Orders
            orders={orders}
            customerIDMin={customerIDMin}
            customerIDMax={customerIDMax}
            productIDMin={productIDMin}
            productIDMax={productIDMax}
            amountMin={amountMin}
            amountMax={amountMax}
        />;
    }
}

const mapStateToProps = state => ({
    orders: state.orders.orders,
    customerIDMin: state.orders.customerIDMin,
    customerIDMax: state.orders.customerIDMax,
    productIDMin: state.orders.productIDMin,
    productIDMax: state.orders.productIDMax,
    amountMin: state.orders.amountMin,
    amountMax: state.orders.amountMax,
});

const mapActionsToProps = {
    getOrders,
    getCustomerIDMin,
    getCustomerIDMax,
    getProductIDMin,
    getProductIDMax,
    getAmountMin,
    getAmountMax
}

export default connect(mapStateToProps, mapActionsToProps)(OrdersContainer);