import React from 'react';

import classes from './SearchCity.module.css';

const searchCity = (props) => {
    return (
        <>

            <div className={classes.SearchCity} onClick={props.activateSearch}>
                <span className={[((props.buttonState === true) ? classes.Inactive : classes.Active), classes.ToggleSearch].join(' ')}>Znajdź swoje miasto</span>
                <input type="search" 
                  onKeyUp={props.onKeyUp} 
                  onKeyDown={props.onKeyPress} 
                  className={[((props.buttonState === true) ? classes.Active : classes.Inactive), classes.SearchInput].join(' ')}></input>
                <button 
                  onClick={props.onClick} 
                  
                  className={[((props.buttonState === true) ? classes.Active : classes.Inactive), classes.SearchButton].join(' ')}>Wyszukaj</button>
            </div>
        </>
        
    )
    

    };

export default searchCity;