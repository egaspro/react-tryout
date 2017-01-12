export const getFavouriteItems = () => {
    try {
        const serializedTable = localStorage.getItem('favourites'); 
        if (serializedTable) return JSON.parse(serializedTable);
        return undefined;
    } catch (exp) {
        return undefined;
    }
}

export const toggleFavouriteItem = (id) => {
    try {
        const serializedTable = localStorage.getItem('favourites');
        let table, newValue;
        
        table = serializedTable ? JSON.parse(serializedTable) : {}; 
        newValue = table[id] ? false : true;
        table[id] = newValue;        
        localStorage.setItem('favourites', JSON.stringify(table));

        return newValue;
    } catch (exp) {
        return undefined;
     }
}