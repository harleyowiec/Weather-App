import React from "react";

import AlgoliaPlaces from "algolia-places-react";

import classes from "./SearchCity.module.scss";

const searchCity = props => {
  let textInput = React.createRef();

  const handleClick = () => {
    // console.log(textInput.current);
    // textInput.current.focus();
  };

  const resultSelected = e => {
    const latlng = e.suggestion.latlng.lat + "," + e.suggestion.latlng.lng;
    console.log(e.suggestion);
    props.onKeyUp(latlng);
  };

  return (
    <>
      <div
        className={classes.SearchCity}
        onClick={function() {
          props.activateSearch();
          handleClick();
        }}
      >
        <span
          className={[
            props.buttonState === true ? classes.Inactive : classes.Active,
            classes.ToggleSearch
          ].join(" ")}
        >
          Znajdź swoje miasto
        </span>
        <AlgoliaPlaces
          placeholder="Write an address here"
          ref={textInput}
          options={{
            appId: "plJOTIVAYJDS",
            apiKey: "67bd3991d47603b5d18888fa8ad6b37f"
          }}
          // onKeyUp={props.onKeyUp}
          onKeyDown={props.onKeyPress}
          className={[
            props.buttonState === true ? classes.Active : classes.Inactive,
            classes.SearchInput
          ].join(" ")}
          onChange={e => resultSelected(e)}
        />

        <button
          onClick={props.onClick}
          className={[
            props.buttonState === true ? classes.Active : classes.Inactive,
            classes.SearchButton
          ].join(" ")}
        >
          Wyszukaj
        </button>
      </div>
    </>
  );
};

export default searchCity;
