import React from 'react';

import classes from './WeatherDay.module.css';

const WeatherDay = (props) => (
    <div className={classes.container}>
        <h4 className={classes.dayName}> 
            {props.dayName}
        </h4>
        <img src={props.imgSrc} alt={props.imgAlt} className={classes.weatherImage}></img>
        <div className={classes.temperatures}>
            <div className={classes.maxTmp}><span className={classes.dayTmp}>{props.maxTmp}&#176;</span> {props.minTmp}&#176;</div>
        </div>
    </div>
);

export default WeatherDay;