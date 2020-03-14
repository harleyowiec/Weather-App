## Weather App

![Alt screen](https://raw.githubusercontent.com/Harleyowiec/Weather-App/master/weather-screen.PNG)

Simple React application that allows the user to check the current weather in the selected city or to check the forecast for the next 5 days. I created this application to train main React concepts.

While creating this application I have learned:

- how to create components
- how to manage their state
- how to route between components
- how to animate render of component
- how to pass data between components
- and other basic concepts of React

I used [Apixu API](https://www.apixu.com/api.aspx) to fetch data about weather, and [Algolia Places](https://github.com/algolia/places) to get address search autocomplete in order to avoid mistakes with searching cities.

When user types in starting letters of city he want to find, it shows up a list with cities suggestions. User can choose one of suggested options and then app gets GPS coordinates of place in which user wants to check the weather, nextly pass data to apixu API and get JSON data with weather forecast.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Run project

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.
