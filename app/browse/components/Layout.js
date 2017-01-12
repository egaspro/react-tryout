import React from "react"

import styles from "./layout.scss"
import List from "./List"

class Layout extends React.Component {
    componentDidMount(){
        if (!this.props.data.data) this.props.loadItems();
        else this.props.mapFavourites(); //favourites can change elsewhere
    }
    render(){
        const { data, loadMoreItems, toggleFavourite } = this.props;
        const options = {
            loadMore: {
                show: data.data && data.data.items && data.data.items.length < data.data.totalItems,
                disable: data.fetching,
                click: loadMoreItems
            },
            toggleFavourite: toggleFavourite
        }
        return (
            <div className={styles.layout}>
                <div className={styles['layout-header']}> Browse page </div>
                { !data.fetching && !data.data && <div className={styles.noData}> No data available</div> }
                { data.data && <List data={data.data} options={options} /> }
                { data.fetching && <div className={styles.loading}> Loading... </div> }                             
            </div>
        );
    }
}

export default Layout