var apiKey = "e2c0b0b0315d59bb35cf0a434cb83813";
var searchHistory = [];
var searchEl = document.querySelector("#searchInput");
var currentDay = document.querySelector("#today");
var forecastEl = document.querySelector("#foreCast");
var previousSearch = document.querySelector("#prevSearch");
var apiUrl = "http://api.openweathermap.org/"
var searchBtn = document.getElementById("myBtn");
var temp = document.getElementById("temp");
var weather = document.getElementById("weather");
var icon = document.getElementById("icon");

   function getWeather () {
    const userInput = searchEl.value;
    let weatherApi = `https://api.openweathermap.org/data/2.5/weather?q=${userInput}&units=imperial&us&APPID=${apiKey}`;
fetch(weatherApi)
.then (function (data) {
    return data.json(data);
})
.then (function (data) {
    icon.innerHTML = data.weather[0].icon;
    temp.innerHTML = "Temperature: " + data.main.temp;
    console.log(data);
    weather.innerHTML ="Weather: " + data.weather[0].description;

})
}
searchBtn.addEventListener("click",getWeather);