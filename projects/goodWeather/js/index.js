import { WeatherService } from './WeatherService.js';

let temp = document.getElementById('condition');
let city = document.getElementById('city');
let description = document.getElementById('description');
let icon = document.getElementById('icon');
let wind = document.getElementById('wind');
let humidity = document.getElementById('humidity');
let fahrenheit = document.getElementById('fahrenheit');
let celsius = document.getElementById('celsius');
let form = document.querySelector('form');
let panel = document.getElementById('panel');
let preloader = document.getElementById('preloader');
let dt = document.getElementById('dt');
let forecast = document.getElementById('forecast');

let cityText = 'Глубокое';
let units = 'imperial';

fahrenheit.onclick = () => {
  fahrenheit.classList.add('active');
  celsius.classList.remove('active');

  units = 'imperial';
  WeatherService.getWeatherByText(cityText, units).then((result) =>
    renderWeatherData(result)
  );
};

celsius.onclick = () => {
  celsius.classList.add('active');
  fahrenheit.classList.remove('active');

  units = 'metric';
  WeatherService.getWeatherByText(cityText, units).then((result) =>
    renderWeatherData(result)
  );
};

form.onsubmit = function (event) {
  event.preventDefault();
  let input = event.target[0];

  WeatherService.getWeatherByText(input.value, units)
    .then((result) => {
      renderWeatherData(result);
      cityText = input.value;
    })
    .catch(() => {
      input.value = '';

      alert('Не вводи такой ерунды больше никогда!');
    });
};

WeatherService.getWeatherByText(cityText).then((result) => {
  renderWeatherData(result);
  console.log(result);
});

function renderWeatherData(weatherData) {
  if (weatherData?.name) {
    panel.classList.remove('transparent');
    preloader.classList.remove('active');
  }

  temp.innerHTML = weatherData.main.temp;
  city.innerHTML = weatherData.name;
  description.innerHTML = weatherData.weather[0].description;

  let windText = `${weatherData.wind.speed} ${
    units === 'metric' ? 'km/h' : 'mph'
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
        date: item.dt,
        maxTemp: item.temp.max,
        minTemp: item.temp.min,
        sunrise: item.sunrise,
        sunset: item.sunset,
      });
    });
    console.log(elemArr);

    forecast.innerHTML = '';
    forecast.append(...elemArr);
  });
}

function showDate() {
  let date = new Date();

  dt.innerHTML = date.toLocaleDateString();
}

function ForecastItem({ date, maxTemp, minTemp, sunrise, sunset }) {
  let div = document.createElement('div');

  div.style = `
    display: flex;
    flex-direction: column;
    font-size: 14px;
    color: white;
    font-family: Roboto, sans-serif;
    text-transform: lowercase;
  `;

  div.innerHTML = `
  <h3 style='margin-bottom: 4px; text-align: center;'>${new Date(
    date * 1e3
  ).toLocaleDateString()}</h3>
  <div style='display: flex; justify-content: space-between'><span>max</span><span>${maxTemp}</span></div>
  <div style='display: flex; justify-content: space-between'><span>min</span><span>${minTemp}</span></div>
  <div style='display: flex; justify-content: space-between'><span>sunrise</span><span>${new Date(
    sunrise * 1e3
  ).toLocaleTimeString()}</span></div>
  <div style='display: flex; justify-content: space-between'><span>sunset</span><span>${new Date(
    sunset * 1e3
  ).toLocaleTimeString()}</span></div>
  `;

  return div;
}
