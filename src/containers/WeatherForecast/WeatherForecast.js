import React, { Component } from 'react';

import WeatherDay from '../../components/weatherDay/WeatherDay';
import SearchCity from '../../components/searchCity/SearchCity';

import classes from './WeatherForecast.module.css';


class WeatherForecast extends Component {

  state = {
      weather: null,
      cityName: '',
      buttonActive: false
  };
  
  getWeather = async (cityName) => {
    const apiKey = '65524a897a3f46aa866201755191303';
    const api_call = await fetch(`http://api.apixu.com/v1/forecast.json?key=${apiKey}&q=${cityName}&days=5`);
    const response = await api_call.json();

    if(response.error) {
      console.log(response.error.message);
    } else {
      this.setState({
      weather: response,
      })
    }

    console.log(response);
    
  }

  
  setCityName = (e) => {
    this.setState({
      cityName: e.target.value
    });
  }

  findCity = () => {
    this.getWeather(this.state.cityName);
  }

  activateSearch = () => {
    if (this.state.buttonActive === false) {
      this.setState({
        buttonActive: true
      })
    }
  }

  handlePressedKey = (e) => {
    if (e.key === 'Enter') {
      this.getWeather(this.state.cityName);
    }
  }


  render() {
    return (
      <>
        <SearchCity 
          onKeyUp={this.setCityName} 
          onClick={this.findCity} 
          onKeyPress={this.handlePressedKey}
          className={classes.SearchCity} 
          activateSearch={this.activateSearch} 
          buttonState={this.state.buttonActive}></SearchCity>
        <div className={classes.Container}>
        { this.state.weather !== null && this.state.weather.forecast.forecastday.map(item => {
            return <WeatherDay 
              dayName={item.day.name}
              imgSrc={item.day.condition.icon}
              imgAlt={item.day.condition.text}
              maxTmp={item.day.maxtemp_c}
              minTmp={item.day.mintemp_c} />
          })
        }
        </div>
      </>
    );
  }
}

export default WeatherForecast;