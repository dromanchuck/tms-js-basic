const API_KEY = "58b6f7c78582bffab3936dac99c31b25";

export class WeatherService {
  static async getWeatherByText(city, units) {
    try {
      let response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}${
          units ? `&units=${units}` : ""
        }`
      );
      let json = await response.json();

      return json;
    } catch (error) {
      console.log(error);
    }
  }

  static async getForecast(city, units) {
    try {
      let response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&appid=${API_KEY}${
          units ? `&units=${units}` : ""
        }`
      );
      let json = await response.json();

      return json;
    } catch (error) {
      console.log(error);
    }
  }
}
