import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { fetchCategories } from '../actions/categorySelector'
import PropTypes from 'prop-types'

class CategorySelector extends Component {

    componentDidMount() {
        this.props.fetchCategories('http://localhost:3001/api/category')
    }

    render() {
        if (this.props.isLoading) {
            return <p>Loading...</p>
        }
        if (this.props.hasErrored) {
            return <p>Sorry, there was a problem loading categories...</p>
        }

        const categories = this.props.categories
        return <div>
            {categories.map(item =>
                <div style={{ backgroundColor: 'blue' }}>
                    <h3>{item.name}</h3>
                    <h3>{item._id}</h3>
                </div>
            )}
        </div>
    }
}

const mapStateToProps = state => ({
    categories: state.categories,
    isLoading: state.categoriesLoading,
    hasErrored: state.categoriesErrored,
})

const mapDispatchToProps = dispatch => {
    return {
        fetchCategories: url => dispatch(fetchCategories(url))
    }
}

CategorySelector.propTypes = {
    fetchCategories: PropTypes.func.isRequired,
    categories: PropTypes.array.isRequired,
    isLoading: PropTypes.bool.isRequired,
    hasErrored: PropTypes.bool.isRequired,
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CategorySelector))