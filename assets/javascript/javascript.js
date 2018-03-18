$(document).ready(function () {

    var coordsAPI;
    var city;
    var country;

    $.getJSON("https://ipinfo.io/json", function (locationData) {
        console.log(locationData);
        coordsAPI = locationData.loc;
        country = locationData.country;
        GPScity = locationData.city;

        //$("#country").html(country);
        $("#city").html(GPScity + " , " + country);
        $('#coordsAPI').html(coordsAPI);

        var appID = "6628ca8235beb8aed232889dbef9e9b1";
        var API = "https://api.darksky.net/forecast/" + appID + "/" + coordsAPI + "?callback=?";

        console.log(API);

        $.getJSON(API, function (weatherData) {

            var weatherTemp = weatherData.currently.temperature;
            var summary = weatherData.currently.summary;
            var celDegree = "°C";
            var fahDegree = "°F";
            var iconAPI = weatherData.currently.icon;

            document.getElementById("cel").onclick = function () {
                celFunction();
            };

            document.getElementById("fah").onclick = function () {
                fahFunction();
            };

            function celFunction() {
                var fahTemp = weatherTemp;
                var celTemp = (fahTemp - 32) * 0.5556;
                var adjustedCelTemp = celTemp.toFixed(2);

                $('#weatherTemp').html(adjustedCelTemp + celDegree);
            };

            function fahFunction() {
                $('#weatherTemp').html(weatherTemp + fahDegree);
            };

            var icons = new Skycons({ "color": "white" });

            switch (iconAPI) {
                case "clear-day":
                    icons.set("weatherIcon", Skycons.CLEAR_DAY);
                    icons.play();
                    break;

                case "clear-night":
                    icons.set("weatherIcon", Skycons.CLEAR_NIGHT);
                    icons.play();
                    break;

                case "partly-cloudy-night":
                    icons.set("weatherIcon", Skycons.PARTLY_CLOUDY_NIGHT);
                    icons.play();
                    break;

                case "partly-cloudy-day":
                    icons.set("weatherIcon", Skycons.PARTLY_CLOUDY_DAY);
                    icons.play();
                    break;

                case "cloudy":
                    icons.set("weatherIcon", Skycons.CLOUDY);
                    icons.play();
                    break;

                case "rain":
                    icons.set("weatherIcon", Skycons.RAIN);
                    icons.play();
                    break;

                case "sleet":
                    icons.set("weatherIcon", Skycons.SLEET);
                    icons.play();
                    break;

                case "snow":
                    icons.set("weatherIcon", Skycons.SNOW);
                    icons.play();
                    break;

                case "wind":
                    icons.set("weatherIcon", Skycons.WIND);
                    icons.play();
                    break;

                case "fog":
                    icons.set("weatherIcon", Skycons.FOG);
                    icons.play();
                    break;
            }

            $('#weatherTemp').html(celFunction());
            $('#weatherDescription').html(summary);

        });
    });
});