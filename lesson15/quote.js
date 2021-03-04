import { Button } from "../components/buttons.js";
import { Container } from "../components/container.js";
import { Header } from "../components/header.js";
import { Paragraph } from "../components/paragraph.js";

import { QuoteService } from "./services/QuoteService.js";

let container = new Container();
let quoteContainer = new Container();
let button = new Button(`Get new quote`);
container.addChild(button, quoteContainer);

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

async function showRandomQuoteOfDay() {
    try {
        let { author, text } = await QuoteService.getRandomQuote();
        let title = new Header("Цитата дня");
        let authorElem = new Paragraph(author);
        let quoteElem = new Paragraph(text);

        quoteContainer.addChild(title, authorElem, quoteElem);

    } catch (e) {
        console.log(e);
    }
}

showQuoteOfDay();

button.onClick(function() {
    quoteContainer.removeChildren();
    showRandomQuoteOfDay();

});

export { container };