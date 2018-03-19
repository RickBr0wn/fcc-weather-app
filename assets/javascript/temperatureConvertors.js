function celFunction(celDegree, weatherTemp) {
    let fahTemp = weatherTemp;
    let celTemp = (fahTemp - 32) * 0.5556;
    let adjustedCelTemp = celTemp.toFixed(2);

    $('#weatherTemp').html(adjustedCelTemp + celDegree);
};

function fahFunction(fahDegree, weatherTemp) {  
    $('#weatherTemp').html(weatherTemp + fahDegree);
};