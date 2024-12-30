$.getJSON(
    "https://api.openweathermap.org/data/2.5/weather?lat=40&lon=-110&appid=c8b893fffcae5507df084e5a9ff684d0", 
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

    if (data.weather[0].main == 'Clear') { 
        var icon = 'imgs/clear.png';
        $('.icon').attr('src', icon);

        document.getElementsByClassName('weather-container')[0].style.backgroundColor = "#6DD5C9";
    }
    else if (data.weather[0].main == 'Thunderstrom') {
        var icon = 'imgs/storm.png';
        $('.icon').attr('src', icon);

        document.getElementsByClassName('weather-container')[0].style.backgroundColor = "#242038";
    }
    else if (data.weather[0].main == 'Drizzle') {
        var icon = 'imgs/rainy.png';
        $('.icon').attr('src', icon);

        document.getElementsByClassName('weather-container')[0].style.backgroundColor = "#64A6BD";
    }
    else if (data.weather[0].main == 'Rain') { 
        var icon = 'imgs/heavy-rain.png';
        $('.icon').attr('src', icon);

        document.getElementsByClassName('weather-container')[0].style.backgroundColor = "#26547C";
    }
    else if (data.weather[0].main == 'Snow') { 
        var icon = 'imgs/snow.png';
        $('.icon').attr('src', icon);

        document.getElementsByClassName('weather-container')[0].style.backgroundColor = "#DFDFDF";
    }
    else if (data.weather[0].main == 'Atmosphere') {
        var icon = 'imgs/fog.png';
        $('.icon').attr('src', icon);

        document.getElementsByClassName('weather-container')[0].style.backgroundColor = "#E2D0BE";
    }
    else if (data.weather[0].main == 'Clouds') { 
        var icon = 'imgs/cloudy.png';
        $('.icon').attr('src', icon);

        document.getElementsByClassName('weather-container')[0].style.backgroundColor = "#1C57BD";
    }
});