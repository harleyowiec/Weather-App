import React from 'react';

import NavigationItems from './NavigationItems/NavigationItems';
import Logo from './Logo/Logo';

import classes from './Navbar.module.css';


const navbar = (props) => {
  return (
    <div className={classes.Navbar}>
        <Logo />
        <NavigationItems MobileMenuState={props.MobileMenuState} />
        <span className={classes.ToggleMenu} onClick={props.ToggleMenu}>
          <i className="fas fa-bars"></i>
        </span>
    </div>
  )
}

export default navbar;
