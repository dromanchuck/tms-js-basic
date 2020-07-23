let container = document.createElement("div");
let header = document.createElement("h1");
document.body.classList.add("container");
let localTodos = localStorage.getItem("todos");
let todos = JSON.parse(localTodos) || [];

setInterval(() => {
  if (document.body.classList.contains("second-container")) {
    document.body.classList.remove("second-container");
    return;
  }

  document.body.classList.add("second-container");
}, 5000);

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
  let li = document.createElement("li");
  let p = document.createElement("p");
  let obj = { text, id, done: false };
  todos.push(obj);

  localStorage.setItem("todos", JSON.stringify(todos));

  let removeButton = document.createElement("button");
  removeButton.append("Remove");

  let doneButton = document.createElement("button");
  doneButton.append("Done");
  //дописать взаимодествие с localStorage
  doneButton.onclick = () => {
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

    console.log(todos);
  };
  //дописать взаимодествие с localStorage
  removeButton.onclick = function () {
    let filteredTodos = todos.filter((elem) => {
      if (elem.id === id) {
        return false;
      }

      return true;
    });

    todos = [...filteredTodos];
    li.remove();
  };

  p.append(text);
  p.className = "todo-text";

  let liContainer = document.createElement("div");

  liContainer.classList.add("wrapper");

  liContainer.append(doneButton, p, removeButton);
  li.append(liContainer);
  li.id = id;
  ol.append(li);
}

inputContaner.append(input, inputButton);
header.after(inputContaner);
inputContaner.after(ol);
document.body.append(container);

todos.forEach((elem) => {
  let li = document.createElement("li");
  let p = document.createElement("p");
  let liContainer = document.createElement("div");

  liContainer.classList.add("wrapper");

  p.append(elem.text);
  p.className = "todo-text";
  liContainer.append(p);
  li.append(liContainer);

  ol.append(li);
});
