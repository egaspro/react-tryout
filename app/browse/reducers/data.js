import * as favouriteAPI from "../../localStorage"

const initialDataState ={
    items: [],
    totalItems: 0
}
const mapFavourites = (items) => {
    const favourites = favouriteAPI.getFavouriteItems();    
    return items.map(function(item){
        const favValue = favourites ? favourites[item.id] : false;
        return { ...item, favourite: favValue };
    });
}
const toggleFavourite = (items, id) => {
    var isFavourite = favouriteAPI.toggleFavouriteItem(id);
    return items.map(function(item){        
        return item.id === id ? { ...item, favourite: isFavourite } : item;
    });
}

const reducer = (state = initialDataState, action) => {
    switch(action.type){
        case "FETCH_ITEMS_COMPLETED": {            
            state = {
                ...state, 
                items: action.data ? mapFavourites(action.data.items) : [], 
                totalItems: action.data ? action.data.totalItems : 0
            };   
            break;
        }
        case "FETCH_ITEMS_MORE_COMPLETED": {
            const addedItems = action.data ? mapFavourites(action.data.items) : []
            state = {
                ...state, 
                items: [...state.items, ...addedItems ],
                totalItems: action.data ? action.data.totalItems : 0
            };  
            break;
        }
        case "MAP_ITEMS_FAVOURITES": {
            state = {...state, items: state.items ? mapFavourites(state.items) : [] };
            break;
        }
        case "TOGGLE_ITEM_FAVOURITE": {
            state = {...state, items: state.items ? toggleFavourite(state.items, action.data) : [] };
            break;
        }
    }
    return state
}

export default reducer;

export const getItemsCount = (state) => {
    return state.items.length;;
}