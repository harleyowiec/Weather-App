import React, { Component } from "react";

import WeatherDay from "../../components/weatherDay/WeatherDay";

import classes from "./WeatherForecast.module.scss";

class WeatherForecast extends Component {
  state = {
    weather: null,
    cityName: this.props.cityName
  };

  componentDidMount() {
    if (this.state.cityName !== null) {
      this.getWeather(this.state.cityName);
    }
    console.log();
  }

  componentDidUpdate(prevProps) {
    if (this.props.cityName !== prevProps.cityName) {
      this.setState(
        {
          cityName: this.props.cityName
        },
        () => {
          this.getWeather(this.state.cityName);
        }
      );
    }
  }

  getWeather = async cityName => {
    const apiKey = this.props.apiKey;
    const api_call = await fetch(
      `http://api.apixu.com/v1/forecast.json?key=${apiKey}&q=${cityName}&days=5`
    );
    const response = await api_call.json();

    if (response.error) {
      console.log(response.error.message);
    } else {
      this.setState({
        weather: response
      });
    }

    console.log(response);
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
