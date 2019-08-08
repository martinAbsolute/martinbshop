import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Link } from "react-router-dom";

import { fetchCategories } from '../actions/categorySelector'
import PropTypes from 'prop-types'

//Material-UI
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Paper from '@material-ui/core/Paper'

import CircularProgress from '@material-ui/core/CircularProgress'
import Container from '@material-ui/core/Container'
class CategorySelector extends Component {

    componentDidMount() {
        this.props.fetchCategories('http://localhost:3001/api/category')
    }

    render() {
        if (this.props.isLoading) {
            return <Container><CircularProgress /></Container>
        }
        if (this.props.hasErrored) {
            return <p>Sorry, there was a problem loading categories...</p>
        }

        const categories = this.props.categories
        return <Paper style={{ margin: 15 }}>
            <List aria-label="categories selector">
                {categories.map(item =>
                    <Link key={item._id} to={{ pathname: "/shop", search: `?category=${item._id}` }}>
                        <ListItem button>
                            <ListItemText primary={item.name} />
                        </ListItem>
                    </Link>
                )}
            </List>
        </Paper>
    }
}

const mapStateToProps = state => {
    return {
        categories: state.categorySelector.categories,
        isLoading: state.categorySelector.categoriesLoading,
        hasErrored: state.categorySelector.categoriesErrored,
    }
}

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