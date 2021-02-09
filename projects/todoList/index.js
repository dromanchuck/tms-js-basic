let title = document.createElement('h1');
let container = document.createElement('div');
let input = document.createElement('input');
let ul = document.createElement('ul');

input.placeholder = 'Сделай же что-нибудь!';

//ADD BUTTON
let addButton = document.createElement('button');
let addButtonText = document.createTextNode('Добавить');
addButton.append(addButtonText);

addButton.onclick = () => {
  let todo = createTodo(input.value);
  input.value = '';

  ul.append(todo);
};

let titleText = document.createTextNode('TODO-LIST');
title.append(titleText);

container.append(title, input, addButton, ul);
document.body.append(container);

function createTodo(text) {
  let todo = document.createElement('li');
  let textNode = document.createTextNode(text);
  let id = ul.children.length;

  todo.setAttribute('id', id);

  let removeButton = document.createElement('button');
  removeButton.innerText = 'Удалить';
  removeButton.classList.add('remove_button');

  removeButton.onclick = function (event) {
    event.stopPropagation();
    todo.remove();
  };

  let doneButton = document.createElement('button');
  doneButton.innerText = 'Выполнено';
  doneButton.classList.add('done_button');

  doneButton.onclick = function (event) {
    event.stopPropagation();
    todo.classList.toggle('list_item__done');
  };

  todo.append(textNode);
  todo.prepend(doneButton);
  todo.append(removeButton);

  return todo;
}

ul.addEventListener('click', function (event) {
  if (event.target.id) {
    event.target.classList.toggle('checked');
  }
});
