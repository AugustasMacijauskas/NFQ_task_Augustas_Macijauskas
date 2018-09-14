import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { MainPage } from 'features/main-page';
import { ProductsContainer } from 'features/products';
import { OrdersContainer } from 'features/orders';
import { ROUTES } from 'constants';

class MainLayout extends Component {
    render() {
        return (
            <Switch>
                <Route path={ROUTES.MAIN} exact component={MainPage} />
                <Route path={ROUTES.PRODUCTS} exact component={ProductsContainer} />
                <Route path={ROUTES.ORDERS} exact component={OrdersContainer} />
            </Switch>
        );
    }
}

export default MainLayout;