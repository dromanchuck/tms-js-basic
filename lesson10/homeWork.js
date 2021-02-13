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

function countUpToInfinity(period) {
    let p = document.createElement('p')
    let start = document.createElement('button')
    let stop = document.createElement('button')
    let reset = document.createElement('button')
    p.innerHTML = 0
    start.innerHTML = 'Start'
    stop.innerHTML = 'Stop'
    reset.innerHTML = 'Reset'

    stop.classList.add('hidden')
    reset.classList.add('hidden')

    let count = 0
    let flag = 0
    function setTime() {
        count++
        p.innerHTML = count
        if (count > 0) {
            stop.classList.remove('hidden')
            reset.classList.remove('hidden')
            start.setAttribute('disabled', 'true')
        }
    }
    start.onclick = () => {
        flag = setInterval(setTime, period)
    }
    stop.onclick = () => {
        clearInterval(flag)
    }

    reset.onclick = () => {
        clearTimeout(flag)
        count = 0
        p.innerHTML = 0
        stop.classList.add('hidden')
        reset.classList.add('hidden')
        start.removeAttribute('disabled', 'true')
    }

    document.body.append(p, start, stop, reset)
}
countUpToInfinity(1000)
/**
 * Задание 2
 * Есть ссылки в lesson10/index.html. Они находятся в div c id  = 2. Сделать так, чтобы по ховеру на ссылку (событие mouseover),
 * в аттрибут title у ссылки поместить значение пути ссылки.
 */

let hrefs = document.querySelector("div[id='2']")

hrefs.addEventListener('mouseover', event => {
    if (event.target.tagName === 'A') {
        let path = event.target.getAttribute('href')
        event.target.setAttribute('title', path)
    }
})

/**
 * Задание 3
 * Есть инпуты, они находятся в div с id = 3. Сделать так, чтобы нажатию на enter
 * введенное значение из инпута попадало в div в виде:
 * `${индекс инпута}: ${введенный текст}`
 *
 */

let inputs = document.querySelector("div[id='3']")
let inputs1 = document.querySelectorAll("input[type = 'text']")
let result = document.querySelector('#result')

let inputsArr = [...inputs1]

inputsArr.forEach((elem) => {
    let id = "_" + Math.random().toString(36).substr(2, 9);
    let obj = { id, elem }
    elem.addEventListener('keydown', event => {
        let index = Math.floor(Math.random() * 5 + 1)
        if (event.target.tagName === 'INPUT') {
            if (event.key === 'Enter') {
                result.innerHTML = `${obj.id}: ${event.target.value}`
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


let loginInput = document.createElement('input')
loginInput.setAttribute('placeholder', 'Username')

let passwordInput = document.createElement('input')
passwordInput.setAttribute('type', 'password')

let loginBtn = document.createElement('button')
loginBtn.innerHTML = 'Log In'

let br = document.createElement('br')

let state = [
    { username: 'Mike', password: '123456' },
    { username: 'Nike', password: '234567' },
    { username: 'Bike', password: '345678' },
]

loginBtn.onclick = () => {
    let login = loginInput.value
    let password = passwordInput.value

    let autorizatedOne = state.filter(elem => elem.username === login && elem.password === password)

    if (autorizatedOne[0]) {
        loginInput.classList.add('hidden')
        passwordInput.classList.add('hidden')
        loginBtn.classList.add('hidden')
        alert(`Hello ${autorizatedOne[0].username}`)
    }
    else {
        alert(`Incorrect data, please try once more`)
    }
}
document.body.append(br, loginInput, passwordInput, loginBtn)



/**
 * Задание 5
 * Сделать 'тикающие часы' в формате: 00:00:00, они должны показывать текущее время.
 *
 * P.S. Задача со звездой :-)
 *
 */


let clock = document.createElement('div')
clock.style = `
display:flex;
justify-content:center;
`
let clock1 = document.createElement('p')
let clock2 = document.createElement('p')
let clock3 = document.createElement('p')

function getTime() {
    let date = new Date()
    let hours = date.getHours()
    if (hours < 10) hours = `0${hours}`
    clock1.innerHTML = `${hours}:`

    let minutes = date.getMinutes()
    if (minutes < 10) minutes = `0${minutes}`
    clock2.innerHTML = `${minutes}:`

    let seconds = date.getSeconds()
    if (seconds < 10) seconds = `0${seconds}`
    clock3.innerHTML = seconds
}

clock.append(clock1, clock2, clock3)
document.body.append(clock)

let flag

function clockStart() {
    flag = setInterval(getTime, 1000)
    getTime()
}

let b = document.createElement('button')
b.onclick = clockStart
b.innerHTML = 'Show Current Time'
document.body.append(b)
