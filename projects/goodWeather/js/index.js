import { WeatherService } from "./WeatherService.js";

let temp = document.getElementById("condition");
let city = document.getElementById("city");
let description = document.getElementById("description");
let icon = document.getElementById("icon");
let wind = document.getElementById("wind");
let humidity = document.getElementById("humidity");
let fahrenheit = document.getElementById("fahrenheit");
let celsius = document.getElementById("celsius");
let form = document.querySelector("form");
let panel = document.getElementById("panel");
let preloader = document.getElementById("preloader");
let dt = document.getElementById("dt");
let forecast = document.getElementById("forecast");

forecast.style = `
  display: flex;
  justify-content: space-around;
  border-top: 1px solid white;
  margin-top: 40px;
`;

let cityText = "Глубокое";
let units = "imperial";

fahrenheit.onclick = () => {
    fahrenheit.classList.add("active");
    celsius.classList.remove("active");

    units = "imperial";
    WeatherService.getWeatherByText(cityText, units).then((result) =>
        renderWeatherData(result)
    );
};

celsius.onclick = () => {
    celsius.classList.add("active");
    fahrenheit.classList.remove("active");

    units = "metric";
    WeatherService.getWeatherByText(cityText, units).then((result) =>
        renderWeatherData(result)
    );
};

form.onsubmit = function(event) {
    event.preventDefault();
    let input = event.target[0];

    WeatherService.getWeatherByText(input.value, units)
        .then((result) => {
            renderWeatherData(result);
            cityText = input.value
        })
        .catch(() => {
            input.value = "";

            alert("Не вводи такой ерунды больше никогда!");
        });
};

WeatherService.getWeatherByText(cityText).then((result) =>
    renderWeatherData(result)
);

function renderWeatherData(weatherData) {
    if (weatherData?.name) {
        panel.classList.remove("transparent");
        preloader.classList.remove("active");
    }

    temp.innerHTML = weatherData.main.temp;
    city.innerHTML = weatherData.name;
    description.innerHTML = weatherData.weather[0].description;

    let windText = `${weatherData.wind.speed} ${
    units === "metric" ? "km/h" : "mph"
  }`;

    wind.innerHTML = windText;

    let humidityText = `${weatherData.main.humidity}%`;

    humidity.innerHTML = humidityText;
    icon.src = `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;

    showDate();

    WeatherService.getForecast(weatherData.name, units).then((result) => {
        let { list } = result;

        let elemArr = list.map((item) => {
            return ForecastItem({ 
                maxTemp: item.temp.max, 
                minTemp: item.temp.min, 
                dateOfForecast: item.dt, 
                sunriseTime: item.sunrise, 
                sunsetTime: item.sunset});
        });
        console.log(result)
        forecast.innerHTML = "";
        forecast.append(...elemArr);
    });
}

function showDate() {
    let date = new Date();

    dt.innerHTML = date.toLocaleDateString();
}

function ForecastItem({ maxTemp, minTemp, dateOfForecast, sunriseTime, sunsetTime}) {
    let div = document.createElement("div");

    div.style = `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    color: white;
  `;

  let forecastDate = new Date(dateOfForecast * 1000).toLocaleDateString().substr(0, 5);
  
  div.innerHTML = `<p style="font-size: 20px; opacity: 0.9">${forecastDate}</p> 
    <span style="opacity: 50%; font-size: 15px; text-transform: lowercase">Max</span> <h1 style="margin-bottom:5px">${maxTemp}</h1> 
    <span style="opacity: 50%; font-size: 15px; text-transform: lowercase">min</span> <h2 style="margin-bottom:10px">${minTemp}</h2> 
    <h3 style="text-transform: capitalize; font-size: 12px; opacity: 0.6">Sunrise: ${new Date(sunriseTime * 1000).toLocaleTimeString().substr(0, 5)}</h3> 
    <h3 style="text-transform: capitalize; font-size: 12px; opacity: 0.6">Sunset: ${new Date(sunsetTime * 1000).toLocaleTimeString().substr(0, 5)}</h3>
    `;

    return div;
}