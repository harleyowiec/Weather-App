import React from "react";

import NavigationItem from "./NavigationItem/NavigationItem";

import classes from "./NavigationItems.module.scss";

const NavigationItems = props => {
  return (
    <ul
      className={[
        props.MobileMenuState ? classes.MobileMenuActive : "",
        classes.NavigationItems
      ].join(" ")}
    >
      <NavigationItem link="/forecast">Forecast</NavigationItem>
      <NavigationItem link="/">Current</NavigationItem>
    </ul>
  );
};

export default NavigationItems;
