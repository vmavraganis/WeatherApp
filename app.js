console.log("#####starting app#####");

const fs = require('fs');
const yargs = require('./arguments');
const request = require('request');
const geocode = require("./geocode/geocode");
const weather = require("./GeoWeather/weather");

const apikey = "ca4b93cfebc448d9c254ac84cea0dd40";







console.log("env "+process.env);
geocode.geocodeAddress(yargs.argv.address, (errorMessage, geolocData) => {
    if (!!errorMessage) {
        console.log(errorMessage);
    } else {
        var Address = geolocData;
        console.log((Address.name))
        weather.GeoWeather(apikey, Address, (errorMessage, WeatherData) => {

            if (!!errorMessage) {
                console.log(errorMessage);
            } else {
                console.log(`Now the temp in ${Address.name} is ${WeatherData.temp} but feels like ${WeatherData.feel} `);
            }
        });
    }
});




//let GeoWeather = (APIKEY,address, callback)



