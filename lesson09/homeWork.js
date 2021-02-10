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
let b1 = document.createElement('button')
let p1 = document.createElement('p')
b1.innerText = 'Task 1'
p1.innerText = '0'

b1.addEventListener('click', () => {
  p1.innerText = Math.floor(Math.random() * 10 + 1)
})

document.body.append(b1, p1)

/**
 * Задание 2
 * Создать 2 инпута, 3 параграфа и кнопку. Разместить следующим образом:
 * инпут, параграф с текстом +, инпут, параграф с текстом =, параграф в котором будет размещаться результат.
 * И ниже разместить кнопку с текстом 'посчитать сумму'.
 * Сделать так, чтобы пожатию на кнопку, происходило подсчет введенных в инпуты чисел.
 */

let d2 = document.createElement('div')
d2.style = `
display:flex;
align-items:center;
`

let inp21 = document.createElement('input')
let inp22 = document.createElement('input')

inp21.setAttribute('type', 'number')
inp22.setAttribute('type', 'number')

let p21 = document.createElement('p')
p21.innerText = '+'
let p22 = document.createElement('p')
p22.innerText = '='
let p23 = document.createElement('p')

let b2 = document.createElement('button')
b2.innerText = ('Посчитать сумму')

b2.addEventListener('click', () => {
  p23.innerText = +inp21.value + +inp22.value
})
d2.append(inp21, p21, inp22, p22, p23)
document.body.append(d2, b2)



/**
 * Задание 3
 * Получить элементы ссылки (a) из div с id = 3. Добавить кнопку с текстом 'Показать путь'.
 * Сделать так, чтобы по нажатию на кнопку, к тексту ссылки добавить путь и после чего убрать кнопку.
 * Например:
 * Ссылка с текстом 'Ссылка 1' после нажатия на кнопку текст меняется на 'Ссылка 1 (yandex.ru)'.
 */

let d3 = document.getElementById('3')
let a3 = [...d3.children]

a3.forEach((elem) => {
  let btn3 = document.createElement('button')
  btn3.innerHTML = 'click here'
  btn3.addEventListener('click', event => {
    let str = elem.getAttribute('href').slice(8)
    elem.innerHTML += ' ' + str
    btn3.remove()
  })
  d3.appendChild(btn3)
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

let d4 = document.getElementById('4')
let sortBtn = d4.lastElementChild
let btnsCont = d4.firstElementChild

sortBtn.addEventListener('click', event => {
  let btns = [...btnsCont.children]
  btns.sort((a, b) => a.innerHTML - b.innerHTML)
  for (let btn of btns) {
    btnsCont.append(btn)
  }

})

/** Задание 5
 * Создать 2 кнопки с текстами 'Заблокировать' и 'Разблокировать' и 1 инпут.
 * Сделать так, чтобы по нажатию на кнопку 'Заблокировать', input блокируется,
 * по нажатию на 'Разблокировать' input разблокируется. Использовать атрибут disabled для input.
 */

let inp5 = document.createElement('input')
let btn51 = document.createElement('button')
let btn52 = document.createElement('button')

btn51.innerHTML = 'Заблокировать'
btn52.innerHTML = 'Разблокировать'

let br5 = document.createElement('br')

btn51.addEventListener('click', event => {
  inp5.setAttribute('disabled', 'true')
})

btn52.addEventListener('click', event => {
  inp5.removeAttribute('disabled', 'true')
})

document.body.append(br5, inp5, btn51, btn52)

/**
 * Задание 6
 * Создать 5 параграфов с числами(<p>5</p>).
 * По нажатию на параграф в нем должен появится квадрат числа, которое он содержит.
 *
 */

let parArr = []
for (let i = 0; i < 5; i++) {
  parArr.push(document.createElement('p'))
}

parArr.forEach(elem => {
  elem.innerHTML = Math.floor(Math.random() * 10 + 1)
  document.body.append(elem)
  elem.addEventListener('click', event => {
    elem.innerHTML = elem.innerHTML ** 2
  })
})





