export class Element {
  constructor(tagName, ...children) {
    let elem = document.createElement(tagName);
    this.elem = elem;

    this.elem.append(...children);
  }

  onClick(func) {
    this.elem.onclick = func;
  }

  getElement() {
    return this.elem;
  }

  addClass(className) {
    this.elem.classList.add(className);
  }

  removeClass(className) {
    this.elem.classList.remove(className);
  }

  toggleClass(className) {
    this.elem.classList.toggle(className);
  }

  containsClass(className) {
    return this.elem.classList.contains(className);
  }
}
