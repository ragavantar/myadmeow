import React from 'react';
import { Route } from 'react-router-dom';

import Test from '../pages/test';

const Routes = (
    <>
        <Route path="/about">
            <p>about</p>
        </Route>
        <Route path="/test" component={Test}>
        </Route>
    </> 
);

export default Routes;