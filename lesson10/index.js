let container = document.createElement("div");
let header = document.createElement("h1");
let todo = JSON.parse(localStorage.getItem("todos")) || [];

document.body.classList.add = ("body");

/* первый способ
setInterval(() => {
  document.body.classList.toggle('body-active');
 }, 5000); 
*/

document.body.id = "body";
setInterval(function() {
  document.getElementById("body").style.backgroundColor = '#'+((1<<24)*Math.random()|0).toString(16)
}, 5000);

/* третий способ
setInterval(() => {
 setTimeout(() => {
  document.body.classList.add("body-active");
 }, 5000); 
 setTimeout(() => {
   document.body.classList.remove("body-active");
 }, 10000); 
}, 10000);
*/
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
    inputButton.setAttribute('class','btn-active');

    setTimeout(() => {
      inputButton.classList.remove('btn-active');
    }, 1000);
  } else {
    alert('Ошибка');
  }
};

let ol = document.createElement("ol");

function addToList(text) {
  
  let id = '_' + Math.random().toString(36).substr(2, 9);
  let obj = {text, id, done: false};
  
  todo.push(obj);

  localStorage.setItem('todos', JSON.stringify(todo)); 
  
  renderListItem(obj);
}

inputContaner.append(input, inputButton);
header.after(inputContaner);
inputContaner.after(ol);
document.body.append(container);

todo.forEach((el,i,arr) => {
  renderListItem(el);
});

function renderListItem(listItemObj) {
  let {id, text ,done } =listItemObj;

  let li = document.createElement("li"); 

  let p = document.createElement("p");
  p.append(text);

  
  let removeButton = document.createElement("button");
  removeButton.append("Remove");
  removeButton.classList.add("btns");
  removeButton.classList.add("remove");
                 /*Кнопка Remove*/
  removeButton.onclick = () => {
    let filteredTodo = todo.filter((el,i,arr) => {
      if (el.id === id){
        return false;
      }
      return true;
    });
    todo = [...filteredTodo];
    li.remove();
    localStorage.setItem('todos', JSON.stringify(todo));
  };
  
  let doneButton = document.createElement("button");
  
  if(done) {
    doneButton.append("To do");
    p.classList.add("text-done");
  } else {
    doneButton.append("Done");
  };

  doneButton.classList.add("btns");
  doneButton.classList.add("done");
                  /*Кнопка Done*/
  doneButton.onclick = (event) => {
    event.stopPropagation();


    if(p.classList.contains("text-done")){                       /* p.matches(".text-done") */
      p.classList.remove("text-done");
      doneButton.innerHTML = "Done";

      todo.forEach((el,i,arr) => {
        if(el.id === id){
          arr[i] = {...el, done: false};                          /*  arr[i].done = true; */
        }
      }); 
    }
    else  {
      p.classList.add("text-done");
      doneButton.innerHTML = "To Do";
      todo.forEach((el,i,arr) => {
        if(el.id === id){
          arr[i] = {...el, done: true};                          /*  arr[i].done = true; */
        }
      }); 
    }

    localStorage.setItem('todos', JSON.stringify(todo));
    console.log(todo);
  };
  let liContainer = document.createElement("div");
  liContainer.classList.add('div-into-li');

  liContainer.append(doneButton,p,removeButton);
  li.append(liContainer);
  li.id = id;
  ol.append(li);

  localStorage.setItem("todos", JSON.stringify(todo));
};

ol.addEventListener("click", (event) => {
  let path = event.path;
  let li = [...path].find((item) => item.localName === "li");

  if (li) {
    li.classList.toggle('li-active');
  }
});

let doneButtonAll = document.createElement('button');
doneButtonAll.append("Done All");

doneButtonAll.addEventListener('click',() => {
  let allSelectedItems = document.querySelectorAll(".li-active");
  let selectedItemsArr = [...allSelectedItems];

  selectedItemsArr.forEach((item) => {
    let currentIndex = todo.findIndex((oneTodo) => oneTodo.id === item.id);
    todo[currentIndex].done = !todo[currentIndex].done;

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

  localStorage.setItem("todos", JSON.stringify(todo));
});

let removeAllButton = document.createElement("button");
removeAllButton.append("Remove All");

removeAllButton.addEventListener("click",() => {
  let allSelectedItems = document.querySelectorAll(".li-active");
  let selectedItemsArr = [...allSelectedItems];

  selectedItemsArr.forEach((item) => {
    let filteredTodo = todo.filter((oneTodo) => oneTodo.id !== item.id);
    todo = filteredTodo;
    item.remove();
  });

  localStorage.setItem("todos", JSON.stringify(todo));
});

container.append(doneButtonAll);
container.append(removeAllButton);