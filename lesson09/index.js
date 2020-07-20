let container = document.createElement("div");
let header = document.createElement("h1");

//нужно сделать, чтобы background у body менялся через 5 секунд
document.body.classList = ("body");

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
//дописать onclick, чтобы если меньше чем 2, то ничего не делать и вывести alert c ошибка
//по нажатию на кнопку будет меняться ее цвет
inputButton.onclick = function () {
  if (input.value.length > 2) {
    addToList(input.value);
    input.value = "";
    inputButton.classList = ("btn-active btns");
  } else {
    alert('Ошибка');
  }
};

let ol = document.createElement("ol");

function addToList(text) {
  let li = document.createElement("li");

  let removeButton = document.createElement("button");
  removeButton.append("Remove");
  removeButton.classList = ("btns remove");

  let doneButton = document.createElement("button");
  doneButton.append("Done");
  doneButton.classList = ("btns done");

  let p = document.createElement("p");
  p.append(text);

  //заменить cssText на классы
  p.classList = ("active  p-class");

  let liContainer = document.createElement("div");

  liContainer.classList = ("div-into-li");

  liContainer.append(doneButton, p, removeButton);
  li.append(liContainer);

  ol.append(li);
}

inputContaner.append(input, inputButton);
header.after(inputContaner);
inputContaner.after(ol);
document.body.append(container);