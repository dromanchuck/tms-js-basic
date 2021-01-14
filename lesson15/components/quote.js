import { Container } from "./container.js";
import { Header } from "./header.js";
import { Paragraph } from "./paragraph.js";

import { QuoteService } from "../services/QuoteService.js";

let quoteContainer = new Container();

async function showQuoteOfDay() {
  try {
    let { author, quote } = await QuoteService.getQuote();
    let title = new Header("Цитата дня");
    let authorElem = new Paragraph(author);
    let quoteElem = new Paragraph(quote);

    quoteContainer.addChild(title, authorElem, quoteElem);
  } catch (e) {
    console.log(e);
  }
}

showQuoteOfDay();

export { quoteContainer };
