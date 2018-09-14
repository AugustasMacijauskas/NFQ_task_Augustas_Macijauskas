import React from 'react';

const Orders = ({ orders, customerIDMin, customerIDMax, productIDMin, productIDMax, amountMin, amountMax }) => (
    <div>
        <ul>
            {
                orders.map((x, i) => {
                    return (
                        <li key={i}>
                            <p>ID: {x.id}</p>
                            <p>CustomerID: {x.customerID}</p>
                            <p>ProductID: {x.productID}</p>
                            <p>Amount: {x.amount}</p>
                        </li>
                    )
                })
            }
        </ul>
        <ul>
            <li>customerIDMin: {customerIDMin}</li>
            <li>customerIDMax: {customerIDMax}</li>
            <li>productIDMin: {productIDMin}</li>
            <li>productIDMax: {productIDMax}</li>
            <li>amountMin: {amountMin}</li>
            <li>amountMax: {amountMax}</li>
        </ul>
    </div>
)

export default Orders;