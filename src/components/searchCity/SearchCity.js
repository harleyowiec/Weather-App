import React from 'react';

import classes from './SearchCity.module.css';

const searchCity = (props) => {
    return (
        <>
            <h3>
                Wyszukaj swoje miasto
            </h3>
            <div className={classes.SearchCity}>
                <input type="search" onKeyUp={props.onKeyUp}></input>
                <button onClick={props.onClick}>Wyszukaj</button>
            </div>
        </>
        
    )
    

    };

export default searchCity;
