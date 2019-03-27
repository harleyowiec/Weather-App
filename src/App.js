import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';


import Layout from './hoc/Layout';
import WeatherForecast from './containers/WeatherForecast/WeatherForecast';
import DayForecast from './containers/DayForecast/DayForecast';


class App extends Component {
  

  render() {
    return (
      <>
        <Layout>
        <Switch>
            <Route path="/day" component={DayForecast} />
            <Route path="/" component={WeatherForecast} />
          </Switch>
        </Layout>
      </>
    );
  }
}

export default App;
