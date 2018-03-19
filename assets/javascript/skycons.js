function skycons(icon, set){
    //console.log(set)
    let icons = new Skycons({
        "color": "white"
    });
    
    switch (icon) {
        case "clear-day":
            icons.set(set, Skycons.CLEAR_DAY);
            icons.play();
            break;
    
        case "clear-night":
            icons.set(set, Skycons.CLEAR_NIGHT);
            icons.play();
            break;
    
        case "partly-cloudy-night":
            icons.set(set, Skycons.PARTLY_CLOUDY_NIGHT);
            icons.play();
            break;
    
        case "partly-cloudy-day":
            icons.set(set, Skycons.PARTLY_CLOUDY_DAY);
            icons.play();
            break;
    
        case "cloudy":
            icons.set(set, Skycons.CLOUDY);
            icons.play();
            break;
    
        case "rain":
            icons.set(set, Skycons.RAIN);
            icons.play();
            break;
    
        case "sleet":
            icons.set(set, Skycons.SLEET);
            icons.play();
            break;
    
        case "snow":
            icons.set(set, Skycons.SNOW);
            icons.play();
            break;
    
        case "wind":
            icons.set(set, Skycons.WIND);
            icons.play();
            break;
    
        case "fog":
            icons.set(set, Skycons.FOG);
            icons.play();
            break;
    }
    
}