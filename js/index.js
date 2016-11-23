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
            $.getJSON("http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + long + "&APPID=4d56e3677c38512b8f95d040c8998b4d", function(json) {
                $("#name").text(json.weather[0].description);
            });
        });
    }
}
