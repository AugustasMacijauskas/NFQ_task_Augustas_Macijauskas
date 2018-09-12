const imitateApiDelay = (results) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(results);
        }, 200);
    });
}

export const getProducts = (params = {}) => {
    // newArray = 
    return imitateApiDelay([]) // newArray
}

export const getOrders = (params = {}) => {
    // newArray = 
    return imitateApiDelay([]) // newArray
}