import React from "react"
import { render } from "react-dom"

import Root from "./Root"
import setStore from "./store"

const store = setStore();

render(
    <Root store={store} />, 
    document.getElementById("root")
)