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

const startBtn = document.createElement("button");
startBtn.classList.add("start-btn");
startBtn.innerText = "start";

const stoptBtn = document.createElement("button");
stoptBtn.classList.add("stop-btn", "hidden");
stoptBtn.innerText = "stop";

const resetBtn = document.createElement("button");
resetBtn.classList.add("reset-btn", "hidden");
resetBtn.innerText = "reset";

const counter = document.createElement("p");
counter.innerText = "0";
document.body.append(startBtn, stoptBtn, resetBtn, counter);

let interval;
let i = 0;

startBtn.addEventListener("click", () => {
  resetBtn.classList.remove("hidden");
  stoptBtn.classList.remove("hidden");

  interval = setInterval(() => {
    counter.innerText = ++i;
  }, 1000);
});

stoptBtn.addEventListener("click", () => {
  clearInterval(interval);
});

resetBtn.addEventListener("click", () => {
  i = 0;
  counter.innerText = i;
  clearInterval(interval);
  resetBtn.classList.add("hidden");
  stoptBtn.classList.add("hidden");
});

/**
 * Задание 2
 * Есть ссылки в lesson10/index.html. Они находятся в div c id  = 2. Сделать так, чтобы по ховеру на ссылку (событие mouseover),
 * в аттрибут title у ссылки поместить значение пути ссылки.
 */

const links = document.getElementById("2");

links.addEventListener("mouseover", ({ target }) => {
  if (target.tagName === "A") {
    target.setAttribute("title", target.href);
  }
});

/**
 * Задание 3
 * Есть инпуты, они находятся в div с id = 3. Сделать так, чтобы нажатию на enter
 * введенное значение из инпута попадало в div в виде:
 * `${индекс инпута}: ${введенный текст}`
 *
 */

let three = document.getElementById("3");
let inp = three.querySelectorAll("input");
let arr = [...inp];
let div3 = three.querySelector("div");

arr.forEach((item, index) => {
  item.addEventListener("keydown", function (event) {
    if (event.code == "Enter") {
      div3.innerText = `${index}:${item.value}`;
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

const usersArray = [
  { userName: "Freddy", password: "golf" },
  { userName: "Mark", password: "caddy" },
];

const userDiv = document.createElement("div");
userDiv.classList.add("container_task4");

const nameInput = document.createElement("input");
nameInput.setAttribute("placeholder", "Username");

const passwordInput = document.createElement("input");
passwordInput.setAttribute("placeholder", "Password");
passwordInput.setAttribute("type", "password");

const logInButton = document.createElement("button");
logInButton.innerText = "Log in";

userDiv.append(nameInput, passwordInput, logInButton);
document.body.append(userDiv);

logInButton.addEventListener("click", () => {
  let currentUser;

  for (let user of usersArray) {
    if (
      user.userName === nameInput.value &&
      user.password === passwordInput.value
    ) {
      nameInput.remove();
      passwordInput.remove();
      logInButton.remove();

      currentUser = user;
    }
  }

  if (currentUser) {
    alert(`Hello ${currentUser.userName}!`);
  } else {
    alert("Ошибка!");
  }
});

/**
 * Задание 5
 * Сделать 'тикающие часы' в формате: 00:00:00, они должны показывать текущее время.
 *
 * P.S. Задача со звездой :-)
 *
 */
