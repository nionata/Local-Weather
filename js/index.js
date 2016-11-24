var lat;
var long;
var imperial;
var metric;

$(document).ready(function() {
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            lat = position.coords.latitude;
            long = position.coords.longitude;
            getWeather();
        });
    }

    $(".toggle").on("click", function() {
        console.log("Skipper");
        if($(".toggle").attr("id") == "imperial") {
            $("#temp").text(metric);
            $(".toggle").attr("id", "metric");
            $(".toggle").text("°C");
        } else if($(".toggle").attr("id") == "metric") {
            $("#temp").text(imperial);
            $(".toggle").attr("id", "imperial");
            $(".toggle").text("°F");
        }
    });
});

function getWeather() {
    $.getJSON("http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + long + "&units=imperial&APPID=4d56e3677c38512b8f95d040c8998b4d", function(json) {
        imperial = Math.round(json.main.temp);
        $("#name").text(json.weather[0].description);
        $("#weather-icon").attr("src", "http://openweathermap.org/img/w/" + json.weather[0].icon + ".png")
        $("#location").text(json.sys.country);
        $("#place").text(json.name);
        $("#temp").text(imperial);
    });

    $.getJSON("http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + long + "&units=metric&APPID=4d56e3677c38512b8f95d040c8998b4d", function(json) {
        metric = Math.round(json.main.temp);
    });
};


