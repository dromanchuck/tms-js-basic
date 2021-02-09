let title = document.createElement("h1");
let container = document.createElement("div");
let input = document.createElement("input");
let ul = document.createElement("ul");

<<<<<<< HEAD
//ADD BUTTON
let addButton = document.createElement("button");
let addButtonText = document.createTextNode("Add");
=======
input.placeholder = "Сделай же что-нибудь!";

//ADD BUTTON
let addButton = document.createElement("button");
let addButtonText = document.createTextNode("Добавить");
>>>>>>> 1b82d5514e453e30d95353ad23749ef94731177f
addButton.append(addButtonText);

addButton.onclick = () => {
  let todo = createTodo(input.value);
<<<<<<< HEAD
=======
  input.value = "";
>>>>>>> 1b82d5514e453e30d95353ad23749ef94731177f

  ul.append(todo);
};

let titleText = document.createTextNode("TODO-LIST");
title.append(titleText);

container.append(title, input, addButton, ul);
document.body.append(container);

function createTodo(text) {
  let todo = document.createElement("li");
  let textNode = document.createTextNode(text);
<<<<<<< HEAD

  todo.append(textNode);

  return todo;
}
=======
  let id = ul.children.length;

  todo.setAttribute("id", id);

  let removeButton = document.createElement("button");
  removeButton.innerText = "Удалить";
  removeButton.classList.add("remove_button");

  removeButton.onclick = function (event) {
    event.stopPropagation();
    todo.remove();
  };

  let doneButton = document.createElement("button");
  doneButton.innerText = "Выполнено";
  doneButton.classList.add("done_button");

  doneButton.onclick = function (event) {
    event.stopPropagation();
    todo.classList.toggle("list_item__done");
  };

  todo.append(textNode);
  todo.prepend(doneButton);
  todo.append(removeButton);

  return todo;
}

ul.addEventListener("click", function (event) {
  if (event.target.id) {
    event.target.classList.toggle("checked");
  }
});
>>>>>>> 1b82d5514e453e30d95353ad23749ef94731177f
