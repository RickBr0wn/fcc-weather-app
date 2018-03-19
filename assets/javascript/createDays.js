function createDays(weatherData){
    let total = weatherData.daily.data.length;
    var dateFull = new Date();
    let data = '<div class="sm-empty-space"></div>';

    for(let i = 1; i < total-1; i++){
        let id = 'weather' + [i];
        //console.log(id);
        let canvasIcon = '<canvas id="' + id + '" width="50" height="50"></canvas>';
        data += '<div class="container main panel-color">';
        data += generateDays(i, dateFull);
        data += '<hr><div class="row">';
        data += canvasIcon;
        data += weatherData.daily.data[i].summary;
        data += '</div></div><div class="sm-empty-space"></div>';
        //console.log(weatherData.daily.data[i].icon);
        skycons(weatherData.daily.data[i].icon, id);
    }
    return data;
}

function generateDays(index, dateFull){
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    var dayName = weekday[dateFull.getDay() + index];

    return dayName;
}
