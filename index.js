const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '098adbcc37msh7245f958e5aebfap1d25fcjsn32eabc9b69da',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};


const getWeather = (city) => {
    if (city === "") {
        window.alert("Enter Valid City Name")
    } else {
        fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
            .then(response => response.json())
            .then(response => {

                if (response.temp === undefined) {
                    window.alert("Enter Valid City Name")
                }
                else {
                    cityName.innerHTML = city
                    cloud_pct.innerHTML = response.cloud_pct
                    temp.innerHTML = response.temp
                    feels_like.innerHTML = response.feels_like
                    humidity.innerHTML = response.humidity
                    wind_speed.innerHTML = response.wind_speed
                    wind_degrees.innerHTML = response.wind_degrees
                    sunrise.innerHTML = new Date(response.sunrise * 1000)
                    sunset.innerHTML = new Date(response.sunset * 1000)

                }
            })
            .catch(err => console.error(err));
    }
}

submit.addEventListener("click", (e) => {
    e.preventDefault();
    getWeather(city.value);
})

getWeather("Delhi")

var cityData = [];

fetch("https://places-api-q5mi.onrender.com/placesData").then(response => response.json()).then(response => {
    response.forEach(data => {
        cityData.push(data.name);
    });
})
.catch(err => console.log(err));

$(function () {
    $("#city").autocomplete({
        source: function(request, response) {
            var results = $.ui.autocomplete.filter(cityData, request.term);
            response(results.slice(0, 10));
        }
    });
});