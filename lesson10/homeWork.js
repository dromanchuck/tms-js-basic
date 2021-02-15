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
const startBtn = document.createElement('button');
startBtn.classList.add('start-btn');
startBtn.innerText = 'start';

const stoptBtn = document.createElement('button');
stoptBtn.classList.add('stop-btn', 'hidden');
stoptBtn.innerText = 'stop';

const resetBtn = document.createElement('button');
resetBtn.classList.add('reset-btn', 'hidden');
resetBtn.innerText = 'reset';

const counter = document.createElement('p');
counter.innerText = '0';
document.body.append(startBtn, stoptBtn, resetBtn, counter);

let interval;
let i = 0;

startBtn.addEventListener('click', () => {
  resetBtn.classList.remove('hidden');
  stoptBtn.classList.remove('hidden');
  interval = setInterval(() => {
    counter.innerText = ++i
  }, 1000)
});

stoptBtn.addEventListener('click', () => {
  clearInterval(interval);
});

resetBtn.addEventListener('click', () => {
  i = 0;
  counter.innerText = i;
  resetBtn.classList.add('hidden');
  stoptBtn.classList.add('hidden');
})



/**
 * Задание 2
 * Есть ссылки в lesson10/index.html. Они находятся в div c id  = 2. Сделать так, чтобы по ховеру на ссылку (событие mouseover),
 * в аттрибут title у ссылки поместить значение пути ссылки.
 */
const links = document.getElementById('2');
links.addEventListener('mouseover', ({
  target
}) => {
  if (target.tagName === 'A') {
    target.setAttribute('title', target.href);
  }
})

/**
 * Задание 3
 * Есть инпуты, они находятся в div с id = 3. Сделать так, чтобы нажатию на enter
 * введенное значение из инпута попадало в div в виде:
 * `${индекс инпута}: ${введенный текст}`
 *
 */
const inputsContainer = document.getElementById('3');
const inputs = document.querySelectorAll('input');
const result = document.getElementById('result');

[...inputs].forEach((value, id) => {
  value.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      result.innerText = `индекс инпута: ${id}, текст: ${event.target.value}`;
      event.target.value = '';
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
const users = [
  {
    userName: 'Anya',
    password: '12345678'
  },
  {
    userName: 'Ivan',
    password: 'qwerty'
  },
  {
    userName: 'Petr',
    password: 'abraKadabra'
  }
]

const userNameInput = document.createElement('input');
userNameInput.placeholder = 'Username';

const passwordInput = document.createElement('input');
passwordInput.placeholder = 'password';
passwordInput.type = 'password';

const logInBtn = document.createElement('button');
logInBtn.innerText = 'Log in';

document.body.append(userNameInput, passwordInput, logInBtn);

logInBtn.addEventListener('click', () => {
  const loggedUser = users.find((user) => {
    return user.userName === userNameInput.value && user.password === passwordInput.value;
  });
  if (loggedUser) {
    userNameInput.classList.add('hidden');
    passwordInput.classList.add('hidden');
    logInBtn.classList.add('hidden');
  }
  const messagge = loggedUser ? `Hello ${loggedUser.userName}!` : 'ошибка';
  alert(messagge); 
})

/**
 * Задание 5
 * Сделать 'тикающие часы' в формате: 00:00:00, они должны показывать текущее время.
 *
 * P.S. Задача со звездой :-)
 *
 */
const time = document.createElement('div');
time.classList.add('time');
document.body.append(time);

function showTime() {
  const today = new Date();
  const hour = today.getHours();
  const min = today.getMinutes();
  const sec = today.getSeconds();
  time.innerHTML = `${hour}:${addZero(min)}:${addZero(sec)}`;
  setTimeout(showTime, 1000);
}

function addZero(n) {
  return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

showTime();

