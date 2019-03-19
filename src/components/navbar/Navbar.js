import React from 'react';

import NavigationItems from './NavigationItems/NavigationItems';
import Logo from './Logo/Logo';

import classes from './Navbar.module.css';


const navbar = () => {
  return (
    <div className={classes.Navbar}>
        <Logo />
        <NavigationItems />
    </div>
  )
}

export default navbar;
