
function formatDate(timestamp) {
    let date = new Date(timestamp);
    let hours = date.getHours();
    if (hours < 10) {
        hours = `0${hours}`;
    }
    let minutes = date.getMinutes();
    if (minutes < 10) {
        minutes = `0${minutes}`;
    }
    let days = [
        "Sun",
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat"
    ];
    let day = days[date.getDay()];
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
    let month = months[date.getMonth()];
    return `${month}, ${day} ${hours}:${minutes}`;
}

function displayForecast() {
    let forecastElement = document.querySelector("#forecast");

    let forecastHTML = `<div class="row">`;

    let days = ["Thu", "Fri", "Sat", "Sun", "Mon", "Tue"];

    days.forEach(function (day) {
        forecastHTML = forecastHTML + `
                        <div class="col-2">
                            <div class="weather-forecast-date">${day}
                            </div>
                            <img src="https://openweathermap.org/img/wn/04d@2x.png" alt="" width="42">
                            <div class="weather-forecast-temperature">
                                <span class="weather-forecast-temperature-max">
                                    18°
                                </span>

                                <span class="weather-forecast-temperature-min">
                                    12°
                                </span>
                        </div>
                    </div> `;

    })

    forecastHTML = forecastHTML + `</div>`;
    forecastElement.innerHTML = forecastHTML;
}


function displayTemperature(response) {
    let temperatureElement = document.querySelector("#temperature");
    let cityElement = document.querySelector("#city");
    let descriptionElement = document.querySelector("#description");
    let humidityElement = document.querySelector("#humidity");
    let windElement = document.querySelector("#wind");
    let dateElement = document.querySelector("#date");
    let iconElement = document.querySelector("#icon");

    celsiusTemperature = response.data.main.temp;

    temperatureElement.innerHTML = Math.round(celsiusTemperature);
    cityElement.innerHTML = response.data.name;
    descriptionElement.innerHTML = response.data.weather[0].description;
    humidityElement.innerHTML = response.data.main.humidity;
    windElement.innerHTML = Math.round(response.data.wind.speed);
    dateElement.innerHTML = formatDate(response.data.dt * 1000);
    iconElement.setAttribute("src", `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
    iconElement.setAttribute("alt", response.data.weather[0].description);
}

function search(city) {
    let apiKey = "b7d735a7d28a342e84165d7055229f3f";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayTemperature);
}

function handleSubmit(event) {
    event.preventDefault();
    let cityInputElement = document.querySelector("#city-input");
    search(cityInputElement.value);
}

function displayFahrenheitTemperature(event) {
    event.preventDefault();
    celsiusLink.classList.remove("link-style1");
    fahrenheitLink.classList.add("link-style1");
    let fahrenheitTemperature = (celsiusTemperature * 9) / 5 + 32;
    let temperatureElement = document.querySelector("#temperature");
    temperatureElement.innerHTML = Math.round(fahrenheitTemperature);
}

function displayCelsiusTemperature(event) {
    event.preventDefault();
    celsiusLink.classList.add("link-style1");
    fahrenheitLink.classList.remove("link-style1");
    let temperatureElement = document.querySelector("#temperature");
    temperatureElement.innerHTML = Math.round(celsiusTemperature);
}


let celsiusTemperature = null;

let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);

let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", displayFahrenheitTemperature);

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", displayCelsiusTemperature);


search("New York");
displayForecast();






