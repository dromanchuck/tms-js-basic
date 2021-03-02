import { Element } from "./element.js";

export class Button extends Element {
  constructor(name) {
    super("button", name);
  }

  setName(name) {
    this.elem.innerHTML = name;
  }
}
