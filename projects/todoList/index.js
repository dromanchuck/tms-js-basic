<<<<<<< HEAD
let title = document.createElement("h1");
let container = document.createElement("div");
let input = document.createElement("input");
let ul = document.createElement("ul");
<<<<<<< HEAD
<<<<<<< HEAD

//ADD BUTTON
let addButton = document.createElement("button");
let addButtonText = document.createTextNode("Add");
addButton.append(addButtonText);

addButton.onclick = () => {
  let todo = createTodo(input.value);

  ul.append(todo);
=======
=======
>>>>>>> b4a76fd2b60731247e4897dc8252264a6fc1a918
let todos = JSON.parse(localStorage.getItem("todos")) || [];
=======
let title = document.createElement('h1');
let container = document.createElement('div');
let input = document.createElement('input');
let ul = document.createElement('ul');
let todos = JSON.parse(localStorage.getItem('todos')) || [];
>>>>>>> master

function getID() {
  return '_' + Math.random().toString(36).substr(2, 9);
}

todos.forEach((item) => {
  let todo = createTodo(item.title, item.id, item.done);

  ul.append(todo);
});

<<<<<<< HEAD
<<<<<<< HEAD
//ADD BUTTON
let addButton = document.createElement("button");
let addButtonText = document.createTextNode("Add");
=======
input.placeholder = "Сделай же что-нибудь!";
=======
input.placeholder = 'Сделай же что-нибудь!';
>>>>>>> master

input.addEventListener('keydown', (event) => {
  if (event.target.value.length > 1) {
    addButton.classList.remove('hide_add_button');
  } else {
    addButton.classList.add('hide_add_button');
  }
});

//ADD BUTTON
<<<<<<< HEAD
let addButton = document.createElement("button");
let addButtonText = document.createTextNode("Добавить");
>>>>>>> 1b82d5514e453e30d95353ad23749ef94731177f
=======
let addButton = document.createElement('button');
let addButtonText = document.createTextNode('Добавить');
>>>>>>> master
addButton.append(addButtonText);

addButton.classList.add('hide_add_button');

addButton.onclick = () => {
<<<<<<< HEAD
  let todo = createTodo(input.value);
<<<<<<< HEAD
=======
  input.value = "";
>>>>>>> 1b82d5514e453e30d95353ad23749ef94731177f
=======
  if (input.value) {
    let id = getID();
    let todo = createTodo(input.value, id, false);
>>>>>>> master

    ul.append(todo);
    todos.push({ title: input.value, done: false, id });
    localStorage.setItem('todos', JSON.stringify(todos));

    input.value = '';
  } else {
    alert('Ну введи уже что-нибудь!');
  }
<<<<<<< HEAD
>>>>>>> master
=======
>>>>>>> b4a76fd2b60731247e4897dc8252264a6fc1a918
};

let titleText = document.createTextNode('TODO-LIST');
title.append(titleText);

container.append(title, input, addButton, ul);
document.body.append(container);

<<<<<<< HEAD
<<<<<<< HEAD
function createTodo(text) {
=======
function createTodo(text, id, done = false) {
<<<<<<< HEAD
>>>>>>> b4a76fd2b60731247e4897dc8252264a6fc1a918
  let todo = document.createElement("li");
  let p = document.createElement("p");
  let textNode = document.createTextNode(text);
<<<<<<< HEAD
<<<<<<< HEAD

  todo.append(textNode);

  return todo;
}
=======
<<<<<<< HEAD
function createTodo(text, id, done = false) {
  let todo = document.createElement("li");
  let p = document.createElement("p");
  let textNode = document.createTextNode(text);
=======
  let id = ul.children.length;
=======
>>>>>>> b4a76fd2b60731247e4897dc8252264a6fc1a918
  let editInput = document.createElement("input");
>>>>>>> master
=======
  let todo = document.createElement('li');
  let p = document.createElement('p');
  let textNode = document.createTextNode(text);
  let editInput = document.createElement('input');
>>>>>>> master

  p.append(textNode);
  todo.setAttribute('id', id);
  todo.classList.add('list_item');

  let removeButton = document.createElement('button');
  removeButton.innerText = 'Удалить';
  removeButton.classList.add('remove_button');

  if (done) {
    todo.classList.add('list_item__done');
  }

  removeButton.onclick = function (event) {
    event.stopPropagation();
    todo.remove();

    todos = todos.filter((item) => item.id !== id);

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
      let inputText = editInput.value;
      p.innerText = inputText;

      todos = todos.map((item) =>
        item.id === id ? { ...item, title: inputText } : item
      );

      localStorage.setItem('todos', JSON.stringify(todos));

      editInput.replaceWith(p);
      editButton.innerText = 'Редактировать';
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

ul.addEventListener('click', function (event) {
  event.stopPropagation();

  if (event.target.id) {
    event.target.classList.toggle('checked');
  }
});
<<<<<<< HEAD
>>>>>>> 1b82d5514e453e30d95353ad23749ef94731177f
=======

let removeAllButton = document.createElement('button');
let doneAllButton = document.createElement('button');

removeAllButton.innerHTML = 'Удалить все';
doneAllButton.innerHTML = 'Все выполнены';

container.append(removeAllButton, doneAllButton);

removeAllButton.onclick = function (event) {
  event.stopPropagation();

  let checkedItems = document.getElementsByClassName('checked');

  let arr = [...checkedItems];

  for (let item of arr) {
    todos = todos.filter((value) => value.id !== item.id);
    localStorage.setItem('todos', JSON.stringify(todos));

    item.remove();
  }
};

doneAllButton.onclick = function (event) {
  event.stopPropagation();
  let checkedItems = document.getElementsByClassName('checked');
  let arr = [...checkedItems];

  for (let item of arr) {
    item.classList.add('list_item__done');

    todos = todos.map((value) =>
      value.id === item.id ? { ...value, done: true } : value
    );

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
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> master
=======
>>>>>>> b4a76fd2b60731247e4897dc8252264a6fc1a918
>>>>>>> master
