import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { MainPage } from 'features/main-page';
import { ProductsContainer } from 'features/products';
import { OrdersContainer } from 'features/orders';
import { ErrorPage } from 'features/error';
import { ROUTES } from 'constants';

class MainLayout extends Component {
    render() {
        return (
            <Switch>
                <Route path={ROUTES.MAIN} exact component={MainPage} />
                <Route path={ROUTES.PRODUCTS} exact component={ProductsContainer} />
                <Route path={ROUTES.ORDERS} exact component={OrdersContainer} />
                <Route exact component={ErrorPage} />
            </Switch>
        );
    }
}

export default MainLayout;