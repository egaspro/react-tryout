import React from "react"
import { browserHistory  } from "react-router"

import styles from "./listItem.scss"

class ListItem extends React.Component { 
    
    toggleFavourite(){
        this.favourite = !this.favourite;
    }
    render(){
        this.favourite = false;
        const { data, onFavouriteClick } = this.props;
        const price = data.price && data.price.amounts && data.price.amounts.USD ? data.price.amounts.USD : 'Price Upon Request';

        return (
            <div className={styles.listItem}>
                <div onClick={() => { browserHistory.push('item/' + data.id)}}>
                    <div className={styles.imgWrapper}>
                        <img src={data.image} title={data.title}/>
                    </div>
                    <div className={styles.infoWrapper}>
                        <div className={styles.price}>{price}</div>                        
                    </div>
                </div>     
                <div className={styles.favourite + (data.favourite ? ' ' + styles.active : '')}>
                    <div onClick={() => { onFavouriteClick(data.id) }} className={styles.heart}></div>
                </div>
            </div>
        );
    }
}

export default ListItem