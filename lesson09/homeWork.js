/**
 * Домашнее задание к занятию 9
 * Каждому нужно создать новую ветку от ветки master. Название ветки должно содержать имя + первая буква фамилии + /lesson09.
 * Например: dmitryR/lesson09. Выполнение задания производится в свое ветке и в этом файле.
 * После выполнения задания делаете пулл реквест и сообщаете о том, что задание выполнено:)
 * В случае неполодок с гитом, присылаете папку с проектом мне в личные сообщения
 * Код решения должен быть сразу же после самого задания
 */

//Внимание! Верстку для заданий использовать файл index.html

/**
 * Задание 1
 * Создать кнопку и параграф с текстом '0'. Сделать так, чтобы по нажатию
 * на кнопку, в параграф вставлялась рандомная цифра от 0 до 10.
 */

const taskOneButton = document.createElement('button')
const taskOneP = document.createElement('p')

taskOneButton.innerText = 'Task 1, сгенерировать рандомное число от 1 до 10'
taskOneP.innerText = 0

taskOneButton.addEventListener('click', (event) => {
  taskOneP.innerText = Math.round(Math.random() * 10)
})

document.body.append(taskOneButton, taskOneP)

/**
 * Задание 2
 * Создать 2 инпута, 3 параграфа и кнопку. Разместить следующим образом:
 * инпут, параграф с текстом +, инпут, параграф с текстом =, параграф в котором будет размещаться результат.
 * И ниже разместить кнопку с текстом 'посчитать сумму'.
 * Сделать так, чтобы пожатию на кнопку, происходило подсчет введенных в инпуты чисел.
 */
const taskTwoDiv = document.createElement('div')

const taskTwoInputOne = document.createElement('input')
const taskTwoInputTwo = document.createElement('input')

const taskTwoPOne = document.createElement('p')
const taskTwoPTwo = document.createElement('p')
const taskTwoPThree = document.createElement('p')

const taskTwoButton = document.createElement('button')

taskTwoPOne.innerText = '+'
taskTwoPTwo.innerText = '='
taskTwoButton.innerText = 'Посчитать сумму чисел'

taskTwoInputOne.setAttribute('type', 'number')
taskTwoInputTwo.setAttribute('type', 'number')

taskTwoDiv.style = `
display: flex
`

document.body.append(taskTwoDiv)
taskTwoDiv.append(
  taskTwoInputOne,
  taskTwoPOne,
  taskTwoInputTwo,
  taskTwoPTwo,
  taskTwoPThree
)
document.body.append(taskTwoButton)

taskTwoButton.addEventListener('click', (event) => {
  taskTwoPThree.innerText = +taskTwoInputOne.value + +taskTwoInputTwo.value
})

/**
 * Задание 3
 * Получить элементы ссылки (a) из div с id = 3. Добавить кнопку с текстом 'Показать путь'.
 * Сделать так, чтобы по нажатию на кнопку, к тексту ссылки добавить путь и после чего убрать кнопку.
 * Например:
 * Ссылка с текстом 'Ссылка 1' после нажатия на кнопку текст меняется на 'Ссылка 1 (yandex.ru)'.
 */

const taskThreeGetDivA = document.querySelectorAll('div[id="3"] > a')
const taskThreeGetDiv = document.getElementById('3')

const taskThreeButton = document.createElement('button')

taskThreeGetDiv.appendChild(taskThreeButton)

taskThreeButton.innerText = 'Показать путь ссылки'

let arrayA = [...taskThreeGetDivA]

taskThreeButton.addEventListener('click', (event) => {
  for (let link of arrayA) {
    let getDomain = link.getAttribute('href').replace('https://', '')
    link.innerText = link.innerText + ` ${getDomain}`
  }
  taskThreeButton.remove()
})

/**
 * Задание 4
 * Получить элемент с id = 4. 
 *   <div id="4">
      <div class="exercise_4">
        <button>5</button>
        <button>6</button>
        <button>3</button>
        <button>8</button>
        <button>1</button>
        <button>9</button>
        <button>10</button>
        <button>9</button>
        <button>15</button>
        <button>0</button>
        <button>10</button>
        <button>90</button>
        <button>100</button>
        <button>2</button>
        <button>3</button>
      </div>
      <button>Отсортировать</button>
    </div>
 * 
 * Сделать так, чтобы по нажатию на кнопку Отсортировать, кнопки были отсортированы по возрастанию.
 *
 */

const taskFourDiv = document.getElementById('4')
const numButtons = document.querySelectorAll('.exercise_4 > button')
const sortButton = document.querySelector('.sortButton')
const exeFour = document.querySelector('.exercise_4')

sortButton.addEventListener('click', (event) => {
  let buttonsArray = [...numButtons]
  let sortedArray = buttonsArray.sort((a, b) => a.innerHTML - b.innerHTML)

  exeFour.innerHTML = ''
  for (let btn of sortedArray) {
    exeFour.appendChild(btn)
  }
})

/** Задание 5
 * Создать 2 кнопки с текстами 'Заблокировать' и 'Разблокировать' и 1 инпут.
 * Сделать так, чтобы по нажатию на кнопку 'Заблокировать', input блокируется,
 * по нажатию на 'Разблокировать' input разблокируется. Использовать атрибут disabled для input.
 */

const taskFiveDiv = document.createElement('div')
const taskFiveButtonOne = document.createElement('button')
const taskFiveButtonTwo = document.createElement('button')
const taskFiveInput = document.createElement('input')

taskFiveButtonOne.innerText = 'Заблокировать'
taskFiveButtonTwo.innerText = 'Разблокировать'

document.body.append(taskFiveDiv)
taskFiveDiv.append(taskFiveInput)
taskFiveDiv.append(taskFiveButtonOne)
taskFiveDiv.append(taskFiveButtonTwo)

taskFiveButtonOne.addEventListener('click', (event) => {
  taskFiveInput.setAttribute('disabled', true)
})
taskFiveButtonTwo.addEventListener('click', (event) => {
  taskFiveInput.removeAttribute('disabled')
})

/**
 * Задание 6
 * Создать 5 параграфов с числами(<p>5</p>).
 * По нажатию на параграф в нем должен появится квадрат числа, которое он содержит.
 *
 */

const p1 = document.createElement('p')
const p2 = document.createElement('p')
const p3 = document.createElement('p')
const p4 = document.createElement('p')
const p5 = document.createElement('p')

p1.innerText = '2'
p2.innerText = '3'
p3.innerText = '4'
p4.innerText = '5'
p5.innerText = '6'

document.body.append(p1)
document.body.append(p2)
document.body.append(p3)
document.body.append(p4)
document.body.append(p5)

let pArray = [p1, p2, p3, p4, p5]

for (let elem of pArray) {
  elem.addEventListener('click', (event) => {
    elem.innerText = (+elem.innerText) ** 2
  })
}
