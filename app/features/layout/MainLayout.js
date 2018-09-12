import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { MainPage } from 'features/main-page';
import { Products } from 'features/products';
import { Orders } from 'features/orders';
import { ROUTES } from 'constants';

class MainLayout extends Component {
    render() {
        return (
            <Switch>
                <Route path={ROUTES.MAIN} exact component={MainPage} />
                <Route path={ROUTES.PRODUCTS} exact component={Products} />
                <Route path={ROUTES.ORDERS} exact component={Orders} />
            </Switch>
        );
    }
}

export default MainLayout;