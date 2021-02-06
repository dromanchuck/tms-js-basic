let title = document.createElement("h1");
let container = document.createElement("div");
let input = document.createElement("input");
let ul = document.createElement("ul");

//ADD BUTTON
let addButton = document.createElement("button");
let addButtonText = document.createTextNode("Add");
addButton.append(addButtonText);

addButton.onclick = () => {
  let todo = createTodo(input.value);

  ul.append(todo);
};

let titleText = document.createTextNode("TODO-LIST");
title.append(titleText);

container.append(title, input, addButton, ul);
document.body.append(container);

function createTodo(text) {
  let todo = document.createElement("li");
  let textNode = document.createTextNode(text);

  todo.append(textNode);

  return todo;
}
