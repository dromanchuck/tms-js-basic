import { Element } from "./element.js";

export class Paragraph extends Element {
  constructor(text) {
    super("p", text);
  }

  setText(text) {
    this.elem.innerHTML = text;
  }
}
