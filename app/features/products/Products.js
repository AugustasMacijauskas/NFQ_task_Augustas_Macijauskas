import React from 'react';

const Products = ({ products, categories, brands, priceMin, priceMax, cameraMin, cameraMax, storageMin, storageMax, sizeMin, sizeMax, oss }) => (
    <div>
        <ul>
            {
                products.map((x, i) => {
                    return (
                        <li key={i}>
                            <p>id: {x.id}</p>
                            <p>brand: {x.brand}</p>
                            <p>model: {x.model}</p>
                            <p>category: {x.category}</p>
                            <p>weight: {x.weight}</p>
                            <p>size: {x.size}</p>
                            <p>colors: {x.colors}</p>
                            <p>storage: {x.storage}</p>
                            <p>os: {x.os}</p>
                            <p>primaryCamera: {x.primaryCamera}</p>
                            <p>price: {x.price}</p>
                            <p>discount: {x.discount}</p>
                        </li>
                    )
                })
            }
        </ul>
        <ul>
            {
                categories.map((x, i) => {
                    return <li key={i}>{x}</li>
                })
            }
        </ul>
        <ul>
            {
                brands.map((x, i) => {
                    return <li key={i}>{x}</li>
                })
            }
        </ul>
        <ul>
            <li>priceMin: {priceMin}</li>
            <li>priceMax: {priceMax}</li>
            <li>cameraMin: {cameraMin}</li>
            <li>cameraMax: {cameraMax}</li>
            <li>storageMin: {storageMin}</li>
            <li>storageMax: {storageMax}</li>
            <li>sizeMin: {sizeMin}</li>
            <li>sizeMax: {sizeMax}</li>
            <li>oss: {oss}</li>
        </ul>
    </div>
)

export default Products;