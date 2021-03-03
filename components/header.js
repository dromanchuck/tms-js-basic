import { Element } from "./element.js";

export class Header extends Element {
  constructor(text) {
    super("h1", text);
  }
}
