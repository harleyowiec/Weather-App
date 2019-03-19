import React, { Component } from 'react';


import Layout from './hoc/Layout';
import WeatherForecast from './containers/WeatherForecast/WeatherForecast';



import classes from './App.module.css';

class App extends Component {
  

  render() {
    return (
      <>
        <Layout>
          <WeatherForecast />
        </Layout>
      </>
    );
  }
}

export default App;
