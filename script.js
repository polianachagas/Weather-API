$.getJSON(
    "https://api.openweathermap.org/data/2.5/weather?lat=-23.54898&lon=-46.6388&appid=c8b893fffcae5507df084e5a9ff684d0", 
    function(data) {

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

    var input = document.getElementsByTagName('input')[0];
    var search_img = document.getElementById('search-img');

    function searchCity() {
        var city_input= input.value;
        $.getJSON(
            "https://api.openweathermap.org/geo/1.0/direct?q=" + city_input + "&limit=5&appid=84f67e3a5fbf9d84f482b69614e77cb8", 
            function(data2) {

                var country = data2[0].country;
                var city = data2[0].name;
                $('.city-country').text(city + ' / ' + country);

                lat = data2[0].lat;
                lon = data2[0].lon;

                $.getJSON(
                    "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=c8b893fffcae5507df084e5a9ff684d0",
                    function(data3) {
                        var temp = Math.floor(data3.main.temp);
                        var temp_celsius = Math.floor(temp - 273.15);
                        var temp_fah = Math.floor((temp - 273.15) * 9/5 + 32);

                        $('.temp-fah').text(temp_fah + 'º');
                        $('.temp-celsius').text(temp_celsius + 'º');

                        var weather_desc = data3.weather[0].description;
                        $('.weather-desc').text(weather_desc);

                        var feels_like = data3.main.feels_like;
                        var feels_like_fah = Math.floor((feels_like - 273.15) * 9/5 + 32);
                        var feels_like_c = Math.floor(feels_like - 273.15);
                        $('.feels-like').text(feels_like_fah + 'º / ' + feels_like_c + 'º');

                        var humidity = data3.main.humidity;
                        $('.humidity').text(humidity);

                        var temp_max = data3.main.temp_max;
                        var temp_max_fah = Math.floor((temp_max - 273.15) * 9/5 + 32);
                        var temp_max_celsius = Math.floor(temp_max - 273.15);
                        $('.temp-max').text(temp_max_fah + 'º / ' + temp_max_celsius + 'º');

                        var temp_min = data3.main.temp_min;
                        var temp_min_fah = Math.floor((temp_min - 273.15) * 9/5 + 32);
                        var temp_min_celsius = Math.floor(temp_min - 273.15);
                        $('.temp-min').text(temp_min_fah + 'º / ' + temp_min_celsius + 'º');

                        var condition = data3.weather[0].main;
                        if (weatherConditions[condition]) {
                            $('.icon').attr('src', weatherConditions[condition].icon);
                            document.getElementsByClassName('container')[0].style.backgroundColor = weatherConditions[condition].color;
                        }
                    }
                )
            }
        )
    }

    input.addEventListener('keydown', (event) => {
        if (event.key == "Enter") {
            searchCity();
        }  
    });    

    search_img.addEventListener('click', (event) => {
        searchCity();
    })

});