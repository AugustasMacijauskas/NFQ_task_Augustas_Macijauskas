import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from 'constants';

const MainPage = () => (
    <Fragment>
        <Link to={ROUTES.PRODUCTS} style={{ textDecoration: 'none' }}>Products</Link>
        <Link to={ROUTES.ORDERS}>Orders</Link>
    </Fragment>
)

export default MainPage;