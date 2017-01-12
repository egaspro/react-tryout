import { applyMiddleware, createStore } from "redux"
import logger from "redux-logger"
import thunk from "redux-thunk"
import reducer from "./reducers"


const setStore = () => {        
    const middleware = applyMiddleware(thunk, logger());
    const store = createStore(reducer, middleware);;

    return store;
}


export default setStore;