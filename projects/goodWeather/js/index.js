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
`;

let cityText = "Глубокое";
let units = "imperial";

fahrenheit.onclick = () => {
  fahrenheit.classList.add("active");
  celsius.classList.remove("active");

  units = "imperial";

  WeatherService.getWeatherByText(cityText, units).then((result) => renderWeatherData(result));
};

celsius.onclick = () => {
  celsius.classList.add("active");
  fahrenheit.classList.remove("active");

  units = "metric";

  return units;
};

form.onsubmit = function (event) {
  event.preventDefault();
  let input = event.target[0];

  WeatherService.getWeatherByText(input.value, units)
    .then((result) => renderWeatherData(result))
    .catch(() => {
      input.value = "";

      alert("Не вводи такой ерунды больше никогда!");
    });
};

WeatherService.getWeatherByText(cityText).then((result) => renderWeatherData(result));

function renderWeatherData(weatherData) {
  if (weatherData?.name) {
    panel.classList.remove("transparent");
    preloader.classList.remove("active");
  }

  temp.innerHTML = weatherData.main.temp;
  city.innerHTML = weatherData.name;

  description.innerHTML = weatherData.weather[0].description;

  let windText = `${weatherData.wind.speed} ${units === "metric" ? "km/h" : "mph"}`;

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
      });
    });

    forecast.innerHTML = "";
    forecast.append(...elemArr);
  });
}

function showDate() {
  let date = new Date();

  dt.innerHTML = date.toLocaleDateString();
}

function ForecastItem({ maxTemp, minTemp }) {
  let div = document.createElement("div");

  div.style = `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 33px;
  `;

  div.innerHTML = `<h1>${maxTemp}</h1>  
  <h2>${minTemp}</h2>`;

  return div;
}
