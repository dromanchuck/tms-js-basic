import { Container } from "../components/container.js";
import { Header } from "../components/header.js";
import { Paragraph } from "../components/paragraph.js";

import { QuoteService } from "./services/QuoteService.js";

let quoteContainer = new Container();
let button = document.createElement(`button`);
button.innerText = `Случайная цитата`;
document.body.append(button);
button.onclick = () => {
  showQuoteOfDay();
}
async function showQuoteOfDay() {
  try {
    let { quote, author } = await QuoteService.getQuote();
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
