export class Paragraph {
  //дописать по тому принципу как и класс Button
  constructor(text) {
    this.text = text;
    let p = document.createElement("p");
    this.p = p;

    this.p.append(this.text);
  }

  setText(text) {
    this.text = text;

    this.p.innerHTML =  text;
  }

  onClick(func) {
    this.p.onclick = func;
  }

  getElement() {
    return this.p;
  }

  addClass(className) {
    this.p.classList.add(className);
  }

  removeClass(className) {
    this.p.classList.remove(className);
  }

  toggleClass(className) {
    this.p.classList.toggle(className);
  }

  containsClass(className) {
    return this.p.classList.contains(className);
  }
}
