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
document.body.children[2];
document.getElementById('unordered_list');
document.body.querySelectorAll('.ordered_list')[1];

/**
 * Задание №2
 * Получить кнопку с текстом click. Сделать так, чтобы по нажатию на кнопку вызывался alert('Hello!!!');
 *
 */

let button = document.body.getElementsByTagName('button')[1];
button.onclick = function() {
    alert('Hello!!!');
};

/**
 * Задание №3
 * Получить все кнопки из index.html. Изменить у каждой кнопки шрифт, размер и сделать в тексте все буквы большими (click -> CLICK);
 *
 */
let buttons = document.body.getElementsByTagName('button');

for (let button of buttons) {
    button.style.width = '140px';
    button.style.fontFamily = 'Times New Roman';
    button.style.fontSize = "25px";
    button.style.textTransform = "uppercase";
}
/**
 * Задание №4
 * Получить все элементы li c классом list_item. Изменить стиль(использовать inline стили и добавление класса).
 * Сделать все буквы маленькими у каждого текстого узла li. Добавить каждому li кнопку c текстом ok.
 *
 */

let listItems = document.querySelectorAll('.list_item');
for (let li of listItems) {
    li.classList.add('ordered_list_item');
    li.style.textTransform = 'lowercase';
    li.style.fontSize = '25px';
    li.append(document.createElement('button'));

}

let liButton = document.querySelectorAll('.ordered_list_item > button');
for (let btn of liButton) {
    btn.innerText = 'ok';
    btn.style.marginLeft = "10px";
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
let input = document.createElement('input');
let btn = document.createElement('button');
btn.innerText = "Преобразовать в кэмэл кейс";

document.body.append(input);
document.body.append(btn);

btn.onсlick = function() {
    input.value = input.value.toLowerCase().split(' ').map((el, index) => index == 0 ? el : el[0].toUpperCase() + el.slice(1)).join('')
}

// не работает :( почему?


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

let input1 = document.createElement('input');
let input2 = document.createElement('input');
let btn1 = document.createElement('button');
btn1.innerText = "Поменять местами";

document.body.append(input1);
document.body.append(input2);
document.body.append(btn1);

btn1.onclick = function() {
    let temp = input2.value;
    input2.value = input1.value;
    input1.value = temp;
}

/**
 * Задание 7
 * Написать код, который будет каждую минуту будет менять цвет у страницы. Цвет должен генерироваться рандомно.
 *
 */

function getRandomColor() {
    let color = '#' + (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase();
    document.body.style.background = color;
}

setInterval(() => getRandomColor(), 60000);