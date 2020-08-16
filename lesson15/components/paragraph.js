export class Paragraph {
  //дописать по тому принципу как и класс Button
  constructor(text) {
    this.text = text;
    let p = document.createElement("p");
    this.p = p;
    this.p.append(this.text);
  }
  getElement() {
    return this.p;
  }
  addClass(className) {
    this.p.classList.add(className);
  }
  toggleClass(className) {
    this.p.classList.toggle(className);
  }
  removeClass(className) {
    this.p.classList.remove(className);
  }
  containsClass(className) {
    return this.p.classList.contains(className);
  }
}