export class Local {
  static get todos() {
    let todosStr = localStorage.getItem("todos");

    return JSON.parse(todosStr);
  }

  static set todos(todosArr) {
    localStorage.setItem("todos", JSON.stringify(todosArr));
  }
}
