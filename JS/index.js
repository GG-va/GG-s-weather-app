let now = new Date();
let days = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat"
];
let months = [
    "Jan",
    "Feb",
    "March",
    "April",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
];

let hours = now.getHours();
if (hours < 10) {
    hours = `0${hours}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
    minutes = `0${minutes}`;
}
let date = now.getDate();
let day = days[now.getDay()];
let month = months[now.getMonth()];
let h3 = document.querySelector("h3");
h3.innerHTML = `${day} ${month} ${date}, ${hours}:${minutes}`;



function displayWeatherCondition(response) {
    document.querySelector("#city").innerHTML = response.data.name;
    document.querySelector("#temperature").innerHTML = Math.round(
        response.data.main.temp
    );



    //document.querySelector("#humidity").innerHTML = response.data.main.humidity;
    //document.querySelector("#precipitation").innerHTML = response.data.main;
    //document.querySelector("#wind").innerHTML = Math.round(
    //response.data.wind.speed);
    //document.querySelector("#description").innerHTML =
    // response.data.weather[0].main;
}


function search(event) {
    event.preventDefault();
    let cityElement = document.querySelector("#city");
    let cityForm = document.querySelector("#city-input");
    cityElement.innerHTML = cityForm.value;
    let apiKey = "b7d735a7d28a342e84165d7055229f3f";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(displayWeatherCondition);
}

let cityForm = document.querySelector("#city-form");
cityForm.addEventListener("submit", search);


function searchLocation(position) {
    let apiKey = "b7d735a7d28a342e84165d7055229f3f";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(displayWeatherCondition);
}


















function handleSubmit(event) {
    event.preventDefault();
    let city = document.querySelector("#city-input").value;
    searchCity(city);
}


function getCurrentLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(searchLocation);
}

function convertToFahrenheit(event) {
    event.preventDefault();
    let temperatureElement = document.querySelector("#temperature");
    temperatureElement.innerHTML = 66;
}

function convertToCelsius(event) {
    event.preventDefault();
    let temperatureElement = document.querySelector("#temperature");
    temperatureElement.innerHTML = 19;
}

let dateElement = document.querySelector("#date");
let currentTime = new Date();
//dateElement.innerHTML = formatDate(currentTime);

let searchForm = document.querySelector("#search-form");
//searchForm.addEventListener("submit", handleSubmit);

let currentLocationButton = document.querySelector("#current-location-button");
currentLocationButton.addEventListener("click", getCurrentLocation);









//axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemperature);









//function search(event) {
//event.preventDefault();
//let cityElement = document.querySelector("#city");
//let cityForm = document.querySelector("#city-input");
//cityElement.innerHTML = cityForm.value;
//let apiKey = "b7d735a7d28a342e84165d7055229f3f";
//let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=b7d735a7d28a342e84165d7055229f3f`;
//axios.get(apiUrl).then(cityElement)
//}

//let cityForm = document.querySelector("#city-form", "#country-form");
//cityForm.addEventListener("submit", search);









//function convertToFahrenheit(event) {
//event.preventDefault();
//let fElement = document.querySelector("#f-temp");
//let currentTemp = fElement.innerHTML;
//currentTemp = Number(currentTemp);
//  fElement.innerHTML = Math.round((currentTemp * 9) / 5 + 32);
//}

//let fahrenheitLink = document.querySelector("f-temp");
//fahrenheitLink.addEventListener("click", convertToFahrenheit);


//function convertToCelsius(event) {
//event.preventDefault();
//let cElement = document.querySelector("#c-temp");
//  cElement.innerHTML = 19;
//}

//let celsiusLink = document.querySelector("#c-temp");
//celsiusLink.addEventListener("click", convertToCelsius);




//4



//let apiKey = "b7d735a7d28a342e84165d7055229f3f";
//let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Zurich&units=metric&appid=b7d735a7d28a342e84165d7055229f3f`;
//let units = "metric";
//let message = `${city}`;
//let cityInput = document.querySelector("#city-input");
//cityInput.innerHTML = message;


//function getCurrentPosition() {
//navigator.geolocation.getCurrentPosition(showTemperature);
//}

//function showPosition(position) {
//let temperatureElement = document.querySelector("#temperature");
//temperatureElement.innerHTML = `${temperature}`;
//}

//let button = document.querySelector("button");
//button.addEventListener("click", getCurrentPosition);


let weather = {
    apiKey: "b7d735a7d28a342e84165d7055229f3f",
    fetchWeather: function (city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="
            + city
            + "&units=metric&appid="
            + this.apiKey)
            .then((response) => response.json())
            .then((data) => this.displayWeather(data));
    },

    displayWeather: function (data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        console.log(name, icon, description, temp, humidity, speed)
        document.querySelector(".city").innerHTML = "Weather in" + name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description").innerHTML = description;
        document.querySelector(".temp").innerHTML = temp + "°C";
        document.querySelector(".humidity").innerHTML = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerHTML = "Wind speed: " + speed + "km/h";
        document.querySelector(".weather").classList.remove("loading");
        document.body.style.backgroundImage = url("https://source.unsplash.com/1600x900/?" + name);
    },
    search: function () {
        this.fetchWeather(document.querySelector(".search-bar").value);
    }
};

document
    .querySelector(".search-bar")
    .addEventListener("click", function () {
        weather.search();
    });

document.querySelector(".seach-bar").addEventListener("keyup", function (event) {
    if (event.keyup == "Enter") {
        weather.search();
    }
});

weather.fetchWeather("Zurich");







