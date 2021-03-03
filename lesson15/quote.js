import { Container } from '../components/container.js';
import { Header } from '../components/header.js';
import { Paragraph } from '../components/paragraph.js';
import { Button } from '../components/buttons.js';

import { QuoteService } from './services/QuoteService.js';

let quoteContainer = new Container();
let container = new Container();
let getRandomQuoteButton = new Button('Random quote');

async function showQuoteOfDay() {
  try {
    let { author, quote } = await QuoteService.getQuote();
    let title = new Header('Цитата дня');
    let authorElem = new Paragraph(author);
    let quoteElem = new Paragraph(quote);

    quoteContainer.addChild(title, authorElem, quoteElem);
    container.addChild(quoteContainer);
  } catch (e) {
    console.log(e);
  }
}

async function showRandomQuote() {
  try {
    let { author, quote } = await QuoteService.getRandomQuote();
    let title = new Header('Цитата дня');
    let authorElem = new Paragraph(author ? author : 'Unknown author');
    let quoteElem = new Paragraph(quote);
    quoteContainer.clear();
    quoteContainer.addChild(title, authorElem, quoteElem);
  } catch (e) {
    console.log(e);
  }
}

showQuoteOfDay();

container.addChild(getRandomQuoteButton);
getRandomQuoteButton.onClick(showRandomQuote);

export { container };
