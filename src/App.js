import React, { Component } from "react";
import { Route } from "react-router-dom";

import Layout from "./hoc/Layout";
import WeatherForecast from "./containers/WeatherForecast/WeatherForecast";
import DayForecast from "./containers/DayForecast/DayForecast";
import SwitchWithSlide from "./components/SwitchWithSlide";

class App extends Component {
  state = {
    cityName: "",
    weatherApiKey: "65524a897a3f46aa866201755191303",
    algoliaSearchId: "plJOTIVAYJDS",
    algoliaSearchApiKey: "67bd3991d47603b5d18888fa8ad6b37f"
  };

  handleToUpdate = someArg => {
    this.setState({
      cityName: someArg
    });
  };

  render() {
    return (
      <>
        <Layout
          handleToUpdate={this.handleToUpdate}
          algoliaSearchId={this.state.algoliaSearchId}
          algoliaSearchApiKey={this.state.algoliaSearchApiKey}
        >
          <SwitchWithSlide>
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
          </SwitchWithSlide>
        </Layout>
      </>
    );
  }
}

export default App;
