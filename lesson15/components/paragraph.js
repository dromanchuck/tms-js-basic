export class Paragraph {
  //дописать по тому принципу как и класс Button
  constructor(text) {
    this.text = text;
    let p = document.createElement("p");
    this.p = p;

    this.p.appendChild(this.text);
  }
}
