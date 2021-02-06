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

let unorderedList = document.getElementById('unordered_list')
let unorderedList1 = document.getElementsByTagName('div')
let unorderedList2 = document.querySelector('.ordered_list')

/**
 * Задание №2
 * Получить кнопку с текстом click. Сделать так, чтобы по нажатию на кнопку вызывался alert('Hello!!!');
 *
 */

document.querySelector('.btn').onclick = () => alert('hello')

/**
 * Задание №3
 * Получить все кнопки из index.html. Изменить у каждой кнопки шрифт, размер и сделать в тексте все буквы большими (click -> CLICK);
 *
 */

let btns = document.querySelectorAll('button')
btns.forEach((item) => {
  item.style = `
  width: 100px;
  text-transform:uppercase;
  font-size:8px;
  `
})

/**
 * Задание №4
 * Получить все элементы li c классом list_item. Изменить стиль(использовать inline стили и добавление класса).
 * Сделать все буквы маленькими у каждого текстого узла li. Добавить каждому li кнопку c текстом ok.
 *
 */
let listItems = document.querySelectorAll('.list_item').forEach((item) => {
  item.style = `
   text-transform:lowercase;
   `
  item.classList.add('green')
  let btn = document.createElement('button')
  btn.innerHTML = 'ok'
  item.append(btn)
})

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

let cont = document.createElement('div')
let input5 = document.createElement('input')
let btn5 = document.createElement('button')
document.body.append(cont)
cont.style = `
  margin-top:10px;
`
cont.append(input5, btn5)
btn5.innerHTML = 'task 5'

function func(str) {
  str = str.trim()
  return str
    .split(' ')
    .map((item, index) => index == 0 ? item[0].toLowerCase() + item.slice(1) : item[0].toUpperCase() + item.slice(1))
    .join('');
}

btn5.onclick = () => {
  console.log(func(input5.value))
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

let input6 = document.createElement('input')
let input7 = document.createElement('input')
let btn67 = document.createElement('button')
input6.style = `
margin-left:10px;
`
btn67.innerHTML = 'task 6'
cont.append(input6, input7, btn67)
btn67.onclick = () => {
  let k = ''
  k = input6.value
  input6.value = input7.value
  input7.value = k
}


/**
 * Задание 7
 * Написать код, который будет каждую минуту будет менять цвет у страницы. Цвет должен генерироваться рандомно.
 *
 */

setInterval(changeBgColor, 60000)

function changeBgColor() {
  let r = Math.floor(Math.random() * (256))
  let g = Math.floor(Math.random() * (256))
  let b = Math.floor(Math.random() * (256))
  color = `rgba(${r},${g},${b},1)`
  document.body.style.backgroundColor = color
}

