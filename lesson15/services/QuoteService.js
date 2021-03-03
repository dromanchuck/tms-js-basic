const QUOTE_URL = "https://quotes.rest/quote/random";

export class QuoteService {
  static async getQuote() {
    try {
      let response = await fetch(QUOTE_URL);
      let data = await response.json();
      let random = data[Math.round(Math.random() * data.length)];
      let { quote, author } = random;

      return { quote, author };
    } catch (e) {
      console.log({ e });
    }
  }
}
