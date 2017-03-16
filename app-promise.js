console.log("#####starting app#####");

const async = require('async');
const yargs = require('./arguments');
const axios = require('axios');
const apikey = "ca4b93cfebc448d9c254ac84cea0dd40";

var encodedAddress = encodeURIComponent(yargs.argv.address);
var Geocodeurl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`;

console.log("Address is ", yargs.argv.address);

axios
    .get(Geocodeurl)
    .then((response, error) => {
        var result = {};
        result.places = {};
        let urls = [];
        if (response.data.status === "ZERO_RESULTS") {
            throw new Error("ADDRESS NOT FOUND");
        }
        else {

            response.data.results.length > 1 ? console.log("possible results:") : ""
            for (let address of response.data.results) {
                let place = {};
                place["name"] = address.formatted_address;
                place["url"] = axios.get(`https://api.darksky.net/forecast/${apikey}/${address.geometry.location.lat},${address.geometry.location.lng}`);

                result.places[place.name] = place;
                urls.push(place.url);
            }
        }





        axios.all(urls)
            .then(function (results) {
                let temp = results.map(r => r.data.currently.temperature);
                var i = 0;
                for (let place in result.places) {
                    result.places[place].temp = temp[i];
                    i++;
                    console.log(`${i}: ${result.places[place].name} temperature is ${result.places[place].temp}`)
                };

                //result.places[""].temp=45;}
            });





    })

    .catch((e) => {
        if (e.code === 'ENOTFOUND') {
            console.log("could not connect");
        }
        else {
            console.log(e.message);
        }
    });