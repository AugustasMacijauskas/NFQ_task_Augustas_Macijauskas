import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import Products from './Products';
import {
    getProducts,
    getCategories,
    getBrands,
    getOss,
} from './actions';

class ProductsContainer extends PureComponent {
    handleCategoryChange = (values) => {
        this.props.getProducts({
            filter: { category: values },
        });
    }

    handleBrandChange = (values) => {
        this.props.getProducts({
            filter: { brand: values },
        });
    }

    handleOsChange = (values) => {
        this.props.getProducts({
            filter: { os: values },
        });
    }

    handlePriceUpdate = (values) => {
        this.props.getProducts({
            minMaxFilter: { priceMin: values },
        });
    }

    componentDidMount() {
        const {
            getProducts,
            getCategories,
            getBrands,
            getOss,
        } = this.props;

        getProducts();
        getCategories();
        getBrands();
        getOss();
    }

    render() {
        const {
            products,
            categories,
            brands,
            oss
        } = this.props;

        if (!products.products) {
            return null;
        }
        return <Products
            products={products}
            categories={categories}
            brands={brands}
            oss={oss}
            handleCategoryChange={this.handleCategoryChange}
            handleBrandChange={this.handleBrandChange}
            handleOsChange={this.handleOsChange}
            handlePriceChange={this.handlePriceChange}
            handleCameraChange={this.handleCameraChange}
            handleStorageChange={this.handleStorageChange}
            handleSizeChange={this.handleSizeChange}
        />;
    }
}

const mapStateToProps = state => ({
    products: state.products.products,
    categories: state.products.categories,
    brands: state.products.brands,
    oss: state.products.oss
});

const mapActionsToProps = {
    getProducts,
    getCategories,
    getBrands,
    getOss,
};

export default connect(mapStateToProps, mapActionsToProps)(ProductsContainer);