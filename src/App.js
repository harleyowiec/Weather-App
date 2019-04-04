import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Layout from "./hoc/Layout";
import WeatherForecast from "./containers/WeatherForecast/WeatherForecast";
import DayForecast from "./containers/DayForecast/DayForecast";

class App extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    cityName: ""
  };

  handleToUpdate = someArg => {
    this.setState({
      cityName: someArg
    });
  };

  render() {
    return (
      <>
        <Layout handleToUpdate={this.handleToUpdate}>
          <Switch>
            <Route
              path="/forecast"
              render={() => <WeatherForecast cityName={this.state.cityName} />}
            />
            <Route
              path="/"
              render={() => <DayForecast cityName={this.state.cityName} />}
            />
          </Switch>
        </Layout>
      </>
    );
  }
}

export default App;
