let container = document.createElement("div");
let header = document.createElement("h1");
document.body.classList.add("container");
let localTodos = localStorage.getItem("todos");
let todos = JSON.parse(localTodos) || [];

// setInterval(() => {
//   if (document.body.classList.contains("second-container")) {
//     document.body.classList.remove("second-container");
//     return;
//   }

//   document.body.classList.add("second-container");
// }, 5000);

header.append("TODO LIST/tms edition");
container.append(header);

const inputContaner = document.createElement("div");

const input = document.createElement("input");
input.placeholder = "Just do it!";
input.type = "text";

const inputButton = document.createElement("button");
inputButton.append("Add");

inputButton.onclick = function () {
  if (input.value.trim().length > 2) {
    addToList(input.value);
    input.value = "";
    inputButton.setAttribute("class", "button-active");

    setTimeout(() => {
      inputButton.classList.remove("button-active");
    }, 1000);
  } else {
    alert("Введите больше чем 2 символа");
  }
};

let ol = document.createElement("ol");

function addToList(text) {
  let id = "_" + Math.random().toString(36).substr(2, 9);
  let obj = { text, id, done: false };
  todos.push(obj);

  localStorage.setItem("todos", JSON.stringify(todos));

  renderListItem(obj);
}

inputContaner.append(input, inputButton);
header.after(inputContaner);
inputContaner.after(ol);
document.body.append(container);

todos.forEach((elem) => {
  renderListItem(elem);
});

function renderListItem(listItemObj) {
  let { id, text, done } = listItemObj;

  let li = document.createElement("li");

  let p = document.createElement("p");
  p.append(text);
  p.className = "todo-text";

  let removeButton = document.createElement("button");
  removeButton.append("Remove");

  removeButton.onclick = function () {
    let filteredTodos = todos.filter((elem) => {
      if (elem.id === id) {
        return false;
      }

      return true;
    });

    todos = [...filteredTodos];
    li.remove();
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  let doneButton = document.createElement("button");

  if (done) {
    doneButton.append("To Do");
    p.classList.add("text-done");
  } else {
    doneButton.append("Done");
  }

  doneButton.onclick = (event) => {
    event.stopPropagation();

    if (p.matches(".text-done")) {
      p.classList.remove("text-done");
      doneButton.innerHTML = "Done";

      todos.forEach((elem, index, arr) => {
        if (elem.id === id) {
          arr[index].done = false;
        }
      });
    } else {
      p.classList.add("text-done");
      doneButton.innerHTML = "To Do";

      todos.forEach((elem, index, arr) => {
        if (elem.id === id) {
          arr[index].done = true;
        }
      });
    }

    localStorage.setItem("todos", JSON.stringify(todos));
    console.log(todos);
  };

  let liContainer = document.createElement("div");
  liContainer.classList.add("wrapper");

  liContainer.append(doneButton, p, removeButton);
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

let doneAllButton = document.createElement("button");
doneAllButton.append("Done All");

doneAllButton.addEventListener("click", () => {
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

    let doneButton = buttonsArr.find((item) => item.innerText === "Done" || item.innerText === "To Do");

    if (doneButton.innerHTML === "Done") {
      doneButton.innerHTML = "To Do";
    } else {
      doneButton.innerHTML = "Done";
    }
  });

  localStorage.setItem("todos", JSON.stringify(todos));
});

let removeAllButton = document.createElement("button");
removeAllButton.append("Remove All");

removeAllButton.addEventListener("click", () => {
  let allSelectedItems = document.querySelectorAll(".li-active");
  let selectedItemsArr = [...allSelectedItems];

  selectedItemsArr.forEach((item) => {
    let filteredTodos = todos.filter((todo) => todo.id !== item.id);
    todos = filteredTodos;
    item.remove();
  });

  localStorage.setItem("todos", JSON.stringify(todos));
});

container.append(doneAllButton);
container.append(removeAllButton);
