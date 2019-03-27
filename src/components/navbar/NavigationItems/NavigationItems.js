import React from 'react';


import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.module.css';
import WeatherForecast from '../../../containers/WeatherForecast/WeatherForecast';
import DayForecast from '../../../containers/DayForecast/DayForecast';

const NavigationItems = (props) => {
  return (
    <ul className={[(props.MobileMenuState) ? classes.MobileMenuActive : '' , classes.NavigationItems].join(' ')}>
      <NavigationItem link="/">Prognoza</NavigationItem>
      <NavigationItem link="/day">Pogoda dziś</NavigationItem>
      {/* <NavigationItem >Godzina po godzinie</NavigationItem> */}
    </ul>

  )
}

export default NavigationItems;