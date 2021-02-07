/**
 * Домашнее задание к занятию 8
 * Каждому нужно создать новую ветку от ветки master. Название ветки должно содержать имя + первая буква фамилии + /lesson08.
 * Например: dmitryR/lesson08. Выполнение задания производится в свое ветке и в этом файле.
 * После выполнения задания делаете пулл реквест и сообщаете о том, что задание выполнено:)
 * В случае неполодок с гитом, присылаете папку с проектом мне в личные сообщения
 * Код решения должен быть сразу же после самого задания
 */

//Внимание! Верстку для заданий использовать файл index.html

document.body.style.backgroundColor = 'white';

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

document.getElementById('unordered_list'); // first
document.querySelectorAll('div')[1]; // second
document.querySelector('#unordered_list'); //third
document.getElementsByClassName('ordered_list')[1]; //fourth

/**
 * Задание №2
 * Получить кнопку с текстом click. Сделать так, чтобы по нажатию на кнопку вызывался alert('Hello!!!');
 *
 */

document.querySelectorAll('button')[1].onclick = function() {alert('Hello!!!');}

/**
 * Задание №3
 * Получить все кнопки из index.html. Изменить у каждой кнопки шрифт, размер и сделать в тексте все буквы большими (click -> CLICK);
 *
 */

let arrButton = document.querySelectorAll('button');
arrButton.forEach((item) => {
  item.style.padding = '10px';
  item.style.fontSize = '30px';  
  item.style.textTransform = 'uppercase';
});

/**
 * Задание №4
 * Получить все элементы li c классом list_item. Изменить стиль(использовать inline стили и добавление класса).
 * Сделать все буквы маленькими у каждого текстого узла li. Добавить каждому li кнопку c текстом ok.
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


/**
 * Задание 7
 * Написать код, который будет каждую минуту будет менять цвет у страницы. Цвет должен генерироваться рандомно.
 *
 */

function generateColor() {
  return '#' + Math.floor(Math.random()*16777215).toString(16)
} 

let timerId = setInterval(() => document.body.style.background = generateColor(), 5000); //каждую минуту долго, для наглядности 5с
 
