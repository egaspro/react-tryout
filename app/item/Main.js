import React from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router"

import * as actions from "./actions"
import { getItemState } from "../reducers"
import Layout from "./components/Layout"

const mapStateToProps = (state) => {
    return {
        data: getItemState(state)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadItem: (id) => dispatch(actions.fetchItem(id)),
        //mapFavourite: () => dispatch(actions.mapFavouriteInfo()),
        toggleFavourite: () => dispatch(actions.toggleFavourite()),
    }
}

const Main = withRouter(connect(
    mapStateToProps, mapDispatchToProps
)(Layout))

export default Main