import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import LandingPage from '../../Views/Landing';
import DashboardPage from '../../Views/Dashboard'

const AppRoutes = () => (
    <Router>
        <Switch>
            <Route exact path={ROUTES.LANDING} component={LandingPage} />
            <Route path={ROUTES.DASHBOARD} component={DashboardPage} />
        </Switch>
    </Router>
)

export default AppRoutes;