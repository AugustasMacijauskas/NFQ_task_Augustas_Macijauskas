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
    params = {
        filter: {},
        range: {},
        search: '',
        currentPage: 1,
    };

    handleCategoryChange = (values) => {
        this.params = {
            ...this.params,
            filter: {
                ...this.params.filter,
                category: values
            }
        };

        this.props.getProducts(this.params);
    }

    handleBrandChange = (values) => {
        this.params = {
            ...this.params,
            filter: {
                ...this.params.filter,
                brand: values
            }
        };

        this.props.getProducts(this.params);
    }

    handleOsChange = (values) => {
        this.params = {
            ...this.params,
            filter: {
                ...this.params.filter,
                os: values
            }
        };

        this.props.getProducts(this.params);
    }

    handlePriceChange = (values) => {
        this.params = {
            ...this.params,
            range: {
                ...this.params.range,
                price: {
                    min: values.min,
                    max: values.max
                }
            },
        };

        this.props.getProducts(this.params);
    }

    handleCameraChange = (values) => {
        this.params = {
            ...this.params,
            range: {
                ...this.params.range,
                primaryCamera: {
                    min: values.min,
                    max: values.max
                }
            },
        };

        this.props.getProducts(this.params);
    }

    handleStorageChange = (values) => {
        this.params = {
            ...this.params,
            range: {
                ...this.params.range,
                storage: {
                    min: values.min,
                    max: values.max
                }
            },
        };

        this.props.getProducts(this.params);
    }

    handleSizeChange = (values) => {
        this.params = {
            ...this.params,
            range: {
                ...this.params.range,
                size: {
                    min: values.min,
                    max: values.max
                }
            },
        };

        this.props.getProducts(this.params);
    }

    handleDiscountChange = (values) => {
        this.params = {
            ...this.params,
            range: {
                ...this.params.range,
                discount: {
                    min: values.min,
                    max: values.max
                }
            },
        };

        this.props.getProducts(this.params);
    }

    handleSearch = (value) => {
        this.params = {
            ...this.params,
            search: value,
        };

        this.props.getProducts(this.params);
    }

    handlePageChange = (value) => {
        this.params = {
            ...this.params,
            currentPage: value,
        };

        this.props.getProducts(this.params);
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
            handleDiscountChange={this.handleDiscountChange}
            handleSearch={this.handleSearch}
            handlePageChange={this.handlePageChange}
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