/**
 * Домашнее задание к занятию 8
 * Каждому нужно создать новую ветку от ветки master. Название ветки должно содержать имя + первая буква фамилии + /lesson08.
 * Например: dmitryR/lesson08. Выполнение задания производится в свое ветке и в этом файле.
 * После выполнения задания делаете пулл реквест и сообщаете о том, что задание выполнено:)
 * В случае неполодок с гитом, присылаете папку с проектом мне в личные сообщения
 * Код решения должен быть сразу же после самого задания
 */

//Внимание! Верстку для заданий использовать файл index.html

<<<<<<< HEAD
document.body.style.backgroundColor = 'white';

=======
>>>>>>> 1b82d5514e453e30d95353ad23749ef94731177f
/**
 * Задание №1
 * 
 * Получить элемент 
 * <div id="unordered_list" class="ordered_list">
      <ul>
        <li>Fourth</li>
        <li>Fourth</li>
      </ul>
    </div> 
    тремя способами.
 *
 */

<<<<<<< HEAD
document.getElementById('unordered_list'); // first
document.querySelectorAll('div')[1]; // second
document.querySelector('#unordered_list'); //third
document.getElementsByClassName('ordered_list')[1]; //fourth
=======
let div1 = document.getElementById("unordered_list");
let div2 = document.getElementsByClassName("ordered_list")[1];
let div3 = document.querySelector("#unordered_list");
>>>>>>> 1b82d5514e453e30d95353ad23749ef94731177f

/**
 * Задание №2
 * Получить кнопку с текстом click. Сделать так, чтобы по нажатию на кнопку вызывался alert('Hello!!!');
<<<<<<< HEAD
 *
 */

document.querySelectorAll('button')[1].onclick = function() {alert('Hello!!!');}
=======
 */
let buttons = document.getElementsByTagName("button");
let buttonsArr = [...buttons];

let buttonClick = buttonsArr.find((item) => item.innerText === "click");

buttonClick.onclick = function () {
  alert("Hello!!!");
};
>>>>>>> 1b82d5514e453e30d95353ad23749ef94731177f

/**
 * Задание №3
 * Получить все кнопки из index.html. Изменить у каждой кнопки шрифт, размер и сделать в тексте все буквы большими (click -> CLICK);
<<<<<<< HEAD
 *
 */

let arrButton = document.querySelectorAll('button');
arrButton.forEach((item) => {
  item.style.padding = '10px';
  item.style.fontSize = '30px';  
  item.style.textTransform = 'uppercase';
});
=======
 */

for (let button of buttons) {
  button.style = `
    font-family: arial;
    font-size: 20px;
   `;

  button.innerText = button.innerText.toUpperCase();
}
>>>>>>> 1b82d5514e453e30d95353ad23749ef94731177f

/**
 * Задание №4
 * Получить все элементы li c классом list_item. Изменить стиль(использовать inline стили и добавление класса).
 * Сделать все буквы маленькими у каждого текстого узла li. Добавить каждому li кнопку c текстом ok.
<<<<<<< HEAD
 *
 */

let listItem = document.getElementsByClassName('list_item');
let arrListItem = [...listItem];
arrListItem.forEach((item) => {
  item.style.textTransform = 'lowercase';

  let btn = document.createElement('button');
  btn.innerHTML = 'ok';
  btn.style.marginLeft = '10px';
  btn.style.padding = '0px';

  item.append(btn); 
});
  

=======
 */

let liCollection = document.querySelectorAll(".list_item");

for (let li of liCollection) {
  let button = document.createElement("button");
  let text = document.createTextNode("ok");
  button.append(text);
  li.append(button);

  li.style.color = "white";

  li.classList.add("background");
}
>>>>>>> 1b82d5514e453e30d95353ad23749ef94731177f

/**
 * Задание 5
 * Создать элементы input и button добавить их в верстку файла index.html. Сделать так. чтобы по нажатию на
<<<<<<< HEAD
 * кнопку текст преобразовывался в кэмэл кейс.
=======
 * кнопку, текст инпута преобразовывался в кэмэл кейс.
>>>>>>> 1b82d5514e453e30d95353ad23749ef94731177f
 * Например:
 * 'Введенный текст' -> 'введенныйТекст'
 * 'CaMel CaSe -> camelCase
 * front END -> frontEnd
 *
 */

