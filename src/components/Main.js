import React from 'react'

// Components
import Cart from './Cart'
import ShopDisplay from './ShopDisplay'
import CategorySelector from './CategorySelector'
import ProductPage from './ProductPage';
import Header from './Header'

// Material-UI
import { ThemeProvider } from '@material-ui/styles'
import theme from './theme'
import Zoom from '@material-ui/core/Zoom'
import Fab from '@material-ui/core/Fab'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import Grid from '@material-ui/core/Grid'

// Router
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// Redux
import { Provider } from 'react-redux'
import store from '../store'

export default function Main() {

    const cartFab = <Zoom
        key={'primary'}
        in={true}
        unmountOnExit
        timeout={300}
    >
        <Link to="/cart">
            <Fab
                aria-label='cart'
                color='primary'
                size='large'
                style={{
                    position: 'absolute',
                    bottom: theme.spacing(4),
                    right: theme.spacing(4),
                }}
            >
                <ShoppingCartIcon />
            </Fab>
        </Link>
    </Zoom>


    return <Provider store={store}>
        <Router>
            <ThemeProvider theme={theme}>
                <Header />
                <Switch>
                    <Route exact path='/cart' component={Cart} />
                    <Route exact path='/shop' render={props => <Grid container spacing={2}>
                        <Grid item xs>
                            <CategorySelector />
                        </Grid>
                        <Grid item xs={8}>
                            <ShopDisplay />
                            {cartFab}
                        </Grid>
                    </Grid>
                    } />
                    <Route exact path='/product/:id' render={props => <div>
                        <ProductPage />
                        {cartFab}
                    </div>} />
                </Switch>
            </ThemeProvider>
        </Router>
    </Provider >
}