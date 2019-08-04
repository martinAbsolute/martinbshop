import React from 'react'

import Cart from './Cart'
import ShopDisplay from './ShopDisplay'

// Router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Redux
import { Provider } from 'react-redux'
import store from '../store'

export default function Main() {
    return <Provider store={store}>
        <Router>
            <Switch>
                <Route path='/cart' exact component={Cart}></Route>
                <Route path='/shop' exact component={ShopDisplay}></Route>
            </Switch>
        </Router>
    </Provider>
}