import React from 'react';
import { CheckBoxGroup, RadioBoxGroup, Slider } from 'shared-components';
import SliderSelector from '../../shared-components/SliderSelector';

const Products = ({ products, categories, brands, oss, handleCategoryChange, handleBrandChange, handleOsChange, handlePriceUpdate, handleCameraUpdate, handleStorageUpdate, handleSizeUpdate }) => (
    <div>
        <CheckBoxGroup
            onChange={handleCategoryChange}
            data={categories}
            label='Categories'
        />
        <br />
        <br />
        <CheckBoxGroup
            onChange={handleBrandChange}
            data={brands}
            label='Manufacturers'
        />
        <br />
        <br />
        <CheckBoxGroup
            onChange={handleOsChange}
            data={oss}
            label='Operating systems'
        />
        <br />
        <br />
        <br />
        <br />
        <br />
        <SliderSelector
            min={products.priceMin}
            max={products.priceMax}
            onEnd={handlePriceUpdate}
        />
        <ul>
            {
                products.products.map((x, i) => {
                    return (
                        <li key={i}>
                            <p>id: {x.id}</p>
                            <p>brand: {x.brand}</p>
                            <p>model: {x.model}</p>
                            <p>category: {x.category}</p>
                            <p>weight: {x.weight}</p>
                            <p>size: {x.size}</p>
                            <div>
                                <RadioBoxGroup
                                    data={x.colors}
                                    label='Colors'
                                />
                            </div>
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
    </div>
)

export default Products;