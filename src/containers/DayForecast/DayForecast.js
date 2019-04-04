import React, { Component } from "react";

import WeatherDay from "./../../components/weatherDay/WeatherDay";

export default class DayForecast extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    weather: null,
    cityName: this.props.cityName,
    buttonActive: false,
    isMarkerShown: true
  };

  componentDidMount() {
    if (this.state.cityName !== null) {
      this.getWeather();
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.cityName !== prevProps.cityName) {
      this.setState({
        cityName: this.props.cityName
      });
      this.getWeather();
    }
  }

  getWeather = async cityName => {
    const apiKey = "65524a897a3f46aa866201755191303";
    const api_call = await fetch(
      `http://api.apixu.com/v1/current.json?key=${apiKey}&q=$${
        this.props.cityName
      }`
    );
    const response = await api_call.json();

    if (response.error) {
      console.log(response.error.message);
    } else {
      this.setState({
        weather: response
      });
    }
  };

  render() {
    return (
      <div>
        {this.state.weather !== null ? (
          <WeatherDay
            date={this.state.weather.current.last_updated}
            imgSrc={this.state.weather.current.condition.icon}
            imgAlt={this.state.weather.current.condition.text}
            maxTmp={this.state.weather.current.temp_c}
            minTmp={this.state.weather.current.temp_c}
          />
        ) : null}
      </div>
    );
  }
}