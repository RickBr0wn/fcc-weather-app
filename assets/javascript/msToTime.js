function msToTime(duration) {
    var date = new Date(null);
    date.setSeconds(duration);
    var result = date.toISOString().substr(11, 5);

    return result;
}