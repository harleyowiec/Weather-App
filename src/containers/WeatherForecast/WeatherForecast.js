import React, { Component } from "react";

import WeatherDay from "../../components/weatherDay/WeatherDay";
import SearchCity from "../../components/searchCity/SearchCity";

import classes from "./WeatherForecast.module.css";

class WeatherForecast extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    weather: null,
    cityName: this.props.cityName
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
      `http://api.apixu.com/v1/forecast.json?key=${apiKey}&q=${
        this.props.cityName
      }&days=5`
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
      <>
        <div className={classes.Container}>
          {this.state.weather !== null &&
            this.state.weather.forecast.forecastday.map(item => {
              return (
                <WeatherDay
                  date={item.date}
                  imgSrc={item.day.condition.icon}
                  imgAlt={item.day.condition.text}
                  maxTmp={item.day.maxtemp_c}
                  minTmp={item.day.mintemp_c}
                />
              );
            })}
        </div>
      </>
    );
  }
}

export default WeatherForecast;