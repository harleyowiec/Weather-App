import React from "react";

import AlgoliaPlaces from "algolia-places-react";

import classes from "./SearchCity.module.scss";

const searchCity = props => {
  let textInput = React.createRef();

  const handleClick = () => {
    textInput.current.focus();
  };

  const resultSelected = e => {
    const latlng = e.suggestion.latlng.lat + "," + e.suggestion.latlng.lng;
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
          Find your city
        </span>
        <label
          htmlFor="name"
          className={
            props.buttonState === true ? classes.Active : classes.Inactive
          }
          ref={textInput}
        >
          <AlgoliaPlaces
            placeholder="Write an city here"
            id="name"
            options={{
              appId: props.algoliaSearchId,
              apiKey: props.algoliaSearchApiKey,
              templates: {
                value: function(suggestion) {
                  return suggestion.name;
                }
              },
              type: "city"
            }}
            className={classes.SearchInput}
            onKeyDown={props.onKeyPress}
            onChange={e => resultSelected(e)}
          />
        </label>

        <button
          onClick={props.onClick}
          className={[
            props.buttonState === true ? classes.Active : classes.Inactive,
            classes.SearchButton
          ].join(" ")}
        >
          Search
        </button>
      </div>
    </>
  );
};

export default searchCity;
