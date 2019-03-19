import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.module.css';

const NavigationItems = () => {
  return (
    <ul className={classes.NavigationItems}>
      <NavigationItem>Pogoda 5-dniowa</NavigationItem>
      <NavigationItem>Pogoda dziś</NavigationItem>
    </ul>
  )
}

export default NavigationItems;