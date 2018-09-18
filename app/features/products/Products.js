import React from 'react';
import styled from 'styled-components';
import { CheckBoxGroup, SliderSelector, SearchField, Card, Pagination } from 'shared-components';

const StyledCheckBoxGroup = styled(CheckBoxGroup)`
    width: 100%;
    margin: 1rem auto;
    font-family: 'Roboto'; 
`;

const StyledSliderSelector = styled(SliderSelector)`
    margin: 1rem auto;
    font-family: 'Roboto'; 
`;

const StyledP = styled.p`
    margin: 3.5rem auto;
    font-family: 'Roboto'; 
`;

const Products = ({ products, categories, brands, oss, handleCategoryChange, handleBrandChange, handleOsChange, handlePriceChange, handleCameraChange, handleStorageChange, handleSizeChange, handleDiscountChange, handleSearch, handlePageChange }) => (
    <div>
        <SearchField
            onKeyUp={handleSearch}
        />
        <StyledCheckBoxGroup
            onChange={handleCategoryChange}
            data={categories}
            label='Categories'
        />
        <CheckBoxGroup
            onChange={handleBrandChange}
            data={brands}
            label='Manufacturers'
        />
        <CheckBoxGroup
            onChange={handleOsChange}
            data={oss}
            label='Operating systems'
        />
        <StyledP>Price</StyledP>
        <StyledSliderSelector
            min={products.priceMin}
            max={products.priceMax}
            onChange={handlePriceChange}
        />
        <StyledP>Camera</StyledP>
        <StyledSliderSelector
            min={products.cameraMin}
            max={products.cameraMax}
            onChange={handleCameraChange}
        />
        <StyledP>Storage</StyledP>
        <StyledSliderSelector
            min={products.storageMin}
            max={products.storageMax}
            onChange={handleStorageChange}
        />
        <StyledP>Size</StyledP>
        <StyledSliderSelector
            min={products.sizeMin}
            max={products.sizeMax}
            onChange={handleSizeChange}
        />
        <StyledP>Discount</StyledP>
        <StyledSliderSelector
            min={products.discountMin}
            max={products.discountMax}
            onChange={handleDiscountChange}
        />
        <div>
            {
                products.products.map((x, i) => {
                    return (
                        <Card
                            key={i}
                            item={x}
                        />
                    )
                })
            }
        </div>
        <Pagination
            current={products.currentPage}
            last={products.lastPage}
            onChange={handlePageChange}
        />
    </div>
)

export default Products;