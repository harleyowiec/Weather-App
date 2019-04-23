import React from "react";

import classes from "./WeatherDay.module.scss";

const WeatherDay = props => {
  const dateStr = props.date;
  let day;

  const getDayName = (dateStr, locale) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString(locale, { weekday: "long" });
  };

  day = getDayName(dateStr, "en-US");

  const capitalizeWord = word => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

  return (
    <div className={classes.container}>
      <h4 className={classes.dayName}>{capitalizeWord(day)}</h4>
      <img
        src={props.imgSrc}
        alt={props.imgAlt}
        className={classes.weatherImage}
      />
      <div className={classes.temperatures}>
        <div className={classes.maxTmp}>
          <span className={classes.dayTmp}>{props.maxTmp}&#176;</span>
          {props.minTmp && (
            <span className={classes.nightTmp}>{props.minTmp}&#176;</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default WeatherDay;
