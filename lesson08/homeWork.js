/**
 * Домашнее задание к занятию 8
 * Каждому нужно создать новую ветку от ветки master. Название ветки должно содержать имя + первая буква фамилии + /lesson08.
 * Например: dmitryR/lesson08. Выполнение задания производится в свое ветке и в этом файле.
 * После выполнения задания делаете пулл реквест и сообщаете о том, что задание выполнено:)
 * В случае неполодок с гитом, присылаете папку с проектом мне в личные сообщения
 * Код решения должен быть сразу же после самого задания
 */

//Внимание! Верстку для заданий использовать файл index.html

let br = document.createElement('br');

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

let task1_1 = document.getElementById('unordered_list');
let task1_2 = document.querySelector('#unordered_list');
let task1_3 = document.querySelectorAll('div')[1];

/**
 * Задание №2
 * Получить кнопку с текстом click. Сделать так, чтобы по нажатию на кнопку вызывался alert('Hello!!!');
 *
 */

let task2_1 = document.querySelectorAll('button');
let task2_2 = [...task2_1].find((item) => item.textContent === 'click');
task2_2.addEventListener('click', () => alert('Hello!!!'));

/**
 * Задание №3
 * Получить все кнопки из index.html. Изменить у каждой кнопки шрифт, размер и сделать в тексте все буквы большими (click -> CLICK);
 *
 */

let task3_1 = document.querySelectorAll('button');
task3_1.forEach(
  (val) =>
    (val.style = `
font-family: Arial;
font-size: 20px;
text-transform: uppercase;
`)
);

/**
 * Задание №4
 * Получить все элементы li c классом list_item. Изменить стиль(использовать inline стили и добавление класса).
 * Сделать все буквы маленькими у каждого текстого узла li. Добавить каждому li кнопку c текстом ok.
 *
 */

// Не совсем понял про добавление класса, нужно просто установить класс и отдельно все элементы его содержащие еще простилизовать как-то? Если так то сделал.

let task4_1 = document.querySelectorAll('li.list_item');
task4_1.forEach((elem) => {
  elem.setAttribute('style', 'color: red');
  elem.setAttribute('class', 'list_item list-item_wide');
  elem.style = `text-transform: lowercase`;
  elem.after(document.createElement('button'));
});

let task4_2 = document.querySelectorAll('.list-item_wide');
task4_2.forEach((item) => (item.style.letterSpacing = '3px'));

let task4_3 = document.querySelectorAll('.list-item_wide + button');
task4_3.forEach((item) => (item.innerText = 'ok'));

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

// Надеюсь, что это именно во вновь созданном input вводимый текст должен преобразовываться в camelCase

let task5_1 = document.createElement('input');
let task5_2 = document.createElement('button');

task5_2.innerText = 'toCamelCase';

document.body.append(task5_1);
document.body.append(task5_2);

task5_2.addEventListener(
  'click',
  () =>
    (task5_1.value = task5_1.value
      .split(' ')
      .map((item, index) =>
        index
          ? `${item[0].toUpperCase()}${item.slice(1).toLowerCase()}`
          : item.toLowerCase()
      )
      .join(''))
);

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

let task6_1 = document.createElement('input');
let task6_2 = document.createElement('button');
let task6_3 = document.createElement('input');

task6_2.innerText = 'swap';

document.body.append(br);
document.body.append(task6_1);
document.body.append(task6_2);
document.body.append(task6_3);

task6_2.addEventListener('click', () => {
  let temp = task6_1.value;
  task6_1.value = task6_3.value;
  task6_3.value = temp;
});

/**
 * Задание 7
 * Написать код, который будет каждую минуту будет менять цвет у страницы. Цвет должен генерироваться рандомно.
 *
 */

function task7() {
  let r = Math.ceil(Math.random() * 255);
  let g = Math.ceil(Math.random() * 255);
  let b = Math.ceil(Math.random() * 255);

  document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

setInterval(task7, 1e3);
