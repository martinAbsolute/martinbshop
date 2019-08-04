import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { getCategories, categoriesLoading, fetchCategories } from '../actions/cartActions'
import PropTypes from 'prop-types'

class CategorySelector extends Component {

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

CategorySelector.propTypes = {
    getCategories: PropTypes.func.isRequired,
    categoriesLoading: PropTypes.func.isRequired,
    fetchCategories: PropTypes.object.isRequired,
}

export default withRouter(connect(mapStateToProps, { getCategories, categoriesLoading, fetchCategories })(CategorySelector))