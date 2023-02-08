// Preloader Animation
var loader = document.getElementById("preloader");
window.addEventListener("load", function() {
    loader.style.display = "none";
})

const getWeather = (city) => {
    if (city === "") {
        window.alert("Enter Valid City Name")
    } else {
       const cityOptions = {
           method: 'POST',
           headers: {
               'Content-Type': 'application/json'
           },
           body: JSON.stringify({city})
        };
        fetch('/cityApi', cityOptions).then(response => (response.json())).then(response => {
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
        });

    }
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

const placesOptions = {
    method: 'GET',
    headers:{
        'Content-Type': 'application/json'
    }
}
fetch('/placesApi', placesOptions).then(response => response.json()).then(response => {
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