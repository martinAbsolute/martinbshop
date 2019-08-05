import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Link } from "react-router-dom";

import { fetchProductInfo } from '../actions/productPage'
import PropTypes from 'prop-types'

class ProductPage extends Component {

    componentDidMount() {
        const productId = this.props.match.params.id
        this.props.fetchProductInfo(`http://localhost:3001/api/product/${productId}`)
    }

    render() {
        if (this.props.isLoading) {
            return <p>Loading...</p>
        }
        if (this.props.hasErrored) {
            return <p>Sorry, there was a problem loading categories...</p>
        }
        const product = this.props.product
        return <div>
            <h3>{product.name}</h3>
            <h3>{product._id}</h3>
            <p>Category:</p>
            {/* <Link to={{ pathname: "/shop", search: `?category=${product.category._id}` }}>{product.category.name}</Link> */}
        </div>
    }
}

const mapStateToProps = state => {
    return {
        product: state.productPage.product,
        isLoading: state.productPage.productLoading,
        hasErrored: state.productPage.productErrored,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchProductInfo: url => dispatch(fetchProductInfo(url))
    }
}

ProductPage.propTypes = {
    fetchProductInfo: PropTypes.func.isRequired,
    product: PropTypes.object.isRequired,
    isLoading: PropTypes.bool.isRequired,
    hasErrored: PropTypes.bool.isRequired,
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProductPage))