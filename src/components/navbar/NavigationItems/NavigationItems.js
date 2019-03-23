import React from 'react';
import { Switch, Route } from 'react-router-dom';


import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.module.css';

const NavigationItems = (props) => {
  return (
    <ul className={[(props.MobileMenuState) ? classes.MobileMenuActive : '' , classes.NavigationItems].join(' ')}>
      <NavigationItem link="/">Prognoza</NavigationItem>
      <NavigationItem link="/">Pogoda dziś</NavigationItem>
      <NavigationItem >Godzina po godzinie</NavigationItem>
      
    </ul>
  )
}

export default NavigationItems;