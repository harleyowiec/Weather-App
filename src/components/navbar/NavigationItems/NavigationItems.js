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
      <NavigationItem link="/forecast">Prognoza</NavigationItem>
      <NavigationItem link="/">Pogoda dziś</NavigationItem>
    </ul>
  );
};

export default NavigationItems;
