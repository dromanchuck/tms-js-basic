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

const divId = document.getElementById('unordered_list')
const divClass = document.getElementsByClassName('ordered_list')
const div = document.querySelector('.ordered_list')

/**
 * Задание №2
 * Получить кнопку с текстом click. Сделать так, чтобы по нажатию на кнопку вызывался alert('Hello!!!');
 *
 */

const clickButton = document.querySelector('.btn')

clickButton.onclick = () => {
  alert('Hello!!!')
}

/**
 * Задание №3
 * Получить все кнопки из index.html. Изменить у каждой кнопки шрифт, размер и сделать в тексте все буквы большими (click -> CLICK);
 *
 */

const allButtons = document.querySelectorAll('button')

allButtons.forEach((elem) => {
  elem.style = `
  font-family: Lucida Console;
  font-size: 30px;
  text-transform: uppercase;
  `
})

/**
 * Задание №4
 * Получить все элементы li c классом list_item. Изменить стиль(использовать inline стили и добавление класса).
 * Сделать все буквы маленькими у каждого текстого узла li. Добавить каждому li кнопку c текстом ok.
 *
 */

const allLi = document.querySelectorAll('.list_item')

allLi.forEach((elem) => {
  elem.style = `
  text-transform: lowercase;
  `
  let button = document.createElement('button')
  button.innerHTML = 'ok'
  elem.append(button)

  button.style = `
  margin-left: 20px;
  `
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

const inputAppend = document.createElement('input')
const buttonAppend = document.createElement('button')
const divAppend = document.createElement('div')

document.body.append(divAppend)

divAppend.style = `
margin: 30px;
`

divAppend.append(inputAppend)
divAppend.append(buttonAppend)

buttonAppend.innerHTML = 'task 5'

buttonAppend.style = `
margin-left: 20px;
`

const camelCase = (input) => {
  let str = input.trim()
  return str

    .split(' ')
    .map((item, index) =>
      index == 0
        ? item[0].toLowerCase() + item.slice(1)
        : item[0].toUpperCase() + item.slice(1)
    )
    .join('')
}

buttonAppend.onclick = () => {
  alert(camelCase(inputAppend.value))
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

const input1 = document.createElement('input')
const input2 = document.createElement('input')
const button1 = document.createElement('button')
const div1 = document.createElement('div')

document.body.append(div1)
div1.append(input1)
div1.append(input2)
div1.append(button1)

button1.innerHTML = 'task 6'

button1.onclick = () => {
  let temp = input1.value
  input1.value = input2.value
  input2.value = temp
}

/**
 * Задание 7
 * Написать код, который будет каждую минуту будет менять цвет у страницы. Цвет должен генерироваться рандомно.
 *
 */

function changeBgColor() {
  let r = Math.floor(Math.random() * 256)
  let g = Math.floor(Math.random() * 256)
  let b = Math.floor(Math.random() * 256)
  color = `rgba(${r},${g},${b},1)`
  document.body.style.backgroundColor = color
}

setInterval(() => {
  changeBgColor()
}, 10000)
