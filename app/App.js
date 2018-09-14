import React from 'react';
import styled from 'styled-components';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

import { history } from 'core';
import { MainLayout } from 'features/layout'
import store from './store';

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

const App = () => (
    <Wrapper>
        <Provider store={store}>
            <Router history={history}>
                <MainLayout></MainLayout>
            </Router>
        </Provider>
    </Wrapper>
)

export default App;