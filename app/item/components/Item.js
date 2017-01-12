import React from "react"
import { browserHistory  } from "react-router"

import styles from "./item.scss"

class Item extends React.Component {
    render(){
        this.favourite = false;
        const { data, onFavouriteClick } = this.props;  
        const price = data.price && data.price.amounts && data.price.amounts.USD ? data.price.amounts.USD : 'Price Upon Request';     
        return (            
            <div>
                <div className={styles['layout-header']}>
                    <span>{data.seller.company}</span>
                    <div className={styles.navHome} onClick={browserHistory.goBack}>Home</div>
                </div>
                <div className={styles['layout-content']}>
                    <div className={styles.imgWrapper}>
                        <img src={data.image} title={data.title}/>
                        <div className={styles.favourite + (data.favourite ? ' ' + styles.active : '')}>
                            <div onClick={() => { onFavouriteClick(data.id) }} className={styles.heart}></div>
                        </div>
                    </div>
                    <div className={styles.infoWrapper}>
                        <div className={styles.info}>
                            <div>
                                <div className={styles.title}>{data.title}</div>
                                <div className={styles.price}>{price}</div>
                                <div className={styles.measurements}>
                                    <span>Measurements: </span>
                                    <div>{data.measurements.display}</div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.action}>Purchase</div>
                        <div className={[styles.action, styles.last].join(' ')}>Make Offer</div>
                    </div>
                    <div className={styles.descWrapper}>
                        <div className={styles.info}>
                            <div>
                                <div className={styles.description}>{data.description}</div>
                                <div>
                                    <span className={styles.label}>Creator: </span>
                                    <span>{data.creators}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.clearFix}></div>
                </div>
            </div>
        );
    }
}

export default Item