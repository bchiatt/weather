/* jshint camelcase:false */

'use strict';

var request = require('request');

function Weather(){
}

Weather.high = function(zip, cb){
  var url = 'http://api.wunderground.com/api/a11890b19fe77087/forecast/q/' + zip + '.json';

  request(url, function(error, response, body){
    body = JSON.parse(body);
    var high = body.forecast.simpleforecast.forecastday[0].high.fahrenheit;
    var temp = high + 'F';
    cb(temp);
  });
};

Weather.low = function(zip, cb){
  var url = 'http://api.wunderground.com/api/a11890b19fe77087/forecast/q/' + zip + '.json';

  request(url, function(error, response, body){
    body = JSON.parse(body);
    var low = body.forecast.simpleforecast.forecastday[0].low.fahrenheit;
    var temp = low + 'F';
    cb(temp);
  });
};

Weather.avgHigh = function(zip, cb){
  var url = 'http://api.wunderground.com/api/a11890b19fe77087/forecast10day/q/' + zip + '.json';
  request(url, function(error, response, body){
    body = JSON.parse(body);
    var avg = 0;
    var forecasts = body.forecast.simpleforecast.forecastday;

    for(var i = 0; i < forecasts.length; i++){
      avg += parseInt(forecasts[i].high.fahrenheit);
    }
    
    avg = avg / forecasts.length;
    cb(avg);
  });
};

Weather.avgLow = function(zip, cb){
  var url = 'http://api.wunderground.com/api/a11890b19fe77087/forecast10day/q/' + zip + '.json';
  request(url, function(error, response, body){
    body = JSON.parse(body);
    var avg = 0;
    var forecasts = body.forecast.simpleforecast.forecastday;

    for(var i = 0; i < forecasts.length; i++){
      avg += parseInt(forecasts[i].low.fahrenheit);
    }
    
    avg = avg / forecasts.length;
    cb(avg);
  });
};
Weather.highs = function(zip, cb){
  var url = 'http://api.wunderground.com/api/a11890b19fe77087/forecast10day/q/' + zip + '.json';
  request(url, function(error, response, body){
    body = JSON.parse(body);
    var highTemps = [];
    var forecasts = body.forecast.simpleforecast.forecastday;

    for(var i = 0; i < forecasts.length; i++){
      highTemps.push(parseInt(forecasts[i].high.fahrenheit));
    }
    cb(highTemps);
  });
};

Weather.lows = function(zip, cb){
 var url = 'http://api.wunderground.com/api/a11890b19fe77087/forecast10day/q/' + zip + '.json';
 request(url, function(error, response, body){
   body = JSON.parse(body);
   var lowTemps = [];
   var forecasts = body.forecast.simpleforecast.forecastday;

   for(var i = 0; i < forecasts.length; i++){
     lowTemps.push(parseInt(forecasts[i].low.fahrenheit));
   }
   cb(lowTemps);
 });
};

Weather.deltas = function(zip, cb){
  var url = 'http://api.wunderground.com/api/a11890b19fe77087/forecast10day/q/' + zip + '.json';

  request(url, function(error, response, body){

    body = JSON.parse(body);
    var temps = [];
    var forecasts = body.forecast.simpleforecast.forecastday;

    for(var i = 0; i < forecasts.length; i++){
     temps.push(parseInt(forecasts[i].high.fahrenheit) - parseInt(forecasts[i].low.fahrenheit));
    }
    cb(temps);
  });
};

Weather.moon = function(zip, cb){
  var url = 'http://api.wunderground.com/api/7ad931f0c68045c8/astronomy/q/' + zip + '.json';

  request(url, function(error, response, body){
    body = JSON.parse(body);
    var moon = parseInt(body.moon_phase.percentIlluminated);

    if(moon <= 5){
      moon = 'New';
    }else if(moon <= 44){
      moon = 'Crescent';
    }else if(moon <= 55){
      moon = 'Quarter';
    }else if(moon <= 94){
      moon = 'Gibbous';
    }else{
      moon = 'Full';
    }

    cb(moon);
  });
};

module.exports = Weather;
