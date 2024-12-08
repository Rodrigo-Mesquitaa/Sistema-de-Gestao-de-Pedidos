import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import OrdersPage from './pages/OrdersPage';

const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/orders" component={OrdersPage} />
            </Switch>
        </Router>
    );
};

export default AppRouter;