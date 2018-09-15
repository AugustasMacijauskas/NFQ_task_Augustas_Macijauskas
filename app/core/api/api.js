import { products, brands, categories, priceMin, priceMax, cameraMin, cameraMax, storageMin, storageMax, sizeMin, sizeMax, oss, orders, customerIDMin, customerIDMax, productIDMin, productIDMax, amountMin, amountMax } from './data';

const imitateApiDelay = (results) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(results);
        }, 200);
    });
}

// Products

export const getProducts = (params = {}) => {
    let newProducts = products.slice();
    if (params.filter) {
        const keys = Object.keys(params.filter);
        keys.forEach(key => {
            if (params.filter[key] && params.filter[key].length) {
                newProducts = newProducts.filter(x => params.filter[key].includes(x[key]));
            }
        });
    }

    console.log(newProducts);

    return imitateApiDelay({
        currentPage: 1,
        priceMin,
        priceMax,
        cameraMin,
        cameraMax,
        storageMin,
        storageMax,
        sizeMin,
        sizeMax,
        length: products.length,
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
    // newArray = 
    return imitateApiDelay(orders); // newArray
}

export const getCustomerIDMin = () => {
    return imitateApiDelay(customerIDMin);
};

export const getCustomerIDMax = () => {
    return imitateApiDelay(customerIDMax);
};

export const getProductIDMin = () => {
    return imitateApiDelay(productIDMin);
};

export const getProductIDMax = () => {
    return imitateApiDelay(productIDMax);
};

export const getAmountMin = () => {
    return imitateApiDelay(amountMin);
};

export const getAmountMax = () => {
    return imitateApiDelay(amountMax);
};