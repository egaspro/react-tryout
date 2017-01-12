import React from "react"
import { connect } from "react-redux"

import * as actions from "./actions"
import { getBrowseState } from "../reducers"
import Layout from "./components/Layout"

const mapStateToProps = (state) => {
    return {
        data: getBrowseState(state)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadItems: () => dispatch(actions.fetchItems()),
        loadMoreItems: () => dispatch(actions.fetchMoreItems()),
        mapFavourites: () => dispatch(actions.mapFavouriteInfo()),
        toggleFavourite: (id) => dispatch(actions.toggleFavourite(id)),
    }
}

const Main = connect(
    mapStateToProps, mapDispatchToProps
)(Layout)

export default Main