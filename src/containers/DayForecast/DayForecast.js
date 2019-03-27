import React, { Component } from 'react'

import WeatherDay from './../../components/weatherDay/WeatherDay';

export default class DayForecast extends Component {

  state = {
    weather: null,
    cityName: '',
    buttonActive: false
  };

  componentDidMount() {
    this.getWeather();
  }

  getWeather = async (cityName) => {
    const apiKey = '65524a897a3f46aa866201755191303';
    const api_call = await fetch(`http://api.apixu.com/v1/current.json?key=${apiKey}&q=$London`);
    const api_call_2 = await fetch(`http://api.apixu.com/v1/forecast.json?key=${apiKey}&q=$London&dt=2019-03-29`);
    const response = await api_call.json();
    const response1 = await api_call_2.json();

    if(response.error) {
      console.log(response.error.message);
    } else {
      this.setState({
      weather: response,
      })
    }

    console.log(response1);
  }

  render() {
    return (
      <div>
        {
          ( this.state.weather !== null ) ? 
          <WeatherDay 
          dayName="Day"
          imgSrc={this.state.weather.current.condition.icon}
          imgAlt={this.state.weather.current.condition.text}
          maxTmp={this.state.weather.current.temp_c}
          minTmp={this.state.weather.current.temp_c} /> : null
        }
      </div>
    )
  }
}
