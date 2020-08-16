import {
 Local
} from './localStorage.js';
import {
 input
} from './components/inputConst.js';
//
import {
 Button
} from './components/buttons.js';

import {
 Paragraph
} from './components/paragraph.js';

//localStorage
let cellStorage = Local.todos || []; // класс local c методом todos(геттер todos получает из storage obj) или пустой массив

document.body.classList.add("container");

//main place to todo
const container = document.createElement("div");
document.body.append(container);
//
const header = document.createElement("h1");
//
container.append(header);
header.append("TODO LIST/tms edition");
const inputContainer = document.createElement("div");
//
header.after(inputContainer);
let inputButton = new Button("Add");
//
inputContainer.append(input, inputButton.getElement());
//interactive part todo
const ol = document.createElement("ol");
//
inputContainer.after(ol);
//функция которая проверяет количество символов в input, и добавляет в список 1 тодушку
let inputButtonOnClick = function () {
 if (input.value.trim().length > 2) {
  addToList(input.value);
  input.value = "";
  inputButton.addClass("button-active");

  setTimeout(() => {
   inputButton.removeClass("button-active");
  }, 1000);
 } else {
  alert("Введите больше чем 2 символа");
 }
};
inputButton.onClick(inputButtonOnClick);

//функция создает объект для storage c done: false, и записывает его в storage
function addToList(text) {
 let id = "_" + Math.random().toString(36).substr(2, 9);

 let obj = {
  text,
  id,
  done: false
 };
 renderListItem(obj);
 cellStorage.push(obj);
 Local.todos = cellStorage;
}
//
function renderListItem(listItemObj) {
 let doneButton = new Button('To Do');
 let removeButton = new Button('Remove');
 let {
  id,
  text,
  done
 } = listItemObj;
 //
 let li = document.createElement("li");
 li.classList.add('list-item');
 //
 //создать класс Paragraph
 let p = new Paragraph(text);
 //
 //revome_section
 let removeButtonOnClick = function () {
  let filteredTodos = cellStorage.filter((elem) => {
   if (elem.id === id) {
    return false;
   }

   return true;
  });

  cellStorage = [...filteredTodos];
  li.remove();
  Local.todos = cellStorage;
 };
 removeButton.onClick(removeButtonOnClick);
 //doneSection

 let doneButtonOnClick = function (event) {
  event.stopPropagation();
  if (!p.containsClass('text-done')) {
   p.addClass("text-done");
   doneButton.setName('To Do');
   cellStorage.forEach((elem, index, arr) => {
    if (elem.id === id) {
     arr[index].done = true;
    }
   });
  } else {
   p.removeClass("text-done");
   doneButton.setName('Done');
   li.classList.remove('li-active');
   cellStorage.forEach((elem, index, arr) => {
    if (elem.id === id) {
     arr[index].done = false;
    }
   });
  }
  Local.todos = cellStorage;
 };
 doneButton.onClick(doneButtonOnClick);


 let liContainer = document.createElement("div");
 liContainer.classList.add("wrapper");
 liContainer.append(doneButton.getElement(), p.getElement(), removeButton.getElement());
 li.append(liContainer);
 li.id = id;
 ol.append(li);

 if (done) {
  doneButton.setName("To Do");
  p.addClass("text-done");
 } else {
  doneButton.setName("Done");
 }
}
cellStorage.forEach((elem) => {
 renderListItem(elem);
});

ol.addEventListener("click", (event) => {
 let path = event.path;

 let li = [...path].find((item) => item.localName === "li");

 if (li) {
  li.classList.toggle("li-active");
 }
});

let doneAllButton = new Button("Done All");

let doneAllButtonOnClick = () => {
 let allSelectedItems = document.querySelectorAll('.list-item'); //обращается ко всем li c классом active
 let selectedItemsArr = [...allSelectedItems]; //создает массив
 selectedItemsArr.forEach(item => {
  let paragraph = item.querySelector('p');
  let buttons = item.querySelectorAll('button');
  let buttonsArr = [...buttons];
  let filteredCell;
  let doneButton = buttonsArr.find(item => item.innerText === "Done" || item.innerText === "To Do");
  if (!item.classList.contains('li-active') || !paragraph.classList.contains('text-done')) {
   item.classList.add('li-active');
   paragraph.classList.add('text-done');
   doneButton.innerHTML = 'To Do';
   filteredCell = cellStorage.map((it) => {
    it.done = true;
   });
  }
 });
 Local.todos = cellStorage;
};

doneAllButton.onEventListener('click', doneAllButtonOnClick);
let removeAllButton = new Button('Remove All Button');
let removeAllButtonOnClick = () => {
 let allSelectedItems = document.querySelectorAll('.list-item');
 let selectedItemsArr = [...allSelectedItems];

 selectedItemsArr.forEach((item) => {
  let filteredTodos = cellStorage.filter((todo) => todo.id !== item.id);
  cellStorage = filteredTodos;
  item.remove();
 });

 Local.todos = cellStorage;
};
removeAllButton.onEventListener('click', removeAllButtonOnClick);

container.append(doneAllButton.getElement(), removeAllButton.getElement());