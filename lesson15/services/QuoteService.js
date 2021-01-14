const QUOTE_URL = "https://quotes.rest/qod";

export class QuoteService {
  static async getQuote() {
    try {
      let response = await fetch(QUOTE_URL);
      let data = await response.json();

      let {
        contents: { quotes },
      } = data;

      let [quoteData] = quotes;
      let { quote, author } = quoteData;

      return { quote, author };
    } catch (e) {}
  }
}
