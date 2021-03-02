import { Container } from "../components/container.js";
import { Header } from "../components/header.js";
import { Paragraph } from "../components/paragraph.js";

import { QuoteService } from "./services/QuoteService.js";

let quoteContainer = new Container();

async function showQuoteOfDay(promise) {
  try {
    let title
    let authorElem
    let quoteElem
    if (promise) {
      promise.then(obj => {
        title = new Header("RandomQuote");
        authorElem = new Paragraph(obj.randomAuthor);
        quoteElem = new Paragraph(obj.randomQuote);
        quoteContainer.addChild(title, authorElem, quoteElem);
      })
    }
    else {
      let { author, quote } = await QuoteService.getQuote();
      title = new Header("Цитата дня");
      authorElem = new Paragraph(author);
      quoteElem = new Paragraph(quote);

      quoteContainer.addChild(title, authorElem, quoteElem);
    }


  } catch (e) {
    console.log(e);
  }
}


let btn = document.createElement('button')
btn.classList.add('btn')
btn.innerHTML = 'Click To Get Random Quote'

btn.onclick = () => {
  let action = QuoteService.getRandomQuote()
  showQuoteOfDay(action)
}
showQuoteOfDay();
document.body.append(btn)

export { quoteContainer };
