import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Link } from "react-router-dom";

import { fetchProducts } from '../actions/shopDisplay'
import PropTypes from 'prop-types'

class ShopDisplay extends Component {

    componentDidMount() {
        const params = new URLSearchParams(this.props.location.search)
        const categoryToLoad = params.get("category")
        this.props.fetchProducts('http://localhost:3001/api/product', categoryToLoad)
    }

    render() {
        if (this.props.isLoading) {
            return <p>Loading...</p>
        }
        if (this.props.hasErrored) {
            return <p>Sorry, there was a problem loading categories...</p>
        }

        const products = this.props.products
        return <ul>
            {products.map(item =>
                <Link key={item._id} to={`/product/${item._id}`}>
                    <li>
                        <h3>{item.name}</h3>
                        <h3>{item._id}</h3>
                    </li>
                </Link>
            )}
        </ul>
    }
}

const mapStateToProps = state => {
    return {
        products: state.shopDisplay.products,
        isLoading: state.shopDisplay.productsLoading,
        hasErrored: state.shopDisplay.productsErrored,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchProducts: (url, categoryToLoad) => dispatch(fetchProducts(url, categoryToLoad))
    }
}

ShopDisplay.propTypes = {
    fetchProducts: PropTypes.func.isRequired,
    products: PropTypes.array.isRequired,
    isLoading: PropTypes.bool.isRequired,
    hasErrored: PropTypes.bool.isRequired,
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ShopDisplay))