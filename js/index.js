$(document).ready(function() {
    getWeather();

});

function getWeather() {
    var lat = 0;
    var long = 0;

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            lat = position.coords.latitude;
            long = position.coords.longitude;
            $.getJSON("http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + long + "&units=imperial&APPID=4d56e3677c38512b8f95d040c8998b4d", function(json) {
                $("#name").text(json.weather[0].description);
                $("#weather-icon").attr("src", "http://openweathermap.org/img/w/" + json.weather[0].icon + ".png")
                $("#location").text(json.sys.country);
                $("#place").text(json.name);
                $("#temp").text(json.main.temp);
            });
        });
    }

    $(".toggle").on("click", function() {
        var unit = "imperial";

        if($(".toggle").attr("id") == "imperial") {
            unit = "metric";
            $(".toggle").attr("id", "metric");
            $(".toggle").text("°C");
        } else if($(".toggle").attr("id") == "metric") {
            unit = "imperial";
            $(".toggle").attr("id", "imperial");
            $(".toggle").text("°F");
        }

        $.getJSON("http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + long + "&units=" + unit + "&APPID=4d56e3677c38512b8f95d040c8998b4d", function(json) {
            $("#temp").text(json.main.temp);
        });
    });
}