<<<<<<< HEAD
 //createElem

  let div = document.createElement('div');
  let input = document.createElement('input');
  let ul = document.createElement('ul');
  let button = document.createElement('button');

  button.innerHTML = 'нажми';

//addEvent

  button.onclick = () => {
    let li = camelCase(input.value);
    ul.append(li)
  }

//addElem

  document.body.append(div);
  div.append(input, button, ul);

// function
  
  function camelCase(text) {
    let li = document.createElement('li');
    let useFunc = camelFunc(text);
    let textCamelCase = document.createTextNode(useFunc);

    li.append(textCamelCase);

    return li;
  }


//camelCase

  function camelFunc(str) {
    let arr = str.toLowerCase().split(' ');
    let arrFirstElem = arr[0];
    let newArr = arr.filter((item) => item !== arr[0]);
    let arrOtherElem = newArr.map((item) => upperElem(item)).reduce((total,current) => total + current,[]);
    let lastArr = arrFirstElem.concat(arrOtherElem);    
    return lastArr;
    }
    
  function upperElem(str) {
    let arrStr = str.split('');
    arrStr.splice(0,1,arrStr[0].toUpperCase());
    let result = arrStr.join('')
    return result
  }
=======
function capitalize(str) {
  return str
    .split("")
    .map((value, index) =>
      index === 0 ? value.toUpperCase() : value.toLowerCase()
    )
    .join("");
}

function toCamelCase(str) {
  return str
    .toLowerCase()
    .split(" ")
    .reduce((acc, value, index) => {
      return index === 0 ? acc + value : acc + capitalize(value);
    }, "");
}

let input = document.createElement("input");
let fragment = new DocumentFragment();

let button = document.createElement("button");
button.innerText = "To Camel case";

button.onclick = function () {
  let newValue = toCamelCase(input.value);

  input.value = newValue;
};

fragment.append(input, button);
document.body.append(fragment);

>>>>>>> 1b82d5514e453e30d95353ad23749ef94731177f
/**
 * Задание 6
 * Создать элементы 2 input'a и button добавить их в верстку файла index.html. Сделать так,
 * чтобы по нажатию на кнопку введенные тексты менялись местами.
 * Инпут1: 'Hello'
 * Инпут2: 'World'
 * Нажатие на кнопку
 * Инпут1: 'World'
 * Инпут2: 'Hello'
 */

<<<<<<< HEAD
//createElem

let containerForExSix = document.createElement('div');
let firstInput = document.createElement('input');
let secondInput = document.createElement('input');
let buttonWithInput = document.createElement('button');

buttonWithInput.innerHTML = 'change';

//addElem

document.body.append(containerForExSix);
document.body.append(firstInput, buttonWithInput, secondInput);

//addEvent

buttonWithInput.onclick = () => {
  let changeInput = change();
}

//function

function change() {
  let temp;
  temp = firstInput.value;
  firstInput.value = secondInput.value;
  secondInput.value = temp;
}

=======
let input1 = document.createElement("input");
let input2 = document.createElement("input");

let btn = document.createElement("button");
btn.innerText = "Поменять";
btn.onclick = function () {
  let temp = input1.value;
  input1.value = input2.value;
  input2.value = temp;
};

let div = document.createElement("div");
div.append(input1, btn, input2);

document.body.append(div);
>>>>>>> 1b82d5514e453e30d95353ad23749ef94731177f

/**
 * Задание 7
 * Написать код, который будет каждую минуту будет менять цвет у страницы. Цвет должен генерироваться рандомно.
<<<<<<< HEAD
 *
 */

function generateColor() {
  return '#' + Math.floor(Math.random()*16777215).toString(16)
} 

let timerId = setInterval(() => document.body.style.background = generateColor(), 5000); //каждую минуту долго, для наглядности 5с
 
=======
 */

function generateColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

setInterval(() => {
  let color = generateColor();

  document.body.style.background = color;
}, 1000);
>>>>>>> 1b82d5514e453e30d95353ad23749ef94731177f
