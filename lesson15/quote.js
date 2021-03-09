import { Container } from "../components/container.js";
import { Header } from "../components/header.js";
import { Paragraph } from "../components/paragraph.js";
import { Button } from "../components/buttons.js";

import { QuoteService } from "./services/QuoteService.js";

let quoteContainer = new Container();
let title = new Header("Цитата дня");
let authorElem = new Paragraph();
let quoteElem = new Paragraph();

async function showQuoteOfDay() {
  try {
    let { author, quote } = await QuoteService.getQuote();

    changeQuote(quote, author);
  } catch (e) {
    console.log(e);
  }
}

showQuoteOfDay();

let button = new Button("Get quote");

button.onClick(async function () {
  try {
    let { author, quote } = await QuoteService.getRandomQuote();

    changeQuote(quote, author);
  } catch (e) {
    console.log(e);
  }
});

function changeQuote(quote, author) {
  authorElem.setText(author);
  quoteElem.setText(quote);
}

quoteContainer.addChild(title, authorElem, quoteElem, button);

export { quoteContainer };
