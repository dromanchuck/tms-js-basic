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

let startBtn = document.createElement('button');
let stopBtn = document.createElement('button');
let resetBtn = document.createElement('button');
let pNum = document.createElement('p');
let container = document.createElement('div');

startBtn.innerText = 'Start';
stopBtn.innerText = 'Stop';
resetBtn.innerText = 'Reset';
pNum.innerText = '0';

container.append(pNum, startBtn, stopBtn, resetBtn);
document.body.append(container);

stopBtn.classList.add('hidden');
resetBtn.classList.add('hidden');

let counter = 0;

function makeCounter() {
    counter++;
    pNum.innerText = counter;
    if (counter > 0) {
        stopBtn.classList.remove('hidden');
        resetBtn.classList.remove('hidden');
    }
}

let startCount;

startBtn.addEventListener('click', function() {
    counter = 0;
    startCount = setInterval(makeCounter, 1000);
    makeCounter();
});

stopBtn.addEventListener('click', function() {
    clearInterval(startCount);
});

resetBtn.addEventListener('click', function() {
    clearInterval(startCount);
    pNum.innerText = '0';
    stopBtn.classList.add('hidden');
    resetBtn.classList.add('hidden');
});


/**
 * Задание 2
 * Есть ссылки в lesson10/index.html. Они находятся в div c id  = 2. Сделать так, чтобы по ховеру на ссылку (событие mouseover),
 * в аттрибут title у ссылки поместить значение пути ссылки.
 */

let links = document.querySelector("div[id='2']");

links.addEventListener('mouseover', function(event) {

    if (event.target.tagName != 'A') {
        return
    } else {
        let linkWay = event.target.getAttribute('href');
        event.target.setAttribute('title', linkWay);
    }

});

/**
 * Задание 3
 * Есть инпуты, они находятся в div с id = 3. Сделать так, чтобы нажатию на enter
 * введенное значение из инпута попадало в div в виде:
 * `${индекс инпута}: ${введенный текст}`
 *
 */

let inputBlock = document.querySelector("div[id='3']");
let inputs = inputBlock.querySelectorAll("input");
let resultBlock = document.querySelector("#result");

let inputArray = [...inputs];
let resultArray = [];

for (let i = 0; i < inputArray.length; i++) {
    inputArray[i].addEventListener('keydown', function(event) {
        if (event.target.tagName === 'INPUT') {
            if (event.key === 'Enter') {
                resultArray.push(`${i}: ${event.target.value}`);
                resultBlock.innerText = resultArray;
            }
        }
    })
};


/**
 * Задание 4
 * Создать инпут с плейсхолдером Username, инпут с плейсхолдером Password (не забываем про type password), кнопка Log In.
 * Создать массив пользователей([{userName: '', password: ''}]). Сделать так, чтобы по нажатию на кнопку Log In будет происходить
 * проверка введенного userName и password и если введенные данные соответсвуют одному из юзеров,
 * то убрать инпуты и кнопку, и показать сообщение: Hello ${userName}!. Если введенные данные не соответсвуют, то показать
 * alert c сообщением об ошибке
 *
 */

let userName = document.createElement('input');
let password = document.createElement('input');
let logInBtn = document.createElement('button');

userName.placeholder = 'Username';
password.placeholder = 'Password';
password.setAttribute('type', 'password');
logInBtn.innerText = 'Log In';

let container2 = document.createElement('div');
container2.append(userName, password, logInBtn);
document.body.append(container2);

let users = [
    { userName: 'dasha', password: '12345' },
    { userName: 'gena', password: 'haha' },
    { userName: 'cat', password: 'whiskas' }
];

logInBtn.addEventListener('click', function() {
    for (let user of users) {
        if (userName.value === user.userName && password.value === user.password) {
            userName.remove();
            password.remove();
            logInBtn.remove();
            alert(`Hello ${userName.value}!`);
            break;
        }
        alert('Wrong Username or password!')
        break;
    }
});

/**
 * Задание 5
 * Сделать 'тикающие часы' в формате: 00:00:00, они должны показывать текущее время.
 *
 * P.S. Задача со звездой :-)
 *
 */

let container3 = document.createElement('div');
let hour = document.createElement('span');
let min = document.createElement('span');
let sec = document.createElement('span');

container3.append(hour, min, sec);
document.body.append(container3);

function makeClock() {
    let date = new Date();
    let hours = date.getHours();
    if (hours < 10) {
        hours = '0' + hours;
    }
    hour.innerText = hours + ':';

    let minutes = date.getMinutes();
    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    min.innerText = minutes + ':';

    let seconds = date.getSeconds();
    if (seconds < 10) {
        seconds = '0' + seconds
    }
    sec.innerText = seconds;
}

function clockStart() {
    setInterval(makeClock, 1000);
    makeClock()
}

clockStart();