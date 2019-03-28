import React, { Component } from 'react';

import Navbar from '../components/navbar/Navbar';

import classes from './Layout.module.css';

class Layout extends Component {

  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.state = {
      activeMobileMenu: false
    }
  }

  componentDidMount() {
    document.addEventListener('click', this.handleClick, false);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClick, false);
  }

  handleClick = (e) => {
    const el = e.srcElement.className;

    if (this.state.activeMobileMenu) {
      if (!(el.includes('NavigationItems')) && !(el.includes('fa-bars')) ) {
        this.setState({
          activeMobileMenu: false
        })
      }
    }
  }

  toggleMobileMenu = () => {
    this.setState(( prevState ) => {
      return { activeMobileMenu: !prevState.activeMobileMenu };
    });
  }


  render() {
      return (
          <div className={classes.Container}>
              <Navbar
                ToggleMenu={this.toggleMobileMenu} 
                MobileMenuState={this.state.activeMobileMenu} />
              <main className={classes.Main}>
                  {this.props.children}
              </main>
          </div>
      )
  }
}

export default Layout;