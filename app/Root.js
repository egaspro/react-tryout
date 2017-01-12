import React from "react"
import { Provider } from "react-redux"
import { Router, Route, browserHistory } from "react-router"

import Browse from "./browse/Main"
import Item from "./item/Main"
import styles from './root.scss'

const Root = ({store}) => (
    <Provider store={store}>
        <div className={styles.content}>
            <Router history={browserHistory}>
                <Route path='/' component={Browse} />
                <Route path='/item/:id' component={Item} />
            </Router>
        </div>
    </Provider>
)

export default Root