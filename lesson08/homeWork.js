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
let first = document.getElementById("unordered_list");
console.log(first);
let second = document.getElementsByClassName("ordered_list")[1];
console.log(second);
let third = document.getElementsByTagName("div")[1];
console.log(third);
/**
 * Задание №2
 * Получить кнопку с текстом click. Сделать так, чтобы по нажатию на кнопку вызывался alert('Hello!!!');
 *
 */
let click = document.getElementsByTagName("button")[1];
click.onclick = function () {
  alert('Hello!!!');
}

/**
 * Задание №3
 * Получить все кнопки из index.html. Изменить у каждой кнопки шрифт, размер и сделать в тексте все буквы большими (click -> CLICK);
 *
 */
let buttons = document.getElementsByTagName("button");
for(let button of buttons){
  button.style = `
  color: purple;
  font-family: Raleway;
  padding:  10px;
  text-transform: uppercase;
  `;
} 
/**
 * Задание №4
 * Получить все элементы li c классом list_item. Изменить стиль(использовать inline стили и добавление класса).
 * Сделать все буквы маленькими у каждого текстого узла li. Добавить каждому li кнопку c текстом ok.
 *
 */
let list = document.getElementsByTagName("li");
for(let li of list){
  if(li.matches('li[class$="list_item"]')){
    let listbutton = document.createElement('button');
    li.style = `
    text-transform: lowercase;
    `;
    li.append(listbutton)
    listbutton.innerHTML = 'ok';
    listbutton.style = `
    padding: 0 5px;
    margin: 2px;
    `;
  }
}
/**
 * Задание 5
 * Создать элементы input и button добавить их в верстку файла index.html. Сделать так. чтобы по нажатию на
 * кнопку текст преобразовывался в кэмэл кейс.
 * Например:
 * 'Введенный текст' -> 'введенныйТекст'
 * 'CaMel CaSe -> camelCase
 * front END -> frontEnd
 *
 */
let divs =  document.createElement('div');
let inputs = document.createElement('input');
let inpButt = document.createElement('button');
let uls =  document.createElement('ul');

inpButt.innerHTML = 'Go';

inpButt.onclick = () => {
  let li = camelCase(inputs.value);
  uls.append(li)
}

document.body.append(divs);
divs.append(inputs, inpButt, uls);

function camelCase(text) {
  let li = document.createElement('li');
  let useFunc = CamelCase(text);
  let textCamelCase = document.createTextNode(useFunc);

  li.append(textCamelCase);

  return li;
}

function CamelCase(str){
  let arr = str.toLowerCase().split(' ');
  for(let i = 0; i < arr.length; i++){
    if(arr[i] != arr[0].toLowerCase()){
      arr[i] = arr[i].toUpperCase();
    }
  }
  let newarr = arr.join('');
  return newarr;
}

// до конца не работает ибо я перегрелся

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

let div =  document.createElement('div');
let inputOne = document.createElement('input');
let button = document.createElement('button');
let inputTwo = document.createElement('input');

button.innerHTML = 'Go';

document.body.append(div);
div.append(inputOne, inputTwo, button);

button.onclick = () => {
  let changeInp = change();
}

function change() {
  let temp;
  temp = inputOne.value ;
  inputOne.value = inputTwo.value;
  inputTwo.value = temp;
}
/**
 * Задание 7
 * Написать код, который будет каждую минуту будет менять цвет у страницы. Цвет должен генерироваться рандомно.
 *
 */
function generateColor() {
  return '#' + Math.floor(Math.random()*16777215).toString(16);
}

let interval = setInterval(() => document.body.style.background = generateColor(), 10000);