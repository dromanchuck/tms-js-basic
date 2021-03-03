/**
 * Домашнее задание к занятию 8
 * Каждому нужно создать новую ветку от ветки master. Название ветки должно содержать имя + первая буква фамилии + /lesson08.
 * Например: dmitryR/lesson08. Выполнение задания производится в свое ветке и в этом файле.
 * После выполнения задания делаете пулл реквест и сообщаете о том, что задание выполнено:)
 * В случае неполодок с гитом, присылаете папку с проектом мне в личные сообщения
 * Код решения должен быть сразу же после самого задания
 */

//Внимание! Верстку для заданий использовать файл index.html

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
<<<<<<< HEAD
/**
 * Задание №2
 * Получить кнопку с текстом click. Сделать так, чтобы по нажатию на кнопку вызывался alert('Hello!!!');
 *
 */
=======
=======
>>>>>>> 614ab57e03302330f2c1385e0fac24657c2d990c
let div1 = document.getElementById("unordered_list");
let div2 = document.getElementsByClassName("ordered_list")[1];
let div3 = document.querySelector("#unordered_list");

/**
 * Задание №2
 * Получить кнопку с текстом click. Сделать так, чтобы по нажатию на кнопку вызывался alert('Hello!!!');
 */
let buttons = document.getElementsByTagName("button");
let buttonsArr = [...buttons];

let buttonClick = buttonsArr.find((item) => item.innerText === "click");

buttonClick.onclick = function () {
  alert("Hello!!!");
};
<<<<<<< HEAD
>>>>>>> master

/**
 * Задание №3
 * Получить все кнопки из index.html. Изменить у каждой кнопки шрифт, размер и сделать в тексте все буквы большими (click -> CLICK);
<<<<<<< HEAD
=======
=======
/**
 * Задание №2
 * Получить кнопку с текстом click. Сделать так, чтобы по нажатию на кнопку вызывался alert('Hello!!!');
>>>>>>> 614ab57e03302330f2c1385e0fac24657c2d990c
 *
 */
>>>>>>> 6783e2f910bce3cbdfcfc3f03a8cc1ce5c390452

<<<<<<< HEAD
=======
=======
/**
 * Задание №3
 * Получить все кнопки из index.html. Изменить у каждой кнопки шрифт, размер и сделать в тексте все буквы большими (click -> CLICK);
<<<<<<< HEAD
>>>>>>> 614ab57e03302330f2c1385e0fac24657c2d990c
 */

for (let button of buttons) {
  button.style = `
    font-family: arial;
    font-size: 20px;
   `;

  button.innerText = button.innerText.toUpperCase();
}

<<<<<<< HEAD
>>>>>>> master
/**
 * Задание №4
 * Получить все элементы li c классом list_item. Изменить стиль(использовать inline стили и добавление класса).
 * Сделать все буквы маленькими у каждого текстого узла li. Добавить каждому li кнопку c текстом ok.
<<<<<<< HEAD
=======
=======
>>>>>>> 614ab57e03302330f2c1385e0fac24657c2d990c
 *
 */

>>>>>>> 6783e2f910bce3cbdfcfc3f03a8cc1ce5c390452
/**
<<<<<<< HEAD
 * Задание 5
 * Создать элементы input и button добавить их в верстку файла index.html. Сделать так. чтобы по нажатию на
 * кнопку текст преобразовывался в кэмэл кейс.
=======
=======
 * Задание №4
 * Получить все элементы li c классом list_item. Изменить стиль(использовать inline стили и добавление класса).
 * Сделать все буквы маленькими у каждого текстого узла li. Добавить каждому li кнопку c текстом ok.
<<<<<<< HEAD
>>>>>>> 614ab57e03302330f2c1385e0fac24657c2d990c
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

/**
 * Задание 5
 * Создать элементы input и button добавить их в верстку файла index.html. Сделать так. чтобы по нажатию на
 * кнопку, текст инпута преобразовывался в кэмэл кейс.
<<<<<<< HEAD
>>>>>>> master
=======
=======
 *
 */

/**
 * Задание 5
 * Создать элементы input и button добавить их в верстку файла index.html. Сделать так. чтобы по нажатию на
 * кнопку текст преобразовывался в кэмэл кейс.
>>>>>>> 6783e2f910bce3cbdfcfc3f03a8cc1ce5c390452
>>>>>>> 614ab57e03302330f2c1385e0fac24657c2d990c
 * Например:
 * 'Введенный текст' -> 'введенныйТекст'
 * 'CaMel CaSe -> camelCase
 * front END -> frontEnd
 *
 */

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 614ab57e03302330f2c1385e0fac24657c2d990c
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

<<<<<<< HEAD
>>>>>>> master
=======
=======
>>>>>>> 6783e2f910bce3cbdfcfc3f03a8cc1ce5c390452
>>>>>>> 614ab57e03302330f2c1385e0fac24657c2d990c
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
<<<<<<< HEAD
/**
 * Задание 7
 * Написать код, который будет каждую минуту будет менять цвет у страницы. Цвет должен генерироваться рандомно.
 *
 */
=======
=======
>>>>>>> 614ab57e03302330f2c1385e0fac24657c2d990c
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

/**
 * Задание 7
 * Написать код, который будет каждую минуту будет менять цвет у страницы. Цвет должен генерироваться рандомно.
 */

function generateColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

setInterval(() => {
  let color = generateColor();

  document.body.style.background = color;
}, 1000);
<<<<<<< HEAD
>>>>>>> master
=======
=======
/**
 * Задание 7
 * Написать код, который будет каждую минуту будет менять цвет у страницы. Цвет должен генерироваться рандомно.
 *
 */
>>>>>>> 6783e2f910bce3cbdfcfc3f03a8cc1ce5c390452
>>>>>>> 614ab57e03302330f2c1385e0fac24657c2d990c
