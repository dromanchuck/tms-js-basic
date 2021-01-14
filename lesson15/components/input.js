import { Element } from "./element.js";

export class Input extends Element {
  constructor(placeholder, value = "") {
    super("input");

    this.elem.placeholder = placeholder;
    this.elem.value = value;
  }

  setValue(value) {
    this.elem.value = value;
  }

  getValue() {
    return this.elem.value;
  }
}
