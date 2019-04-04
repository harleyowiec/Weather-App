import React from 'react';


import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.module.css';

const NavigationItems = (props) => {
  return (
    <ul className={[(props.MobileMenuState) ? classes.MobileMenuActive : '' , classes.NavigationItems].join(' ')}>
      <NavigationItem link="/forecast">Prognoza</NavigationItem>
      <NavigationItem link="/">Pogoda dziś</NavigationItem>
      {/* <NavigationItem >Godzina po godzinie</NavigationItem> */}
    </ul>

  )
}

export default NavigationItems;