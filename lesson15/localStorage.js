export class Local {
  static get todos() {
    let todosStr = localStorage.getItem("todos");

    return JSON.parse(todosStr);
  } //получение объекта todosStr из сторадже

  static set todos(todosArr) {
    localStorage.setItem("todos", JSON.stringify(todosArr));
  } //добавление объекта todosStr в сторадже
}