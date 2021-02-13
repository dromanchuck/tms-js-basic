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


const countDiv = document.createElement('div');
countDiv.classList.add('counter');

const startButton = document.createElement('button');
startButton.innerText = 'Start';

const stopButton = document.createElement('button');
stopButton.innerText = 'Stop';
stopButton.classList.add('hide');

const resetButton = document.createElement('button');
resetButton.innerText = 'Reset';
resetButton.classList.add('hide');

const numberOfCounter = document.createElement('p');
numberOfCounter.innerText = '0';
numberOfCounter.classList.add('count');

countDiv.append(startButton, stopButton, resetButton, numberOfCounter);
document.body.append(countDiv);

let counter = 0;
let startCounter = 0;

function makeCounter() {
    counter++
    numberOfCounter.innerHTML = counter;
};

if(numberOfCounter.innerHTML === '0') {
    stopButton.style = `
        display: none
    `;

    resetButton.style = `
        display : none
    `
}

function buttonsEvents(num) {
    startButton.addEventListener('click', () => {
        startCounter = setInterval(makeCounter, num);
        stopButton.style = `
        display: flex
    `;

    resetButton.style = `
        display : flex
    `
    })

    stopButton.addEventListener('click', () => {
        clearInterval(startCounter);
    });

    resetButton.addEventListener('click', () => {
        clearInterval(startCounter);
        numberOfCounter.innerText = '0';
        counter = 0;
        stopButton.style = `
        display: none
    `;

    resetButton.style = `
        display : none
    `
    })
};

buttonsEvents(100);


/**
 * Задание 2
 * Есть ссылки в lesson10/index.html. Они находятся в div c id  = 2. Сделать так, чтобы по ховеру на ссылку (событие mouseover),
 * в аттрибут title у ссылки поместить значение пути ссылки.
 */


const hrefs = document.querySelector("div[id='2']");

hrefs.addEventListener('mouseover', events => {

    if (events.target.tagName = 'a') {
        const attr = events.target.getAttribute('href');
        events.target.setAttribute('title', attr);
    }
});

/**
 * Задание 3
 * Есть инпуты, они находятся в div с id = 3. Сделать так, чтобы нажатию на enter
 * введенное значение из инпута попадало в div в виде:
 * `${индекс инпута}: ${введенный текст}`
 *
 */

const inputDiv = document.querySelector("div[id='3']");
const allInputs = inputDiv.querySelectorAll('input');
const resultDiv = document.querySelector("div[id='result']");

const inputsArr = [...allInputs];

inputsArr.map((elem, index) => {
    elem.addEventListener('keydown', event => {
        if(event.code === 'Enter') {
            return resultDiv.innerText = ` ${index} : ${elem.value}`;
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

const userDiv = document.createElement('div');
userDiv.classList.add('container_task4');

const nameInput = document.createElement('input');
nameInput.setAttribute('placeholder', 'Username');

const passwordInput = document.createElement('input');
passwordInput.setAttribute('placeholder', 'Password');
passwordInput.setAttribute('type', 'password');

const logInButton = document.createElement('button');
logInButton.innerText = 'Log in';

userDiv.append(nameInput, passwordInput, logInButton);
document.body.append(userDiv);

const usersArray = [
    { userName: 'Freddy', password: 'golf'},
    { userName: 'Mark', password: 'caddy'},
];

logInButton.addEventListener('click', () => {
    for (let user of usersArray) {
        if (user.userName === nameInput.value && user.password === passwordInput.value) {
            nameInput.remove();
            passwordInput.remove();
            logInButton.remove();
            alert (`Hello ${user.userName}!`);
            break
        } else {
            alert('Ошибка!');
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

const clockContainer = document.createElement('div');
clockContainer.classList.add('container_task5');

const hours = document.createElement('span');
const minutes = document.createElement('span');
const seconds = document.createElement('span');

clockContainer.append(hours, minutes, seconds);
document.body.append(clockContainer);

function getTime() {
    let date = new Date();

    hours1 = (date.getHours() < 10) ? '0' + date.getHours() : date.getHours();
    minutes1 = (date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes();
    seconds1 = (date.getSeconds() < 10) ? '0' + date.getSeconds() : date.getSeconds();

    hours.innerHTML = hours1 + ':';
    minutes.innerHTML = minutes1 + ':';
    seconds.innerHTML = seconds1;
};

setInterval(getTime, 1000);
getTime();
