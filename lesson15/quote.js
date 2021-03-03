import { Container } from "../components/container.js";
import { Header } from "../components/header.js";
import { Paragraph } from "../components/paragraph.js";

import { QuoteService } from "./services/QuoteService.js";

let quoteContainer = new Container();
let button = document.createElement('button');
button.innerText = 'Get random quote';

async function showQuoteOfDay() {
  try {
    let response = await fetch('https://api.kanye.rest');
    let result = await response.json();
    console.log(result);

    let title = new Header("Цитата дня");
    let authorElem  = new Paragraph('Kanye West');
    let quoteElem = new Paragraph(result.quote);

    quoteContainer.addChild(title,authorElem, quoteElem);
  } catch (e) {
    console.log(e);
  }
}

button.addEventListener('click', showQuoteOfDay)
document.body.append(button);

export { quoteContainer };
