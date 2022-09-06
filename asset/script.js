var cityEl = document.getElementsByClassName("searchBox");
var weatherUrl = "https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=7d9e21015cb2ad4c696f2c809ef3065f";

fetch(weatherUrl)
.then(function (response) {
    return response.json();
})
.then(function (data) {
   // for (var i = 0; i <data.length; i++) {
        console.log(data);
        for(var i = 0; i < data.length; i++) {
            console.log(data[i]);
        }
    }
//}
)