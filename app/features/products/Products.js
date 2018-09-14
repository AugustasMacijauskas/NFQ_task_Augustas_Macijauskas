import React from 'react';

const Products = ({ products, categories, brands, priceMin, priceMax, cameraMin, cameraMax, storageMin, storageMax, sizeMin, sizeMax, oss }) => (
    <div>
        <ul>
            {
                products.map((x, i) => {
                    return (
                        <li key={i}>
                            <p>{x.id}</p>
                            <p>{x.brand}</p>
                            <p>{x.model}</p>
                            <p>{x.category}</p>
                            <p>{x.weight}</p>
                            <p>{x.size}</p>
                            <p>{x.colors}</p>
                            <p>{x.storage}</p>
                            <p>{x.os}</p>
                            <p>{x.primaryCamera}</p>
                            <p>{x.price}</p>
                            <p>{x.discount}</p>
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
            <li>{priceMin}</li>
            <li>{priceMax}</li>
            <li>{cameraMin}</li>
            <li>{cameraMax}</li>
            <li>{storageMin}</li>
            <li>{storageMax}</li>
            <li>{sizeMin}</li>
            <li>{sizeMax}</li>
            <li>{oss}</li>
        </ul>
    </div>
)

export default Products;