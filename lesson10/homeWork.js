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
let button1 = document.createElement(`button`);
button1.innerText = `Старт`;
let button2 = document.createElement(`button`);
button2.innerText = `Стоп`;
let button3 = document.createElement(`button`);
button3.innerText = `Обнуление`;
let p = document.createElement(`p`);
p.innerText = `0`;
document.body.append(button1, button2, button3, p);
button2.classList.add(`unseen`);
button3.classList.add(`unseen`);
let interval;
let count = 0;
let condition = true;
button1.addEventListener(`click`, (counter) => {
    if (condition) {
        interval = setInterval(() => {
            count++;
            if(button2.classList.contains(`unseen`) && button3.classList.contains(`unseen`)){
                button2.classList.remove(`unseen`);
                button3.classList.remove(`unseen`);
            }
            p.innerText = count;
        }, 1000);
    } 
    condition = false;
})
button2.addEventListener(`click`, () => {
    clearInterval(interval);
    condition = true;
})
button3.addEventListener(`click`, () => {
    p.innerText = `0`;
    button2.classList.add('unseen');
    button3.classList.add('unseen');
    count = 0;
})
/**
 * Задание 2
 * Есть ссылки в lesson10/index.html. Они находятся в div c id  = 2. Сделать так, чтобы по ховеру на ссылку (событие mouseover),
 * в аттрибут title у ссылки поместить значение пути ссылки.
 */
let links = document.querySelector(`div[id="2"]`);
links.addEventListener(`mouseover`, (event) => {
    if (event.target.tagName === `A`) {
        let href = event.target.getAttribute(`href`)
        event.target.setAttribute(`title`, href)
    }
})
/**
 * Задание 3
 * Есть инпуты, они находятся в div с id = 3. Сделать так, чтобы нажатию на enter
 * введенное значение из инпута попадало в div в виде:
 * `${индекс инпута}: ${введенный текст}`
 *
 */
let div = document.querySelector(`div[id="3"]`);
let divResult = document.querySelector(`div[id="result"]`);
let inputs1 = document.querySelectorAll(`div[id="3"] > input`);
let inputs2 = [...inputs1];
inputs2.forEach((elem, index) => {
    elem.addEventListener(`keydown`, (event) => {
        if (event.key === 'Enter') {
            divResult.innerText = `${index}: ${event.target.value}`;
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
let inputLog = document.createElement(`input`);
document.body.append(inputLog);
inputLog.setAttribute(`placeholder`, `Enter your Login`);
let inputPass = document.createElement(`input`);
document.body.append(inputPass);
inputPass.setAttribute(`placeholder`, `Password`);
inputPass.setAttribute(`type`, `password`);
let buttonLog = document.createElement(`button`);
document.body.append(buttonLog);
buttonLog.innerText = `Log In`;
let userArray = [
    { userName: `Angela`, password: `112233`},
    { userName: `Alex`, password: `23456`},
    { userName: `Samanta`, password: `0123456789`},
    { userName: `Bob`, password: `QWERTY`},
    { userName: `Ray`, password: `333333`},
];
buttonLog.addEventListener(`click`, () => {
    for ( let userName of userArray){
        if (userName.userName === inputLog.value && userName.password === inputPass.value){
            inputLog.classList.add(`unseen`);
            inputPass.classList.add(`unseen`);
            buttonLog.classList.add(`unseen`);
            alert(`Hello! ${userName}!`)
        } else {
            alert(`ERROR! Please enter your login or password correctly!`)
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
let div3 = document.createElement(`div`);
let p1 = document.createElement(`p`);
document.body.append(div3);
div3.append(p1);
let time = new Date();
let hours = time.getHours();
let minutes = time.getMinutes();
if (minutes < 10 ) {
    minutes = `0${minutes}`};
let seconds = time.getSeconds();
if (seconds < 10) {
    seconds = `0${seconds}`};
p1.innerText = `Текущее время  ` + `${hours}:`+`${minutes}:`+`${seconds}`;