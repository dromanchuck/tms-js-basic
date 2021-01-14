import { Local } from "./localStorage.js";

import { Input } from "./components/input.js";
import { Button } from "./components/buttons.js";
import { Paragraph } from "./components/paragraph.js";
import { Container } from "./components/container.js";
import { Header } from "./components/header.js";
import { quoteContainer } from "./components/quote.js";

import { QuoteService } from "./services/QuoteService.js";

let header = new Header("TODO LIST/tms edition");
document.body.classList.add("container");

console.log(QuoteService.getQuote());

const DONE = "Done";
const TODO = "To Do";
const REMOVE = "Remove";
const REMOVE_ALL = "Remove all";
const DONE_ALL = "Done all";

let todos = Local.todos || [];

// //////////////////////////////////////
let inputButton = new Button("Add");
let input = new Input("Just do it!");

let inputButtonOnClick = function () {
  let value = input.getValue();

  if (value.trim().length > 2) {
    addToList(value);
    input.setValue("");
    inputButton.addClass("button-active");

    setTimeout(() => {
      inputButton.removeClass("button-active");
    }, 1000);
  } else {
    alert("Введите больше чем 2 символа");
  }
};

inputButton.onClick(inputButtonOnClick);
let inputContainer = new Container(input, inputButton);
///////////////////////////////////////////

let ol = new Container();

function addToList(text) {
  let id = "_" + Math.random().toString(36).substr(2, 9);
  let obj = { text, id, done: false };
  todos.push(obj);

  Local.todos = todos;

  renderListItem(obj);
}

todos.forEach((elem) => {
  renderListItem(elem);
});

function renderListItem(listItemObj) {
  let { id, text, done } = listItemObj;

  let li = document.createElement("li");

  let p = new Paragraph(text);
  p.addClass("todo-text");

  let removeButton = new Button(REMOVE);

  removeButton.onClick(() => {
    let filteredTodos = todos.filter((elem) => {
      if (elem.id === id) {
        return false;
      }

      return true;
    });

    todos = [...filteredTodos];
    li.remove();
    Local.todos = todos;
  });

  let doneButton = new Button(TODO);

  if (done) {
    doneButton.setName(TODO);
    p.addClass("text-done");
  } else {
    doneButton.setName(DONE);
  }

  doneButton.onClick((event) => {
    event.stopPropagation();

    if (p.containsClass("text-done")) {
      p.removeClass("text-done");
      doneButton.setName(DONE);

      todos.forEach((elem, index, arr) => {
        if (elem.id === id) {
          arr[index].done = false;
        }
      });
    } else {
      p.addClass("text-done");
      doneButton.setName(TODO);

      todos.forEach((elem, index, arr) => {
        if (elem.id === id) {
          arr[index].done = true;
        }
      });
    }

    Local.todos = todos;
    console.log(todos);
  });

  // let liContainer = new Container();
  // liContainer.addClass("wrapper");

  // liContainer.addChild(doneButton, p, removeButton);

  // li.append(liContainer);
  // li.id = id;
  // ol.addChild(li);
}

// ol.addEventListener("click", (event) => {
//   let path = event.path;

//   let li = [...path].find((item) => item.localName === "li");

//   if (li) {
//     li.classList.toggle("li-active");
//   }
// });

let doneAllButton = new Button(DONE_ALL);

doneAllButton.onClick(() => {
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
      (item) => item.innerText === DONE || item.innerText === TODO
    );

    if (doneButton.innerHTML === DONE) {
      doneButton.innerHTML = TODO;
    } else {
      doneButton.innerHTML = DONE;
    }
  });

  Local.todos = todos;
});

let removeAllButton = new Button(REMOVE_ALL);

removeAllButton.onClick(() => {
  let allSelectedItems = document.querySelectorAll(".li-active");
  let selectedItemsArr = [...allSelectedItems];

  selectedItemsArr.forEach((item) => {
    let filteredTodos = todos.filter((todo) => todo.id !== item.id);
    todos = filteredTodos;
    item.remove();
  });

  Local.todos = todos;
});

let mainContainer = new Container(
  header,
  quoteContainer,
  inputContainer,
  ol,
  doneAllButton,
  removeAllButton
);

document.body.append(mainContainer.getElement());
