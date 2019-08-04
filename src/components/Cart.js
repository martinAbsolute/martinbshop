import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { getCart, removeFromCart } from '../actions/cartActions'
import PropTypes from 'prop-types'

class Cart extends Component {

    componentDidMount() {
        this.props.getCart()
    }

    deleteButtonClick = id => {
        this.props.removeFromCart(id)
    }

    render() {
        const { cart } = this.props.cart
        return <div>
            {cart.map(id =>
                <div style={{backgroundColor: '#ffe6ff'}}>
                    <h3>{id}</h3>
                    <button
                        type="button"
                        onClick={() => this.deleteButtonClick(id)}>
                        Remove
                    </button>
                </div>
            )}
        </div>
    }
}

const mapStateToProps = state => ({
    cart: state.cart
})

Cart.propTypes = {
    getCart: PropTypes.func.isRequired,
    removeFromCart: PropTypes.func.isRequired,
    cart: PropTypes.object.isRequired,
}

export default withRouter(connect(mapStateToProps, { getCart, removeFromCart })(Cart))