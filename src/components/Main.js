import React from 'react'

import Cart from './Cart'
import ShopDisplay from './ShopDisplay'
import CategorySelector from './CategorySelector'

// Router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Redux
import { Provider } from 'react-redux'
import store from '../store'

export default function Main() {
    return <Provider store={store}>
        <Router>
            <CategorySelector />
            <Switch>
                <Route exact path='/cart' component={Cart}></Route>
                <Route exact path='/shop' component={ShopDisplay}></Route>
            </Switch>
        </Router>
    </Provider>
}