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
    return imitateApiDelay(products); // newArray
}

export const getBrands = () => {
    return imitateApiDelay(brands);
};

export const getCategories = () => {
    return imitateApiDelay(categories);
};

export const getPriceMin = () => {
    return imitateApiDelay(priceMin);
};

export const getPriceMax = () => {
    return imitateApiDelay(priceMax);
};

export const getCameraMin = () => {
    return imitateApiDelay(cameraMin);
};

export const getCameraMax = () => {
    return imitateApiDelay(cameraMax);
};

export const getStorageMin = () => {
    return imitateApiDelay(storageMin);
};

export const getStorageMax = () => {
    return imitateApiDelay(storageMax);
};

export const getSizeMin = () => {
    return imitateApiDelay(sizeMin);
};

export const getSizeMax = () => {
    return imitateApiDelay(sizeMax);
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