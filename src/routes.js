import React from "react";
import {  BrowserRouter, Route, Switch } from 'react-router-dom';

import SignUp from './pages/SignUp';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={SignUp} />
        </Switch>
    </BrowserRouter>
);

export default Routes;