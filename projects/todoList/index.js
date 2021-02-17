<<<<<<< HEAD
<<<<<<< HEAD
let title = document.createElement('h1')
let container = document.createElement('div')
let input = document.createElement('input')
let ul = document.createElement('ul')

//ADD BUTTON
let addButton = document.createElement('button')
let addButtonText = document.createTextNode('Add')
addButton.append(addButtonText)

addButton.onclick = () => {
  let todo = createTodo(input.value)

  ul.append(todo)
}

let titleText = document.createTextNode('TODO-LIST')
title.append(titleText)

container.append(title, input, addButton, ul)
document.body.append(container)

function createTodo(text) {
  let todo = document.createElement('li')
  let textNode = document.createTextNode(text)

  todo.append(textNode)

  return todo
}
=======
let title = document.createElement("h1");
let container = document.createElement("div");
let input = document.createElement("input");
let ul = document.createElement("ul");
let todos = JSON.parse(localStorage.getItem("todos")) || [];

function getID() {
  return "_" + Math.random().toString(36).substr(2, 9);
=======
let title = document.createElement('h1');
let container = document.createElement('div');
let input = document.createElement('input');
let ul = document.createElement('ul');
let todos = JSON.parse(localStorage.getItem('todos')) || [];

function getID() {
  return '_' + Math.random().toString(36).substr(2, 9);
>>>>>>> 8d10e18b2f8811e79bc9f228ed9850e2a2cf13b6
}

todos.forEach((item) => {
  let todo = createTodo(item.title, item.id, item.done);

  ul.append(todo);
});

<<<<<<< HEAD
input.placeholder = "Сделай же что-нибудь!";

input.addEventListener("keydown", (event) => {
  if (event.target.value.length > 1) {
    addButton.classList.remove("hide_add_button");
  } else {
    addButton.classList.add("hide_add_button");
=======
input.placeholder = 'Сделай же что-нибудь!';

input.addEventListener('keydown', (event) => {
  if (event.target.value.length > 1) {
    addButton.classList.remove('hide_add_button');
  } else {
    addButton.classList.add('hide_add_button');
>>>>>>> 8d10e18b2f8811e79bc9f228ed9850e2a2cf13b6
  }
});

//ADD BUTTON
<<<<<<< HEAD
let addButton = document.createElement("button");
let addButtonText = document.createTextNode("Добавить");
addButton.append(addButtonText);

addButton.classList.add("hide_add_button");
=======
let addButton = document.createElement('button');
let addButtonText = document.createTextNode('Добавить');
addButton.append(addButtonText);

addButton.classList.add('hide_add_button');
>>>>>>> 8d10e18b2f8811e79bc9f228ed9850e2a2cf13b6

addButton.onclick = () => {
  if (input.value) {
    let id = getID();
    let todo = createTodo(input.value, id, false);

    ul.append(todo);
    todos.push({ title: input.value, done: false, id });
<<<<<<< HEAD
    localStorage.setItem("todos", JSON.stringify(todos));

    input.value = "";
  } else {
    alert("Ну введи уже что-нибудь!");
=======
    localStorage.setItem('todos', JSON.stringify(todos));

    input.value = '';
  } else {
    alert('Ну введи уже что-нибудь!');
>>>>>>> 8d10e18b2f8811e79bc9f228ed9850e2a2cf13b6
  }
};

let titleText = document.createTextNode('TODO-LIST');
title.append(titleText);

container.append(title, input, addButton, ul);
document.body.append(container);

function createTodo(text, id, done = false) {
<<<<<<< HEAD
  let todo = document.createElement("li");
  let p = document.createElement("p");
  let textNode = document.createTextNode(text);
  let editInput = document.createElement("input");

  p.append(textNode);
  todo.setAttribute("id", id);
  todo.classList.add("list_item");

  let removeButton = document.createElement("button");
  removeButton.innerText = "Удалить";
  removeButton.classList.add("remove_button");

  if (done) {
    todo.classList.add("list_item__done");
=======
  let todo = document.createElement('li');
  let p = document.createElement('p');
  let textNode = document.createTextNode(text);
  let editInput = document.createElement('input');

  p.append(textNode);
  todo.setAttribute('id', id);
  todo.classList.add('list_item');

  let removeButton = document.createElement('button');
  removeButton.innerText = 'Удалить';
  removeButton.classList.add('remove_button');

  if (done) {
    todo.classList.add('list_item__done');
>>>>>>> 8d10e18b2f8811e79bc9f228ed9850e2a2cf13b6
  }

  removeButton.onclick = function (event) {
    event.stopPropagation();
    todo.remove();

    todos = todos.filter((item) => item.id !== id);

<<<<<<< HEAD
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  let doneButton = document.createElement("button");
  doneButton.innerText = "Выполнено";
  doneButton.classList.add("done_button");

  doneButton.onclick = function (event) {
    event.stopPropagation();
    todo.classList.toggle("list_item__done");

    todos = todos.map((item) =>
      item.id === id ? { ...item, done: !item.done } : item
    );

    localStorage.setItem("todos", JSON.stringify(todos));
  };

  let editButton = document.createElement("button");
  editButton.innerHTML = "Редактировать";

  editButton.onclick = () => {
    let textButton = editButton.innerText;

    if (textButton === "Редактировать") {
      editInput.value = text;
      p.replaceWith(editInput);

      editButton.innerText = "Применить";
    }

    if (textButton === "Применить") {
=======
    localStorage.setItem('todos', JSON.stringify(todos));
  };

  let doneButton = document.createElement('button');
  doneButton.innerText = 'Выполнено';
  doneButton.classList.add('done_button');

  doneButton.onclick = function (event) {
    event.stopPropagation();
    todo.classList.toggle('list_item__done');

    todos = todos.map((item) =>
      item.id === id ? { ...item, done: !item.done } : item
    );

    localStorage.setItem('todos', JSON.stringify(todos));
  };

  let editButton = document.createElement('button');
  editButton.innerHTML = 'Редактировать';

  editButton.onclick = () => {
    let textButton = editButton.innerText;

    if (textButton === 'Редактировать') {
      editInput.value = text;
      p.replaceWith(editInput);

      editButton.innerText = 'Применить';
    }

    if (textButton === 'Применить') {
>>>>>>> 8d10e18b2f8811e79bc9f228ed9850e2a2cf13b6
      let inputText = editInput.value;
      p.innerText = inputText;

      todos = todos.map((item) =>
        item.id === id ? { ...item, title: inputText } : item
      );

<<<<<<< HEAD
      localStorage.setItem("todos", JSON.stringify(todos));

      editInput.replaceWith(p);
      editButton.innerText = "Редактировать";
=======
      localStorage.setItem('todos', JSON.stringify(todos));

      editInput.replaceWith(p);
      editButton.innerText = 'Редактировать';
>>>>>>> 8d10e18b2f8811e79bc9f228ed9850e2a2cf13b6
    }
  };

  todo.style = `
    display: flex;
  `;

  todo.append(p);
  todo.prepend(doneButton);
  todo.append(removeButton);
  todo.append(editButton);

  return todo;
}

<<<<<<< HEAD
ul.addEventListener("click", function (event) {
  event.stopPropagation();

  if (event.target.id) {
    event.target.classList.toggle("checked");
  }
});

let removeAllButton = document.createElement("button");
let doneAllButton = document.createElement("button");

removeAllButton.innerHTML = "Удалить все";
doneAllButton.innerHTML = "Все выполнены";
=======
ul.addEventListener('click', function (event) {
  event.stopPropagation();

  if (event.target.id) {
    event.target.classList.toggle('checked');
  }
});

let removeAllButton = document.createElement('button');
let doneAllButton = document.createElement('button');

removeAllButton.innerHTML = 'Удалить все';
doneAllButton.innerHTML = 'Все выполнены';
>>>>>>> 8d10e18b2f8811e79bc9f228ed9850e2a2cf13b6

container.append(removeAllButton, doneAllButton);

removeAllButton.onclick = function (event) {
  event.stopPropagation();

<<<<<<< HEAD
  let checkedItems = document.getElementsByClassName("checked");
=======
  let checkedItems = document.getElementsByClassName('checked');
>>>>>>> 8d10e18b2f8811e79bc9f228ed9850e2a2cf13b6

  let arr = [...checkedItems];

  for (let item of arr) {
    todos = todos.filter((value) => value.id !== item.id);
<<<<<<< HEAD
    localStorage.setItem("todos", JSON.stringify(todos));
=======
    localStorage.setItem('todos', JSON.stringify(todos));
>>>>>>> 8d10e18b2f8811e79bc9f228ed9850e2a2cf13b6

    item.remove();
  }
};

doneAllButton.onclick = function (event) {
  event.stopPropagation();
<<<<<<< HEAD
  let checkedItems = document.getElementsByClassName("checked");
  let arr = [...checkedItems];

  for (let item of arr) {
    item.classList.add("list_item__done");
=======
  let checkedItems = document.getElementsByClassName('checked');
  let arr = [...checkedItems];

  for (let item of arr) {
    item.classList.add('list_item__done');
>>>>>>> 8d10e18b2f8811e79bc9f228ed9850e2a2cf13b6

    todos = todos.map((value) =>
      value.id === item.id ? { ...value, done: true } : value
    );

<<<<<<< HEAD
    localStorage.setItem("todos", JSON.stringify(todos));
  }
};

document.body.addEventListener("click", () => {
  let checkedItems = document.getElementsByClassName("checked");
  let arr = [...checkedItems];

  arr.forEach((item) => {
    item.classList.remove("checked");
  });
});
>>>>>>> 71b538bf6bb1593d0e9c03b03f95b4714e68e961
=======
    localStorage.setItem('todos', JSON.stringify(todos));
  }
};

document.body.addEventListener('click', () => {
  let checkedItems = document.getElementsByClassName('checked');
  let arr = [...checkedItems];

  arr.forEach((item) => {
    item.classList.remove('checked');
  });
});
>>>>>>> 8d10e18b2f8811e79bc9f228ed9850e2a2cf13b6
