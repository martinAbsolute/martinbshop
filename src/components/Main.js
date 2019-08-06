import React from 'react'

import Cart from './Cart'
import ShopDisplay from './ShopDisplay'
import CategorySelector from './CategorySelector'
import ProductPage from './ProductPage';

// Router
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// Redux
import { Provider } from 'react-redux'
import store from '../store'

export default function Main() {
    return <Provider store={store}>
        <Router>
            <Link to="/cart">Cart</Link>
            <Link to="/shop">Shop</Link>
            <CategorySelector />
            <Switch>
                <Route exact path='/cart' component={Cart}></Route>
                <Route exact path='/shop' component={ShopDisplay}></Route>
                <Route exact path='/product/:id' component={ProductPage}></Route>
            </Switch>
        </Router>
    </Provider>
}