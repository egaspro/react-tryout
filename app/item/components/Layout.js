import React from "react"

import styles from "./layout.scss"
import Item from "./Item"

class Layout extends React.Component {
    componentDidMount(){
        this.props.loadItem(this.props.params.id);
    }
    render(){
        const { data, toggleFavourite } = this.props;               
        return (
            <div className={styles.layout}>
                { data.data && <Item data={data.data} onFavouriteClick={toggleFavourite} />}                
                { !data.fetching && !data.data && <div className={styles.noData}><span>No data available</span></div> }  
                { data.fetching && <div className={styles.loading}><span>Loading...</span></div> }                          
            </div>
        );
    }
}

export default Layout