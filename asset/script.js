// Variables used for the different elements
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
// Function to fetch data using openweather API
   function getWeather () {
    const userInput = searchEl.value;
    let weatherApi = `https://api.openweathermap.org/data/2.5/weather?q=${userInput}&units=imperial&us&APPID=${apiKey}`;
fetch(weatherApi)
// Then statement to return data as json
.then (function (data) {
    return data.json(data);
})
// Then statement to display data after you have searched for a city
.then (function (data) {
    icon.innerHTML = data.weather[0].icon;
    temp.innerHTML = "Temperature: " + data.main.temp;
    console.log(data);
    weather.innerHTML ="Weather: " + data.weather[0].description;

})
}
// Event listener to run the get weather function
searchBtn.addEventListener("click",getWeather);