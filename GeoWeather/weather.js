const request=require('request');

let GeoWeather = (APIKEY,address, callback) => {
  

  request({
    url:`https://api.darksky.net/forecast/${APIKEY}/${address.latitude},${address.longitude}`,
    json: true
  }, (error, response, body) => { 
    if (error) {
      callback('Unable to connect to forecast servers.');}
     else if (response.statusCode=== 404) {
      callback('Unable to find that address.');
    } else if(response.statusCode===200){
      callback("", {temp:((body.currently.temperature-32)*5/9).toFixed(2),feel:((body.currently.apparentTemperature-32)*5/9).toFixed(2)});
    }

    else{
    callback("err "+error,"code "+response.statusCode)};
  });
};

module.exports={GeoWeather};