import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Layout from "./hoc/Layout";
import WeatherForecast from "./containers/WeatherForecast/WeatherForecast";
import DayForecast from "./containers/DayForecast/DayForecast";

class App extends Component {
  state = {
    cityName: "",
    weatherApiKey: "65524a897a3f46aa866201755191303"
  };

  handleToUpdate = someArg => {
    this.setState(
      {
        cityName: someArg
      },
      () => {
        console.log(this.state.cityName);
      }
    );
  };

  render() {
    return (
      <>
        <Layout handleToUpdate={this.handleToUpdate}>
          <Switch>
            <Route
              path="/forecast"
              render={() => (
                <WeatherForecast
                  cityName={this.state.cityName}
                  apiKey={this.state.weatherApiKey}
                />
              )}
            />
            <Route
              path="/"
              render={() => (
                <DayForecast
                  cityName={this.state.cityName}
                  apiKey={this.state.weatherApiKey}
                />
              )}
            />
          </Switch>
        </Layout>
      </>
    );
  }
}

export default App;
