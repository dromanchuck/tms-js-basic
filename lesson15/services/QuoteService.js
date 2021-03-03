const QUOTE_URL = "https://quotes.rest/qod";
// const QUOTE_URL = "https://quotes.rest/qoute/random";

export class QuoteService {
  static async getQuote() {
    try {
      let response = await fetch(QUOTE_URL);
      let data = await response.json();
      console.log({ data });
      let {
        contents: { quotes },
      } = data;

      let [quoteData] = quotes;
      let { quote, author } = quoteData;

      let randomQuote = data[Math.floor(Math.random() * data.length)];

      randomQuote = { quote, author }
      console.log(randomQuote)

      return { quote, author };
    } catch (e) {
      console.log({ e });
    }
  }
}
