import React from "react"

import styles from "./list.scss"
import ListItem from "./ListItem"

class List extends React.Component {
    render(){
        const { data, options } = this.props;
        const loadMore = options.loadMore;
        return (
            <div className={styles.listWrapper}>
                <div>
                    { (data.items || []).map((item) => <ListItem key={item.id} data={item} onFavouriteClick={options.toggleFavourite}/>) }         
                    <div className={styles.clearFix}></div>  
                </div>
                { 
                    loadMore.show &&
                    <div className={styles.loadMore}>
                        <button onClick={loadMore.click} disabled={loadMore.disable}> Load more </button>
                    </div>
                }
            </div>
        );
    }
}

export default List