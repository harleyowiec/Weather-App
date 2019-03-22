import React from 'react';

import classes from './WeatherDay.module.css';

const WeatherDay = (props) => (
    <div className={classes.container}>
        <h4 className={classes.dayName}> 
            {props.day.name}
        </h4>
        <img src={props.day.day.condition.icon} alt={props.day.day.condition.text} className={classes.weatherImage}></img>
        <div className={classes.temperatures}>
            <div className={classes.maxTmp}><span className={classes.dayTmp}>{props.day.day.maxtemp_c}&#176;</span> {props.day.day.mintemp_c}&#176;</div>
        </div>
    </div>
);

export default WeatherDay;