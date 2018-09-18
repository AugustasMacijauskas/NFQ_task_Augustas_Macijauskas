import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import Orders from './Orders';
import {
    getOrders,
} from './actions';

class OrdersContainer extends PureComponent {
    params = {
        range: {},
        search: '',
        currentPage: 1,
    };

    handleCustomerIDChange = (values) => {
        this.params = {
            ...this.params,
            range: {
                ...this.params.range,
                customerID: {
                    min: values.min,
                    max: values.max
                }
            },
        };

        this.props.getOrders(this.params);
    }

    handleProductIDChange = (values) => {
        this.params = {
            ...this.params,
            range: {
                ...this.params.range,
                productID: {
                    min: values.min,
                    max: values.max
                }
            },
        };

        this.props.getOrders(this.params);
    }

    handleAmountChange = (values) => {
        this.params = {
            ...this.params,
            range: {
                ...this.params.range,
                amount: {
                    min: values.min,
                    max: values.max
                }
            },
        };

        this.props.getOrders(this.params);
    }

    handleSearch = (value) => {
        this.params = {
            ...this.params,
            search: value,
        };

        this.props.getOrders(this.params);
    }

    handlePageChange = (value) => {
        this.params = {
            ...this.params,
            currentPage: value,
        };

        this.props.getOrders(this.params);
    }

    componentDidMount() {
        const {
            getOrders,
        } = this.props;

        getOrders();
    }

    render() {
        const {
            orders,
        } = this.props;

        if (!orders.orders) {
            return null;
        }
        return <Orders
            orders={orders}
            handleCustomerIDChange={this.handleCustomerIDChange}
            handleProductIDChange={this.handleProductIDChange}
            handleAmountChange={this.handleAmountChange}
            handleSearch={this.handleSearch}
            handlePageChange={this.handlePageChange}
        />;
    }
}

const mapStateToProps = state => ({
    orders: state.orders.orders,
});

const mapActionsToProps = {
    getOrders,
}

export default connect(mapStateToProps, mapActionsToProps)(OrdersContainer);