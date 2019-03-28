import React from 'react';

import classes from './WeatherDay.module.css';

const WeatherDay = (props) => {

  const getDayName = (dateStr, locale) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString(locale, { weekday: 'long' });        
  };

  const dateStr = props.date;
  const day = getDayName(dateStr, "en-US"); // Gives back 'Vrijdag' which is Dutch for Friday.

  console.log(day);
  return (
    <div className={classes.container}>
      <h4 className={classes.dayName}> 
          {day}
      </h4>
      <img src={props.imgSrc} alt={props.imgAlt} className={classes.weatherImage}></img>
      <div className={classes.temperatures}>
          <div className={classes.maxTmp}><span className={classes.dayTmp}>{props.maxTmp}&#176;</span> {props.minTmp}&#176;</div>
      </div>
    </div>
  )
  
};

export default WeatherDay;