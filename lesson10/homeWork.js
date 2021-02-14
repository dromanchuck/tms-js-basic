/**
 * Домашнее задание к занятию 10
 * Каждому нужно создать новую ветку от ветки master. Название ветки должно содержать имя + первая буква фамилии + /lesson10.
 * Например: dmitryR/lesson10. Выполнение задания производится в свое ветке и в этом файле.
 * После выполнения задания делаете пулл реквест и сообщаете о том, что задание выполнено:)
 * В случае неполодок с гитом, присылаете папку с проектом мне в личные сообщения
 * Код решения должен быть сразу же после самого задания
 */

/**
 * Задание 1
 * Написать счетчик от 0 до бесконечности. Он должен содержать кнопку Старт, по нажатию на которую стартует отсчет,
 * элемент p, в котором будет отображаться число, кнопка Стоп,  по нажатию на которую счетчик отстанавливается,
 * кнопка Reset, по нажатию на которую счетчик ресетиться к 0.
 * Время инкремента числа выбрать самостоятельно:)
 * + Сделать так, чтобы кнопки Reset и Стоп не было видно, когда число счетчика равно 0
 */

const firstTaskP = document.createElement('p')
const firstTaskButtonSrart = document.createElement('button')
const firstTaskButtonStop = document.createElement('button')
const firstTaskButtonReset = document.createElement('button')

document.body.append(firstTaskP)
document.body.append(firstTaskButtonSrart)
document.body.append(firstTaskButtonReset)
document.body.append(firstTaskButtonStop)

firstTaskP.innerText = '0'
firstTaskButtonSrart.innerText = 'Start'
firstTaskButtonStop.innerText = 'Stop'
firstTaskButtonReset.innerText = 'Reset'

let count = 0
let flag = 0

function itr() {
  count++
  firstTaskP.innerHTML = count
  if (count > 0) {
    firstTaskButtonStop.classList.remove('hide')
    firstTaskButtonReset.classList.remove('hide')
  }
}

firstTaskButtonStop.classList.add('hide')
firstTaskButtonReset.classList.add('hide')

function toTheInfinity(period) {
  firstTaskButtonSrart.addEventListener('click', (event) => {
    flag = setInterval(itr, period)
  })

  firstTaskButtonStop.addEventListener('click', (event) => {
    clearInterval(flag)
  })

  firstTaskButtonReset.addEventListener('click', (event) => {
    clearInterval(flag)
    count = 0
    firstTaskP.innerText = 0
    firstTaskButtonStop.classList.add('hide')
    firstTaskButtonReset.classList.add('hide')
  })
}

toTheInfinity(1000)

/**
 * Задание 2
 * Есть ссылки в lesson10/index.html. Они находятся в div c id  = 2. Сделать так, чтобы по ховеру на ссылку (событие mouseover),
 * в аттрибут title у ссылки поместить значение пути ссылки.
 */

const links = document.querySelector('div[id="2"]')

links.addEventListener('mouseover', (event) => {
  if (event.target.tagName === 'A') {
    let getLink = event.target.getAttribute('href')
    event.target.setAttribute('title', getLink)
  }
})

/**
 * Задание 3
 * Есть инпуты, они находятся в div с id = 3. Сделать так, чтобы нажатию на enter
 * введенное значение из инпута попадало в div в виде:
 * `${индекс инпута}: ${введенный текст}`
 *
 */

const taskThreeDiv = document.querySelectorAll('div[id="3"]>input')
const taskThreeResult = document.querySelector('#result')

let spreadDiv = [...taskThreeDiv]

spreadDiv.forEach((elem) => {
  elem.addEventListener('keydown', (event) => {
    if (event.target.tagName === 'INPUT') {
      if (event.key === 'Enter') {
        taskThreeResult.innerHTML = `${spreadDiv.indexOf(elem)}: ${
          event.target.value
        }`
      }
    }
  })
})

/**
 * Задание 4
 * Создать инпут с плейсхолдером Username, инпут с плейсхолдером Password (не забываем про type password), кнопка Log In.
 * Создать массив пользователей([{userName: '', password: ''}]). Сделать так, чтобы по нажатию на кнопку Log In будет происходить
 * проверка введенного userName и password и если введенные данные соответсвуют одному из юзеров,
 * то убрать инпуты и кнопку, и показать сообщение: Hello ${userName}!. Если введенные данные не соответсвуют, то показать
 * alert c сообщением об ошибке
 *
 */

const div4 = document.createElement('div')
const task4Input = document.createElement('input')
const task4Input2 = document.createElement('input')
const task4Button = document.createElement('button')

task4Button.innerHTML = 'Log In'
task4Input.placeholder = 'Username'
task4Input2.placeholder = 'Password'
task4Input2.setAttribute('type', 'password')

document.body.append(div4)
div4.append(task4Input, task4Input2, task4Button)

let obj = [
  { userName: 'Alina', password: '123456' },
  { userName: 'Kate', password: '1234568' },
  { userName: 'Rex', password: '1234567' },
]

task4Button.addEventListener('click', (event) => {
  for (let user of obj) {
    if (
      task4Input.value === user.userName &&
      task4Input2.value === user.password
    ) {
      task4Input.remove()
      task4Input2.remove()
      task4Button.remove()
      alert(`Добро пожаловать ${user.userName}`)
      break
    } else {
      alert('Неверный логин или пароль')
      break
    }
  }
})

/**
 * Задание 5
 * Сделать 'тикающие часы' в формате: 00:00:00, они должны показывать текущее время.
 *
 * P.S. Задача со звездой :-)
 *
 */

function clock() {
  let date = new Date(),
    hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours(),
    minutes =
      date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes(),
    seconds =
      date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()
  console.log(`${hours}:${minutes}:${seconds}`)
}
setInterval(clock, 1000)
