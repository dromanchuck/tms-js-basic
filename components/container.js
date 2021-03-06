import { Element } from "./element.js";

export class Container extends Element {
  constructor(...children) {
    let elements = children.map((child) => child.getElement());

    super("div", ...elements);
  }

  addChild(...children) {
    let elements = children.map((child) => child.getElement());

    this.elem.append(...elements);
  }
}
