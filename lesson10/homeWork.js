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

let div1 = document.createElement('div');
document.body.append(div1);
let p1 = document.createElement('p');
p1.innerText = '0';
let btn1_1 = document.createElement('button');
btn1_1.innerText = 'Старт';
let btn1_2 = document.createElement('button');
btn1_2.innerText = 'Стоп';
let btn1_3 = document.createElement('button');
btn1_3.innerText = 'Сброс';
div1.append(p1, btn1_1, btn1_2, btn1_3);

btn1_2.classList.add('invisible');
btn1_3.classList.add('invisible');

let state = false;
let stateInterval;
let count = 0;

btn1_1.addEventListener('click', () => {
  if (!state) {
    stateInterval = setInterval(() => {
      count++;
      if (
        btn1_2.classList.contains('invisible') &&
        btn1_3.classList.contains('invisible')
      ) {
        btn1_2.classList.remove('invisible');
        btn1_3.classList.remove('invisible');
      }
      p1.innerText = count;
    }, 1000);
  }
  state = true;
});

btn1_2.addEventListener('click', () => {
  clearInterval(stateInterval);
  state = false;
});

btn1_3.addEventListener('click', () => {
  p1.innerText = 0;
  btn1_2.classList.add('invisible');
  btn1_3.classList.add('invisible');
  count = 0;
});

/**
 * Задание 2
 * Есть ссылки в lesson10/index.html. Они находятся в div c id  = 2. Сделать так, чтобы по ховеру на ссылку (событие mouseover),
 * в аттрибут title у ссылки поместить значение пути ссылки.
 */

let div2 = document.querySelector("div[id='2']");
div2.addEventListener('mouseover', (event) => {
  if (event.target.tagName.toLowerCase() === 'a') {
    event.target.setAttribute(
      'title',
      event.target.getAttribute('href').slice(8)
    );
  }
});

/**
 * Задание 3
 * Есть инпуты, они находятся в div с id = 3. Сделать так, чтобы нажатию на enter
 * введенное значение из инпута попадало в div в виде:
 * `${индекс инпута}: ${введенный текст}`
 *
 */

let div3_1 = document.querySelector("div[id='3']");
let div3_2 = document.querySelector("div[id='result']");
let inputs3 = document.querySelectorAll('input');
let arr3 = [];

[...inputs3].forEach((item, index) => {
  item.addEventListener('keydown', (event) => {
    if (event.target.tagName.toLowerCase() === 'input') {
      if (event.key === 'Enter') {
        arr3.push(`${index}: ${event.target.value}`);
        div3_2.innerText = arr3.join(' ');
      }
    }
  });
});

/**
 * Задание 4
 * Создать инпут с плейсхолдером Username, инпут с плейсхолдером Password (не забываем про type password), кнопка Log In.
 * Создать массив пользователей([{userName: '', password: ''}]). Сделать так, чтобы по нажатию на кнопку Log In будет происходить
 * проверка введенного userName и password и если введенные данные соответсвуют одному из юзеров,
 * то убрать инпуты и кнопку, и показать сообщение: Hello ${userName}!. Если введенные данные не соответсвуют, то показать
 * alert c сообщением об ошибке
 *
 */

let div4 = document.createElement('div');
document.body.appendChild(div4);

let input4_1 = document.createElement('input');
input4_1.setAttribute('type', 'text');
input4_1.setAttribute('placeholder', 'Username');

let input4_2 = document.createElement('input');
input4_2.setAttribute('type', 'password');
input4_2.setAttribute('placeholder', 'Password');

let button4 = document.createElement('button');
button4.innerText = 'Log In';

div4.append(input4_1, input4_2, button4);

let users = [
  { userName: 'tema', password: 'tema1' },
  { userName: 'sava', password: 'sava1' },
];

let log = false;

button4.addEventListener('click', () => {
  for (let user of users) {
    if (user.userName === input4_1.value && user.password === input4_2.value) {
      input4_1.remove();
      input4_2.remove();
      button4.remove();
      log = true;
      alert(`Hello ${user.userName}`);
    }
  }
  if (!log) alert(`Wrong username or password`);
});

/**
 * Задание 5
 * Сделать 'тикающие часы' в формате: 00:00:00, они должны показывать текущее время.
 *
 * P.S. Задача со звездой :-)
 *
 */

let div5 = document.createElement('div');
let span5 = document.createElement('span');

document.body.append(div5);
div5.append(span5);

setInterval(() => {
  span5.innerText = new Date().toString().substring(16, 24);
}, 500);
