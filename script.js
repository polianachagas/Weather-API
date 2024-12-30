$.getJSON(
    "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=c8b893fffcae5507df084e5a9ff684d0", 
    function(data) {
    console.log(data);

    var icon = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
    $('.icon').attr('src', icon);

    var temp = Math.floor(data.main.temp);
    $('.temp').append(temp);

    var weather_desc = data.weather[0].description;
    $('.weather-desc').append(weather_desc);
});