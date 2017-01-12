import * as favouriteAPI from "../localStorage"

const initialState = {
    fetching: false,
    fetched: false,
    data: null,
    error: null
}
const mapFavourite = (item) => {
    const favourites = favouriteAPI.getFavouriteItems(); 
    const favValue = favourites ? favourites[item.id] : false;

    return { ...item, favourite: favValue };    
}
const toggleFavourite = (item) => {    
    return { ...item, favourite: favouriteAPI.toggleFavouriteItem(item.id) };    
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case "FETCH_ITEM_START": {
            state = {...state, fetching: true };
            break;
        }
        case "FETCH_ITEM_COMPLETED": {            
            state = {...state, fetching: false, fetched: true, data: mapFavourite(action.data) };   
            break;
        }
        case "FETCH_ITEM_FAILED": {
            state = {...state, fetching: false, fetched: false, error: action.data };           
            break;
        }
        // case "MAP_ITEM_FAVOURITES": {
        //     state = {...state, data: mapFavourite(state.data) };
        //     break;
        // }
        case "TOGGLE_ITEM_FAVOURITE": {
            state = {...state, data: toggleFavourite(state.data) };
            break;
        }
    }
    return state;
}

export default reducer;

export const getState = (state) => {
    return state;
}

export const getIsFetching = (state) => {
    return state.fetching;
}