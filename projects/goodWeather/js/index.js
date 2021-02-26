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

form.onsubmit = function (event) {
  let data = new FormData(form);
  console.log({ event, data }, data.get("go"));
};

WeatherService.getWeatherByText(cityText).then((result) =>
  renderWeatherData(result)
);

function renderWeatherData(weatherData) {
  console.log({ weatherData });

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
}
