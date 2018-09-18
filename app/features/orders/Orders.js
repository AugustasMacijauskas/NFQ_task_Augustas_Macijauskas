import React from 'react';
import styled from 'styled-components';
import { SliderSelector, SearchField, Pagination, Card } from 'shared-components';

const StyledSliderSelector = styled(SliderSelector)`
    margin: 1rem auto;
    font-family: 'Roboto'; 
`;

const StyledP = styled.p`
    margin: 3.5rem auto;
    font-family: 'Roboto'; 
`;

const Orders = ({ orders, handleCustomerIDChange, handleProductIDChange, handleAmountChange, handleSearch, handlePageChange }) => (
    <div>
        <SearchField
            onKeyUp={handleSearch}
        />
        <StyledP>CustomerID</StyledP>
        <StyledSliderSelector
            min={orders.customerIDMin}
            max={orders.customerIDMax}
            onChange={handleCustomerIDChange}
        />
        <StyledP>ProductID</StyledP>
        <StyledSliderSelector
            min={orders.productIDMin}
            max={orders.productIDMax}
            onChange={handleProductIDChange}
        />
        <StyledP>Amount</StyledP>
        <StyledSliderSelector
            min={orders.amountMin}
            max={orders.amountMax}
            onChange={handleAmountChange}
        />
        <div>
            {
                orders.orders.map((x, i) => {
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
            current={orders.currentPage}
            last={orders.lastPage}
            onChange={handlePageChange}
        />
    </div>
)

export default Orders;