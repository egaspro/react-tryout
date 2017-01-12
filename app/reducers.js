import { combineReducers } from "redux"

import browseReducer, * as browseSelectors from "./browse/reducer"
import itemReducer, * as itemSelectors from "./item/reducer"

export default combineReducers({
    browse: browseReducer,
    item: itemReducer
})

export const getBrowseState = (state) => { return browseSelectors.getState(state.browse); }
export const getBrowseItemsCount = (state) => { return browseSelectors.getItemsCount(state.browse); }
export const getBrowseIsFetching = (state) => { return browseSelectors.getIsFetching(state.browse); }

export const getItemState = (state) => { return itemSelectors.getState(state.item); }
export const getItemIsFetching = (state) => { return itemSelectors.getIsFetching(state.item); }