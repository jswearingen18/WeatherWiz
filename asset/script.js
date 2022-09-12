var apiKey = "e2c0b0b0315d59bb35cf0a434cb83813";
var searchHistory = [];
var searchEl = document.querySelector("#searchForm");
var City = document.querySelector("#searchInput").value;
var currentDay = document.querySelector("#today");
var forecastEl = document.querySelector("#foreCast");
var previousSearch = document.querySelector("#prevSearch");
var apiUrl = "http://api.openweathermap.org/"

function fetchCoordinates(coordinates) {
    var coordUrl = `${apiUrl}geo/1.0/direct?q=Chicago&limit=5&appid=${apiKey}`;
    fetch(coordUrl)
    
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        if (!data[0]) {
            alert("Location not found");
        } else {
            //appendTosearchHistory(search);
            //fetchWeather(data[0]);
            var lat = data[0].lat;
            var lon = data[0].lon;
            var weatherUrl = `${apiUrl}data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}`
            fetchWeather(weatherUrl);

        }
        })
        .catch(function (err) {
            console.error(err);
        });
    }
    fetchCoordinates();
    function fetchWeather(weatherUrl) {
        fetch(weatherUrl)
        
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data[0].weather);
        })
        .catch(function (err) {
        console.error(err);
    });
    }