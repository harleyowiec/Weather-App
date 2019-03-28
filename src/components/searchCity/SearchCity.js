import React from 'react';

import classes from './SearchCity.module.css';

const searchCity = (props) => {
  let textInput = React.createRef();

  const handleClick = () => {
    textInput.current.focus();
  }
  return (
      <>

          <div className={classes.SearchCity} onClick={function() {props.activateSearch(); handleClick()}}>
              <span className={[((props.buttonState === true) ? classes.Inactive : classes.Active), classes.ToggleSearch].join(' ')}>Znajdź swoje miasto</span>
              <input type="search" 
                ref={textInput}
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