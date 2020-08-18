import { Local } from "./localStorage.js";
import { input } from "./components/input.js";
import { Button } from "./components/buttons.js";
import { Paragraph } from "./components/paragraph.js";

const container = document.createElement("div");
const header = document.createElement("h1");
document.body.classList.add("container");

let todos = Local.todos || [];

header.append("TODO LIST/tms edition");
container.append(header);

const inputContainer = document.createElement("div");

let inputButton = new Button("Add");

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
/////срабатывает метод onClick
inputButton.onClick(inputButtonOnClick);


let ol = document.createElement("ol");

function addToList(text) {
  let id = "_" + Math.random().toString(36).substr(2, 9);
  let obj = { text, id, done: false };
  todos.push(obj);

  renderListItem(obj);

  Local.todos = todos;
}

inputContainer.append(input, inputButton.getElement());
header.after(inputContainer);
inputContainer.after(ol);
document.body.append(container);

todos.forEach((elem) => {
  renderListItem(elem);
});

function renderListItem(listItemObj) {
  let { id, text, done } = listItemObj;

  let li = document.createElement("li");

  //создать класс Paragraph
  let p = new Paragraph(text);
  
  //использовать класс Button
  //remove button

  let removeButton = new Button('Remove');

  let removeButtonOnClick = function () {
    let filteredTodos = todos.filter((elem) => {
      if (elem.id === id) {
        return false;
      }

      return true;
    });

    todos = [...filteredTodos];
    li.remove();
    Local.todos = todos;
  };
  removeButton.onClick(removeButtonOnClick);

  //использовать класс Button
  ///done button

  let doneButton = new Button ('Done');

  if (done) {
    doneButton.setName("To Do");
    p.addClass("text-done");
  } else {
    doneButton.setName("Done");
  }

  let doneButtonOnClick = (event) => {
    event.stopPropagation();

    if (p.containsClass("text-done")) {
      p.removeClass("text-done");
      doneButton.setName("Done");

      todos.forEach((elem, index, arr) => {
        if (elem.id === id) {
          arr[index].done = false;
        }
      });
    } else {
      p.addClass("text-done");
      doneButton.setName("To Do");

      todos.forEach((elem, index, arr) => {
        if (elem.id === id) {
          arr[index].done = true;
        }
      });
    }

    Local.todos = todos;
  };
  doneButton.onClick(doneButtonOnClick);

  let liContainer = document.createElement("div");
  liContainer.classList.add("wrapper");

  liContainer.append(doneButton.getElement(), p.getElement(), removeButton.getElement());
  li.append(liContainer);
  li.id = id;
  ol.append(li);
}

ol.addEventListener("click", (event) => {
  let path = event.path;

  let li = [...path].find((item) => item.localName === "li");

  if (li) {
    li.classList.toggle("li-active");
  }
});
//переписать используя класс Button
///done ALLbutton
let doneAllButton = new Button("Done All");

let doneAllButtonOnClick = () => {
  let allSelectedItems = document.querySelectorAll(".li-active");
  let selectedItemsArr = [...allSelectedItems];

  selectedItemsArr.forEach((item) => {
    let currentIndex = todos.findIndex((todo) => todo.id === item.id);
    todos[currentIndex].done = !todos[currentIndex].done;

    item.classList.remove("li-active");

    let p = item.querySelector("p");
    p.classList.toggle("text-done");

    let buttons = item.querySelectorAll("button");
    let buttonsArr = [...buttons];

    let doneButton = buttonsArr.find(
      (item) => item.innerText === "Done" || item.innerText === "To Do"
    );

    if (doneButton.innerHTML === "Done") {
      doneButton.innerHTML = "To Do";
    } else {
      doneButton.innerHTML = "Done";
    }
  });

  Local.todos = todos;
};
doneAllButton.onClick(doneAllButtonOnClick);

//переписать используя класс Button
///remove Allbutton
let removeAllButton = new Button ("Remove All");

let removeAllButtonOnClick = () => {
  let allSelectedItems = document.querySelectorAll(".li-active");
  let selectedItemsArr = [...allSelectedItems];

  selectedItemsArr.forEach((item) => {
    let filteredTodos = todos.filter((todo) => todo.id !== item.id);
    todos = filteredTodos;
    item.remove();
  });

  Local.todos = todos;
};
removeAllButton.onClick(removeAllButtonOnClick);

container.append(doneAllButton.getElement());
container.append(removeAllButton.getElement());
