const QUOTE_URL = "https://quotes.rest/qod";
const RANDOM_QUOTE_URL = `https://goquotes-api.herokuapp.com/api/v1/random?count=1`;

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
            console.log({ data });
            let { quotes } = data;

            let [quoteData] = quotes;
            let { text, author } = quoteData;

            return { text, author };
        } catch (e) {
            console.log({ e });
        }
    }
}