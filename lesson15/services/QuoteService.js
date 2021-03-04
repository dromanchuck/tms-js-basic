const QUOTE_URL = 'https://quotes.rest/qod';
const RANDOM_QUOTE_URL = 'https://type.fit/api/quotes';

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

      return { quote, author };
    } catch (e) {
      console.log({ e });
    }
  }

  static async getRandomQuote() {
    try {
      let response = await fetch(RANDOM_QUOTE_URL);
      let data = await response.json();
      let i = Math.floor(Math.random() * 1500 + 1);
      let { text, author } = data[i];
      
      return { text, author };
    } catch (e) {
      console.log({ e });
    }
  }
}
