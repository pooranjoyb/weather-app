const options = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }
};


fetch('/api', options).then(response => (response.json())).then(data => {
    fetchWeather(data, "Delhi");
});

const getWeather = (city) => {
    if (city === "") {
        window.alert("Enter Valid City Name")
    } else {
       
    }
}

const fetchWeather = (apiInfo, city) => {
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, apiInfo)
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
        .catch(err => {
            window.alert(err)
            return;
        });
}


submit.addEventListener("click", (e) => {
    e.preventDefault();
    getWeather(city.value);
})

getWeather("Delhi")

var cityData = [];

function removeDuplicates(arr) {
    return [...new Set(arr)];
}

fetch("https://places-api-q5mi.onrender.com/placesData").then(response => response.json()).then(response => {
    response.forEach(data => {
        cityData.push(data.name);
    });
    response.forEach(data => {
        cityData.push(data.country)
    })
    cityData = removeDuplicates(cityData)
})
    .catch(err => console.log(err));


$(function () {
    $("#city").autocomplete({
        source: function (request, response) {
            var results = $.ui.autocomplete.filter(cityData, request.term);
            response(results.slice(0, 10));
        }
    });
});