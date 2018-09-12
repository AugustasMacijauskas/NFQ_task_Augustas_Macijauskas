import React from 'react';
import styled from 'styled-components';
import { Router } from 'react-router-dom';
import { history } from 'core';
import { MainLayout } from 'features/layout'

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

const App = () => (
    <Wrapper>
        <Router history={history}>
            <MainLayout></MainLayout>
        </Router>
    </Wrapper>
)

export default App;