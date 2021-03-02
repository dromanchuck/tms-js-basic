import { Element } from "./element.js";

export class ListItem extends Element {
  constructor(child) {
    super("li", child.getElement());
  }
}
