import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./NavigationItem.module.scss";

const NavigationItem = props => {
  return (
    <li className={classes.NavigationItem}>
      <NavLink exact to={props.link} activeClassName={classes.ActiveMenuTab}>
        {props.children}
      </NavLink>
    </li>
  );
};

export default NavigationItem;
