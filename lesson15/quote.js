import { Container } from '../components/container.js'
import { Header } from '../components/header.js'
import { Paragraph } from '../components/paragraph.js'

import { QuoteService } from './services/QuoteService.js'

const createQuoteButton = document.createElement('button')
createQuoteButton.innerText = 'Сгенерировать цитату!'

let quoteContainer = new Container()

async function showQuoteOfDay() {
  try {
    let response = await fetch('https://quotable.io/random')
    let data = await response.json()
    console.log(data.content)
    console.log(data.author)
    let title = new Header('Цитата дня')
    let authorElem = new Paragraph(data.author)
    let quoteElem = new Paragraph(data.content)

    quoteContainer.addChild(title, authorElem, quoteElem)
  } catch (e) {
    console.log(e)
  }
}

createQuoteButton.addEventListener('click', showQuoteOfDay)
document.body.append(createQuoteButton)
export { quoteContainer }
