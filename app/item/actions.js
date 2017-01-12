import fetch from 'isomorphic-fetch'
import { getItemIsFetching } from '../reducers'

export const fetchItem = (id) => (dispatch, getState) => {
    if (getItemIsFetching(getState())){
        return Promise.resolve();
    }
    dispatch({ type: "FETCH_ITEM_START" });
    return fetch('/item/' + id + '/data')
        .then(function(response) {
            if (response.status !== 200) {
                throw new Error("Error: " + response.statusText);
            }
            return response.json();
        })
        .then((response) => {        
            dispatch({ type: "FETCH_ITEM_COMPLETED", data: response });
            return response;
        })
        .catch((error) => {
            dispatch({ type: "FETCH_ITEM_FAILED", data: error });
            return error;
        });
}

//export const mapFavouriteInfo = () => { return { type: 'MAP_ITEM_FAVOURITE' } }
export const toggleFavourite = () => { return { type: 'TOGGLE_ITEM_FAVOURITE' } }