const API_KEY = "abc18123f9933da0d20e9228118f1a0d";

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
}
