import React, { Component } from 'react';

import WeatherDay from '../../components/weatherDay/WeatherDay';
import SearchCity from '../../components/searchCity/SearchCity';

import classes from './WeatherForecast.module.css';

import sunny from '../../images/iconfinder_sun_2995005.png';
import cloud from '../../images/iconfinder_cloud_2995000.png';
import cloudy from '../../images/iconfinder_cloudy_2995001.png';
import flash_cloud from '../../images/iconfinder_flash-cloud_2995010.png';
import rain_cloud from '../../images/iconfinder_rain-cloud_2995003.png';
import snow_cloud from '../../images/iconfinder_snow-cloud_2995007.png';



class WeatherForecast extends Component {

    state = {
        weather: null,
        cityName: ''
      };
    
      getWeather = async (cityName) => {
        const apiKey = '65524a897a3f46aa866201755191303';
        const api_call = await fetch(`http://api.apixu.com/v1/forecast.json?key=${apiKey}&q=${cityName}&days=5`);
        const response = await api_call.json();

        if(response.error) {
          console.log(response.error.message);
        } else {
          this.setState({
          weather: response 
          })
        }
        
      }
    
      setWeatherImage(name) {
        let imagePath;

        const lowerName = name.toLowerCase();
    
        if (lowerName.includes('sunny')) {
          imagePath = sunny;
        } else if (lowerName.includes('cloud')) {
          imagePath = cloud;
        } else if (lowerName.includes('cloudy')) {
          imagePath = cloudy;
        } else if (lowerName.includes('flash')) {
          imagePath = flash_cloud;
        } else if (lowerName.includes('rain') || name.includes('drizzle')) {
          imagePath = rain_cloud;
        } else if(lowerName.includes('snow')) {
          imagePath = snow_cloud;
        }
    
        return imagePath;
      }
    
      setCityName = (e) => {
        this.setState({
          cityName: e.target.value
        });
      }

      findCity = () => {
        this.getWeather(this.state.cityName);
      }


      render() {
        return (
          <>
            <SearchCity onKeyUp={this.setCityName} onClick={this.findCity}></SearchCity>
            <div className={classes.container}>
            { this.state.weather !== null &&
                this.state.weather.forecast.forecastday.map(item => {
                return <WeatherDay day={item} weatherImage={this.setWeatherImage(item.day.condition.text)} />
              })
            }
            </div>
          </>
        );
      }
}

export default WeatherForecast;