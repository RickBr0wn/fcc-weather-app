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
            $('#weatherDescription').html(summary);

            // $('#lowest').html(weatherData.daily.data[0].temperatureLow + fahDegree + " @ " + weatherData.daily.data[0].temperatureLowTime);
            // $('#highest').html(weatherData.daily.data[0].temperatureHigh + fahDegree);
            // $('#sunTime').html(weatherData.daily.data[0]);

            document.getElementById("cel").onclick = function(){
                $('#weatherTemp').html(celFunction(celDegree, weatherTemp));
            }

            document.getElementById("fah").onclick = function(){
                $('#weatherTemp').html(weatherTemp + fahDegree);
            }
        });
    });
});