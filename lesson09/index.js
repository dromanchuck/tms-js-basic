let container = document.createElement("div");
let header = document.createElement("h1");

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
  addToList(input.value);
  input.value = "";
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

  p.style.cssText = `
    font-size: 20px;
    margin: 0 10px;
  `;

  let liContainer = document.createElement("div");

  liContainer.style.cssText = `
    display: flex;
  `;

  liContainer.append(doneButton, p, removeButton);
  li.append(liContainer);

  ol.append(li);
}

inputContaner.append(input, inputButton);
header.after(inputContaner);
inputContaner.after(ol);
document.body.append(container);
