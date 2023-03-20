function displayTemperature(response) {
    let temperatureElement = document.querySelector("#temperature");
    let cityElement = document.querySelector("#city");
    let descriptionElement = document.querySelector("#description");
    let humidityElement = document.querySelector("#humidity");
    let windElement = document.querySelector("#wind");

    temperatureElement.innerHTML = Math.round(response.data.main.temp);
    cityElement.innerHTML = response.data.name;
    descriptionElement.innerHTML = response.data.weather[0].description;
    humidityElement.innerHTML = response.data.main.humidity;
    windElement.innerHTML = Math.round(response.data.wind.speed);
}

let apiKey = "b7d735a7d28a342e84165d7055229f3f";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}&units=metric`;


axios.get(apiUrl).then(displayTemperature);


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
