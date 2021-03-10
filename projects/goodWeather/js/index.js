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
  event.preventDefault();
  let input = event.target[0];

  WeatherService.getWeatherByText(input.value, units)
    .then((result) => renderWeatherData(result))
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
    console.log(list)

    let elemArr = list.map((item) => {
      return ForecastItem({ maxTemp: item.temp.max, minTemp: item.temp.min, sunrise: item.sunrise, sunset: item.sunset, date: item.dt });
    });

    forecast.innerHTML = "";
    forecast.append(...elemArr);
  });
}

function showDate() {
  let date = new Date();

  dt.innerHTML = date.toLocaleDateString();
}

function ForecastItem({ maxTemp, minTemp, date, sunrise, sunset }) {
  let div = document.createElement("div");

  let today = new Date(date * 1000).toLocaleDateString();
  let sunrising = new Date(sunrise * 1000).toLocaleDateString();
  let sunseting = new Date(sunset * 1000).toLocaleDateString();

  div.style = `
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 33px;
  `;

  div.innerHTML = `
  <p>${today}</p>
  <h3><label>Max</label> ${maxTemp}</h3>  
  <h4><label>Min</label> ${minTemp}</h4>
  <p>Sunrise at: ${sunrising}</p>
  <p>Sunset at: ${sunseting}</p>
  `;

  return div;
}
