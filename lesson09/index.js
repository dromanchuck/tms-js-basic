let container = document.createElement("div");
let header = document.createElement("h1");

document.body.style.background = "white";
setTimeout(() => document.body.style.background = "red", 5000);
setTimeout(() => document.body.style.background = "white", 10000);
/*
второй вариант
document.body.classList=("body");
setInterval(() => {
  document.body.classList.toggle('body-active');
 }, 5000);
*/
//нужно сделать, чтобы background у body менялся через 5 секунд

header.append("TODO LIST/tms edition");
container.append(header);

const inputContaner = document.createElement("div");

const input = document.createElement("input");
input.placeholder = "Just do it!";
input.type = "text";

const inputButton = document.createElement("button");
inputButton.append("Add");
//дописать onclick, чтобы если меньше чем 2, то ничего не делать и вывести alert c ошибка
//по нажатию на кнопку будет меняться ее цвет
inputButton.onclick = function () {
  if (input.value.length > 2) {
  addToList(input.value);
  input.value = "";
  inputButton.classList= ("button-active");
  } else {
    alert('Error');
  }
};


let ol = document.createElement("ol");

function addToList(text) {
  let li = document.createElement("li");

  let removeButton = document.createElement("button");
  removeButton.append("Remove");
  

  let doneButton = document.createElement("button");
  doneButton.append("Done");
  

  let p = document.createElement("p");
  p.append(text);

  //заменить cssText на классы
  p.classList = ("p-class");


  let liContainer = document.createElement("div");

  liContainer.classList = ("container");
  liContainer.append(doneButton, p, removeButton);
  li.append(liContainer);

  ol.append(li);
}

inputContaner.append(input, inputButton);
header.after(inputContaner);
inputContaner.after(ol);
document.body.append(container);
