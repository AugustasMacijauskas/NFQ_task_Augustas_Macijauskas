import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import Products from './Products';
import {
    getProducts,
    getCategories,
    getBrands,
    getPriceMin,
    getPriceMax,
    getCameraMin,
    getCameraMax,
    getStorageMin,
    getStorageMax,
    getSizeMin,
    getSizeMax,
    getOss,
} from './actions';

class ProductsContainer extends PureComponent {
    componentDidMount() {
        const {
            getProducts,
            getCategories,
            getBrands,
            getPriceMin,
            getPriceMax,
            getCameraMin,
            getCameraMax,
            getStorageMin,
            getStorageMax,
            getSizeMin,
            getSizeMax,
            getOss,
        } = this.props;

        getProducts();
        getCategories();
        getBrands();
        getPriceMin();
        getPriceMax();
        getCameraMin();
        getCameraMax();
        getStorageMin();
        getStorageMax();
        getSizeMin();
        getSizeMax();
        getOss();
    }

    render() {
        const {
            products,
            categories,
            brands,
            priceMin,
            priceMax,
            cameraMin,
            cameraMax,
            storageMin,
            storageMax,
            sizeMin,
            sizeMax,
            oss
        } = this.props;

        return <Products
            products={products}
            categories={categories}
            brands={brands}
            priceMin={priceMin}
            priceMax={priceMax}
            cameraMin={cameraMin}
            cameraMax={cameraMax}
            storageMin={storageMin}
            storageMax={storageMax}
            sizeMin={sizeMin}
            sizeMax={sizeMax}
            oss={oss}
        />;
    }
}

const mapStateToProps = state => ({
    products: state.products.products,
    categories: state.products.categories,
    brands: state.products.brands,
    priceMin: state.products.priceMin,
    priceMax: state.products.priceMax,
    cameraMin: state.products.cameraMin,
    cameraMax: state.products.cameraMax,
    storageMin: state.products.storageMin,
    storageMax: state.products.storageMax,
    sizeMin: state.products.sizeMin,
    sizeMax: state.products.sizeMax,
    oss: state.products.oss
});

const mapActionsToProps = {
    getProducts,
    getCategories,
    getBrands,
    getPriceMin,
    getPriceMax,
    getCameraMin,
    getCameraMax,
    getStorageMin,
    getStorageMax,
    getSizeMin,
    getSizeMax,
    getOss,
};

export default connect(mapStateToProps, mapActionsToProps)(ProductsContainer);