export class Button {
  constructor(name) {
    this.name = name;
    let button = document.createElement("button");

    button.append(this.name);
    this.button = button;
  }

  setName(name) {
    this.name = name;

    this.button.innerHTML = name;
  }

  onClick(func) {
    this.button.onclick = func;
  }

  getElement() {
    return this.button;
  }

  addClass(className) {
    this.button.classList.add(className);
  }

  removeClass(className) {
    this.button.classList.remove(className);
  }

  toggleClass(className) {
    this.button.classList.toggle(className);
  }
}
