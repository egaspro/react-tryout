import fetch from 'isomorphic-fetch'
import { getBrowseItemsCount, getBrowseIsFetching } from '../reducers'

export const fetchItems = () => (dispatch, getState) => {
    if (getBrowseIsFetching(getState())){
        return Promise.resolve();
    }
    dispatch({ type: "FETCH_ITEMS_START" });
    return fetch('/browse/data')
        .then(function(response) {
            if (response.status !== 200) {
                throw new Error("Error: " + response.statusText);
            }
            return response.json();
        })
        .then((response) => {        
            dispatch({ type: "FETCH_ITEMS_COMPLETED", data: response });
            return response;
        })
        .catch((error) => {
            dispatch({ type: "FETCH_ITEMS_FAILED", data: error });
            return error;
        });
}

export const fetchMoreItems = () => (dispatch, getState) => {
    if (getBrowseIsFetching(getState())){
        return Promise.resolve();
    }
    dispatch({ type: "FETCH_ITEMS_START" });
    return fetch('/browse/data?start=' + getBrowseItemsCount(getState()))
        .then(function(response) {
            if (response.status !== 200) {
                throw new Error("Error: " + response.statusText);
            }
            return response.json();
        })
        .then((response) => {        
            dispatch({ type: "FETCH_ITEMS_MORE_COMPLETED", data: response });
            return response;
        })
        .catch((error) => {
            dispatch({ type: "FETCH_ITEMS_FAILED", data: error });
            return error;
        });
}

export const mapFavouriteInfo = () => { return { type: 'MAP_ITEMS_FAVOURITES' } }
export const toggleFavourite = (id) => {
    return {
        type: 'TOGGLE_ITEM_FAVOURITE',
        data: id
    }
}