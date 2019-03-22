import React, { Component } from 'react';

import Navbar from '../components/navbar/Navbar';

import classes from './Layout.module.css';

class Layout extends Component {


  state = {
    activeMobileMenu: false
  }

  toggleMobileMenu = () => {
    this.setState(( prevState ) => {
      return { activeMobileMenu: !prevState.activeMobileMenu };
    });
  }
  render() {
      return (
          <div className={classes.Container}>
              <Navbar ToggleMenu={this.toggleMobileMenu} MobileMenuState={this.state.activeMobileMenu} />
              <main className={classes.Main}>
                  {this.props.children}
              </main>
          </div>
      )
  }
}

export default Layout;