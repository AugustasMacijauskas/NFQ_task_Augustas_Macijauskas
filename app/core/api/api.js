import { products, brands, categories, priceMin, priceMax, cameraMin, cameraMax, storageMin, storageMax, sizeMin, sizeMax, discountMin, discountMax, oss, orders, customerIDMin, customerIDMax, productIDMin, productIDMax, amountMin, amountMax } from './data';

const imitateApiDelay = (results) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(results);
        }, 200);
    });
}

// Products

export const getProducts = (params = {}) => {
    params.currentPage = params.currentPage || 1;
    let newProducts = products.slice();
    if (params.filter) {
        const keys = Object.keys(params.filter);
        keys.forEach(key => {
            if (params.filter[key] && params.filter[key].length) {
                newProducts = newProducts.filter(x => params.filter[key].includes(x[key]));
            }
        });
    }

    if (params.range) {
        const keys = Object.keys(params.range);
        keys.forEach(key => {
            if (params.range[key]) {
                newProducts = newProducts.filter(x => x[key] >= params.range[key].min && x[key] <= params.range[key].max)
            }
        })
    }

    if (params.search) {
        const keys = ['id', 'category', 'model', 'brand', 'weight', 'size', 'colors', 'storage', 'os', 'primaryCamera', 'price', 'discount'];
        if (params.search.value) {
            const search = params.search.value.toLowerCase();
            newProducts = newProducts.filter(x => keys.some(key => x[key].toString().toLowerCase().includes(search)))
        }
    }

    const lastPage = Math.ceil(newProducts.length / 10);
    if (params.currentPage) {
        const start = (params.currentPage - 1) * 10;
        newProducts = newProducts.slice(start, 10 + start);
    }


    return imitateApiDelay({
        currentPage: params.currentPage,
        lastPage,
        priceMin,
        priceMax,
        cameraMin,
        cameraMax,
        storageMin,
        storageMax,
        sizeMin,
        sizeMax,
        discountMin,
        discountMax,
        pageSize: 10,
        products: newProducts
    });
}

export const getBrands = () => {
    return imitateApiDelay(brands);
};

export const getCategories = () => {
    return imitateApiDelay(categories);
};

export const getOss = () => {
    return imitateApiDelay(oss);
};



// Orders

export const getOrders = (params = {}) => {
    params.currentPage = params.currentPage || 1;
    let newOrders = orders.slice();
    if (params.range) {
        const keys = Object.keys(params.range);
        keys.forEach(key => {
            if (params.range[key]) {
                newOrders = newOrders.filter(x => x[key] >= params.range[key].min && x[key] <= params.range[key].max)
            }
        })
    }

    if (params.search) {
        const keys = ['id', 'customerID', 'productID', 'amount'];
        if (params.search.value) {
            const search = params.search.value.toLowerCase();
            newOrders = newOrders.filter(x => keys.some(key => x[key].toString().toLowerCase().includes(search)))
        }
    }

    const lastPage = Math.ceil(newOrders.length / 10);
    if (params.currentPage) {
        const start = (params.currentPage - 1) * 10;
        newOrders = newOrders.slice(start, 10 + start);
    }

    return imitateApiDelay({
        currentPage: params.currentPage,
        lastPage,
        customerIDMin,
        customerIDMax,
        productIDMin,
        productIDMax,
        amountMin,
        amountMax,
        pageSize: 10,
        orders: newOrders
    });
}