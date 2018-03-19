$(document).ready(function () {
    timeAndDate();
    let coordsAPI;
    let city;
    let country;
    let celDegree = "°C";
    let fahDegree = "°F";

    $.getJSON("https://ipinfo.io/json", function (locationData) {
        coordsAPI = locationData.loc;
        country = locationData.country;
        GPScity = locationData.city;

        $("#city").html(GPScity + " , " + country);
        $('#coordsAPI').html("GPS: " + coordsAPI);

        let appID = "6628ca8235beb8aed232889dbef9e9b1";
        let API = "https://api.darksky.net/forecast/" + appID + "/" + coordsAPI + "?callback=?";

        $.getJSON(API, function (weatherData) {
            let weatherTemp = weatherData.currently.temperature;
            let summary = weatherData.currently.summary;
            let iconAPI = weatherData.currently.icon;
            
            console.log(weatherData);
            skycons(iconAPI);

            $('#weatherTemp').html(celFunction(celDegree, weatherTemp));
            $('#feelsLike').html("Feels Like: " + celFunction(celDegree, weatherData.currently.apparentTemperature));
            $('#weatherDescription').html(summary);
            $('#windSpeed').html("Wind Speed: " + weatherData.currently.windSpeed + "kph");
            $('#windGust').html("Wind Max Speed: " + weatherData.currently.windGust + "kph");
            $('#humidity').html("Humidity: " + (weatherData.currently.humidity*100) + "%");
            $('#pressure').html("Air Pressure: " + weatherData.currently.pressure + "hPa");
            $('#ozone').html("Ozone: " + weatherData.currently.ozone + "DU");
            $('#uv').html("UV Index: " + weatherData.currently.uvIndex);

            

            document.getElementById("cel").onclick = function(){
                $('#weatherTemp').html(celFunction(celDegree, weatherTemp));
                $('#feelsLike').html("Feels Like: " + celFunction(celDegree, weatherData.currently.apparentTemperature));
            }

            document.getElementById("fah").onclick = function(){
                $('#weatherTemp').html(weatherTemp + fahDegree);
                $('#feelsLike').html("Feels Like: " + weatherData.currently.apparentTemperature + fahDegree);
            }
        });
    });
});