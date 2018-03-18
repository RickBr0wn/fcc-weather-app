$(document).ready(function () {

    let coordsAPI;
    let city;
    let country;

    $.getJSON("https://ipinfo.io/json", function (locationData) {
        let day = getDay();
        let date = getDateNumber() + " " + getMonthName();
        startTime();

        $('#day').html(day);
        $('#date').html(date);



        console.log(locationData);
        coordsAPI = locationData.loc;
        country = locationData.country;
        GPScity = locationData.city;

        //$("#country").html(country);
        $("#city").html(GPScity + " , " + country);
        $('#coordsAPI').html(coordsAPI);

        let appID = "6628ca8235beb8aed232889dbef9e9b1";
        let API = "https://api.darksky.net/forecast/" + appID + "/" + coordsAPI + "?callback=?";

        console.log(API);

        $.getJSON(API, function (weatherData) {
            console.log(weatherData);

            let weatherTemp = weatherData.currently.temperature;
            let summary = weatherData.currently.summary;
            let celDegree = "°C";
            let fahDegree = "°F";
            let iconAPI = weatherData.currently.icon;

            // document.getElementById("cel").onclick = function () {
            //     celFunction();
            // };

            // document.getElementById("fah").onclick = function () {
            //     fahFunction();
            // };

            function celFunction() {
                let fahTemp = weatherTemp;
                let celTemp = (fahTemp - 32) * 0.5556;
                let adjustedCelTemp = celTemp.toFixed(2);

                $('#weatherTemp').html(adjustedCelTemp + celDegree);
            };

            function fahFunction() {
                $('#weatherTemp').html(weatherTemp + fahDegree);
            };

            let icons = new Skycons({
                "color": "white"
            });

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

function getDay() {
    var dateFull = new Date();
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    var dayName = weekday[dateFull.getDay()];

    return dayName;
}

function getDateNumber() {
    var dateFull = new Date();
    var date = dateFull.getDate();

    return date;
}

function getMonthName() {
    var dateFull = new Date();
    var months = new Array(12);
    months[0] = "January";
    months[1] = "February";
    months[2] = "March";
    months[3] = "April";
    months[4] = "May";
    months[5] = "June";
    months[6] = "July";
    months[7] = "August";
    months[8] = "September";
    months[9] = "October";
    months[10] = "November";
    months[11] = "December";

    var month = months[dateFull.getMonth()];

    return month;
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    // add a zero in front of numbers<10
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('time').innerHTML = h + ":" + m + ":" + s;
    t = setTimeout(function () {
        startTime()
    }, 500);
}