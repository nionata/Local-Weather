$(document).ready(function() {
    var lat = 0;
    var lon = 0;

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            lat = position.coords.latitude;
            lon = position.coords.longitude;
            console.log(lat + lon);
        }
    });

    /*$.getJSON("api.openweathermap.org/data/2.5/weather?lat={" + lat + "}&lon={" + lon + "}", function(json) {
       console.log("Congrats you made it this far");
    });*/
}
