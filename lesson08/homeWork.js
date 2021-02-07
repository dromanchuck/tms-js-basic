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

//  let a = document.getElementsByTagName('div');
//  console.log(a);

//  let b = document.getElementById('unordered_list');
//  console.log(b);

//  let c = document.getElementsByClassName('ordered_list');
//  console.log(c);

/**
 * Задание №2 
 * Получить кнопку с текстом click. Сделать так, чтобы по нажатию на кнопку вызывался alert('Hello!!!');
 *
 */
// Добавил к конпке класс .click, иначе сделать не получалось :(

// document.querySelector('.click').onclick = function () {
//   alert ('Hello!');
// }
 

/**
 * Задание №3 
 * Получить все кнопки из index.html. Изменить у каждой кнопки шрифт, размер и сделать в тексте все буквы большими (click -> CLICK);
 *
 */

//  let buttons = document.getElementsByTagName('button');
//  let buttonsArr = [...buttons];

//  buttonsArr.forEach((item) => {
//   item.style.fontSize = '24px',
//   item.style.fontFamily = 'arial',
//   item.style.textTransform = 'uppercase',
//   item.style.backgroundColor = 'lightblue',
//   item.style.boxShadow = '2px 3px 4px black';
//  })


/**
 * Задание №4 
 * Получить все элементы li c классом list_item. Изменить стиль(использовать inline стили и добавление класса).
 * Сделать все буквы маленькими у каждого текстого узла li. Добавить каждому li кнопку c текстом ok.
 *
 */

// let list = document.querySelectorAll('.list_item');
// let listArr = [...list];

// listArr.forEach((item) => {
//   item.style.textTransform = 'lowercase';
//   item.style.fontSize = '24px';
//   item.style.color = 'red';
  
//   let buttonSmall = document.createElement('button');
//   buttonSmall.innerText = 'ok';
//   buttonSmall.style.marginLeft = '5px';
  
//   item.append(buttonSmall);
// })

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

//  Не получается сделать, этот код не работает

// let buttonCamel = document.querySelector('.camel_button');

// buttonCamel.onclick = function () {
//   let inputCamel = document.querySelector('.input_camel').replace(/-([a-z])/g);
//   return inputCamel[1].toUpperCase();
// }



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

// function swap(){
//   let a = document.querySelector('.input_replace').value;
//   document.querySelector('.input_replace').value = document.querySelector('.input_replace2').value;
//   document.querySelector('.input_replace2').value = a;
// }  

/**
 * Задание 7 
 * Написать код, который будет каждую минуту будет менять цвет у страницы. Цвет должен генерироваться рандомно.
 *
 */

// Раскомментировать тег p в index.html ;) 

// function randomColor() {
//     let color = "";
//     for(let i = 0; i < 3; i++) {
//         let sub = Math.floor(Math.random() * 256).toString(16);
//         color += (sub.length == 1 ? "0" + sub : sub);
//     }
//     return "#" + color;
// }

// setInterval(() => {
//   document.body.style.backgroundColor = randomColor();
// }, 1000);

