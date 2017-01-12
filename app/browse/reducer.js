import dataReducer, * as dataSelectors from "./reducers/data"

const initialState = {
    fetching: false,
    fetched: false,
    data: null,
    error: null
}
const reducer = (state = initialState, action) => {
    switch(action.type){
        case "FETCH_ITEMS_START": {
            state = {...state, fetching: true };
            break;
        }
        case "FETCH_ITEMS_COMPLETED":
        case "FETCH_ITEMS_MORE_COMPLETED": {            
            state = {...state, fetching: false, fetched: true, data: dataReducer(state.data, action) };   
            break;
        }
        case "FETCH_ITEMS_FAILED": {
            state = {...state, fetching: false, fetched: false, error: action.data };           
            break;
        }
        case "MAP_ITEMS_FAVOURITES": 
        case "TOGGLE_ITEM_FAVOURITE": {
            state = {...state, data: dataReducer(state.data, action) };
            break;
        }        
    }
    return state;
}

export default reducer;

export const getState = (state) => {
    return state;
}

export const getItemsCount = (state) => {
    return dataSelectors.getItemsCount(state.data || { items: [] });
}

export const getIsFetching = (state) => {
    return state.fetching;
}