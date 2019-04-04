import React, { Component } from "react";
import ReactDOM from "react-dom";

import Navbar from "../components/navbar/Navbar";

import classes from "./Layout.module.css";
import SearchCity from "../components/searchCity/SearchCity";

class Layout extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.state = {
      cityName: "",
      activeMobileMenu: false,
      buttonActive: false
    };
  }

  componentDidMount() {
    document.addEventListener("click", this.handleClick, false);
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.handleClick, false);
  }

  handleClick = e => {
    const el = e.srcElement.className;

    if (this.state.activeMobileMenu) {
      if (!el.includes("NavigationItems") && !el.includes("fa-bars")) {
        this.setState({
          activeMobileMenu: false
        });
      }
    }
  };

  setCityName = e => {
    this.setState({
      cityName: e.target.value
    });
  };

  toggleMobileMenu = () => {
    this.setState(prevState => {
      return { activeMobileMenu: !prevState.activeMobileMenu };
    });
  };
  setCityName = e => {
    this.setState({
      cityName: e.target.value
    });
  };

  findCity = () => {
    // this.getWeather(this.state.cityName);
    this.props.handleToUpdate(this.state.cityName);
  };

  activateSearch = () => {
    if (this.state.buttonActive === false) {
      this.setState({
        buttonActive: true
      });
    }
  };

  handlePressedKey = e => {
    if (e.key === "Enter") {
      // this.getWeather(this.state.cityName);
    }
  };

  render() {
    return (
      <div className={classes.Container}>
        <Navbar
          ToggleMenu={this.toggleMobileMenu}
          MobileMenuState={this.state.activeMobileMenu}
        />

        <main className={classes.Main}>
          <SearchCity
            onKeyUp={this.setCityName}
            onClick={this.findCity}
            onKeyPress={this.handlePressedKey}
            className={classes.SearchCity}
            activateSearch={this.activateSearch}
            buttonState={this.state.buttonActive}
          />
          {this.props.children}
        </main>
      </div>
    );
  }
}

export default Layout;