function skycons(iconAPI){
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
    
}