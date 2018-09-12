import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from 'constants';
import styled from 'styled-components';

const StyledH1 = styled.h1`
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    font-size: 2rem;
`;

const StyledList = styled.ul`
    list-style: none;
    padding: 0
`;

const StyledListElement = styled.li`
    margin: 0.5rem auto;
    padding: 1rem 2rem;
    text-align: center;
    border: 2px solid black;
    border-radius: 2px;
    background-color: white;

    &:hover {
        background-color: lightblue;
    }
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    font-size: 2rem;

    &:hover {
        background-color: lightblue;
    }
`;

const MainPage = () => (
    <div>
        <StyledH1>Welcome to my shop!</StyledH1>
        <Fragment>
            <StyledList>
                <StyledListElement>
                    <StyledLink
                        to={ROUTES.PRODUCTS}
                    >
                        Products
                </StyledLink>
                </StyledListElement>
                <StyledListElement>
                    <StyledLink
                        to={ROUTES.ORDERS}
                    >
                        Orders
                </StyledLink>
                </StyledListElement>
            </StyledList>
        </Fragment>
    </div>
)

export default MainPage;