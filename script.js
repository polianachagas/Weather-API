$.getJSON(
    "https://api.openweathermap.org/data/2.5/weather?lat=35.7258&lon=139.539&appid=c8b893fffcae5507df084e5a9ff684d0", 
    function(data) {
    console.log(data);

    var temp = Math.floor(data.main.temp);
    var temp_celsius = Math.floor(temp - 273.15);
    var temp_fah = Math.floor((temp - 273.15) * 9/5 + 32);

    $('.temp-fah').append(temp_fah + 'º');
    $('.temp-celsius').append(temp_celsius + 'º');

    var weather_desc = data.weather[0].description;
    $('.weather-desc').append(weather_desc);

    var country = data.sys.country;
    var city = data.name;
    $('.city-country').append(city + ' / ' + country);

    var feels_like = data.main.feels_like;
    var feels_like_fah = Math.floor((feels_like - 273.15) * 9/5 + 32);
    var feels_like_c = Math.floor(feels_like - 273.15);
    $('.feels-like').append(feels_like_fah + 'º / ' + feels_like_c + 'º');

    var humidity = data.main.humidity;
    $('.humidity').append(humidity);

    var temp_max = data.main.temp_max;
    var temp_max_fah = Math.floor((temp_max - 273.15) * 9/5 + 32);
    var temp_max_celsius = Math.floor(temp_max - 273.15);
    $('.temp-max').append(temp_max_fah + 'º / ' + temp_max_celsius + 'º');

    var temp_min = data.main.temp_min;
    var temp_min_fah = Math.floor((temp_min - 273.15) * 9/5 + 32);
    var temp_min_celsius = Math.floor(temp_min - 273.15);
    $('.temp-min').append(temp_min_fah + 'º / ' + temp_min_celsius + 'º');

    document.querySelector('h2').onclick = function() {
        var moreInfo = document.getElementById('more-info');
        moreInfo.classList.toggle('open'); // Adiciona ou remove a classe 'open'
    };

    var weatherConditions = {
        Clear: {icon: 'imgs/clear.png', color: '#6DD5C9'},
        Thunderstorm: {icon: 'imgs/storm.png', color: "#242038"},
        Drizzle: {icon: 'imgs/rainy.png', color: "#64A6BD"},
        Rain: {icon: 'imgs/heavy-rain.png', color: "#26547C"},
        Snow: {icon: 'imgs/snow.png', color: "#DFDFDF"},
        Atmosphere: {icon: 'imgs/fog.png', color: "#E2D0BE"},
        Clouds: {icon: 'imgs/cloudy.png', color: "#1C57BD"}
    };

    var condition = data.weather[0].main;
    if (weatherConditions[condition]) {
        $('.icon').attr('src', weatherConditions[condition].icon);
        document.getElementsByClassName('container')[0].style.backgroundColor = weatherConditions[condition].color;
    }

});