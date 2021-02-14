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

let start;

//createElem
let conteiner1 = document.createElement('div');
let conteiner11 = document.createElement('div');
let conteiner12 = document.createElement('div');
let conteiner13 = document.createElement('div');
let referencePoint = document.createElement('p');
let btnStart = document.createElement('button');
let btnStop = document.createElement('button');
let btnReset = document.createElement('button');

referencePoint.innerText = '0';
btnStart.innerText = 'Start';
btnStop.innerText = 'Stop';
btnReset.innerText = 'Reset';

//addElem
document.body.append(conteiner1);
conteiner1.append('Timer', conteiner11, conteiner12, conteiner13);
conteiner11.append(referencePoint);
conteiner12.append(btnStart, btnStop, btnReset);
//conteiner13.append();

//addCSS
conteiner1.style = `
width: 200px;
display: flex;
flex-direction: column;
align-items: center;
margin: 35px auto 0 auto;`

conteiner12.style = `
display: flex;
flex-direction: row;`

btnStop.style = `display: none;`
btnReset.style = `display: none;`

//addEvent
btnStart.onclick = timerStart;

btnStop.onclick = timerStop;

btnReset.onclick = timerReset;

//addFucntion
function timerStart() {
    start = setInterval(() => addNum(), 1000);
    
    btnStop.style = `display: block;`
    btnReset.style = `display: block;`
    
    return start;
}

function addNum() {
    return referencePoint.innerText++;
}

function timerStop() {
    return setTimeout(() => { clearInterval(start); }, 1);
}

function timerReset() {
    setTimeout(() => { clearInterval(start); }, 1);
    
    referencePoint.innerText = '0';

    btnStop.style = `display: none;`
    btnReset.style = `display: none;`
}
/**
 * Задание 2
 * Есть ссылки в lesson10/index.html. Они находятся в div c id  = 2. Сделать так, чтобы по ховеру на ссылку (событие mouseover),
 * в аттрибут title у ссылки поместить значение пути ссылки.
 */

let links = document.getElementById('2');
let ColLinks = links.querySelectorAll('a');
let arrLinks = [...ColLinks];

arrLinks.map((item) => {
    item.addEventListener("mouseover", function() {
        this.setAttribute('title', item.href)
    })
})

arrLinks.map((item) => {
    item.addEventListener("mouseout", function() {
        this.removeAttribute('title')
    })
})

/**
 * Задание 3
 * Есть инпуты, они находятся в div с id = 3. Сделать так, чтобы нажатию на enter
 * введенное значение из инпута попадало в div в виде:
 * `${индекс инпута}: ${введенный текст}`
 *
 */

let inputs = document.getElementById('3');
let ColInputs = inputs.querySelectorAll('input');
let arrInputs = [...ColInputs];
let result3 = inputs.querySelector('#result');

arrInputs.map((item, index) => {
    item.addEventListener('keydown', function(event) {
        if (event.code == 'Enter') {
            return result3.innerText = `${index}: ${item.value}`
        }
    });
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

let result4;

let arrOfUsers = [
    {userName: 'Diana', password: 'taddygirl'},
    {userName: 'Anton', password: 'lowly'}
]

//createElem
let conteiner4 = document.createElement('div');
let input4 = document.createElement('input');
let input41 = document.createElement('input');
let buttonLogIn = document.createElement('button');

buttonLogIn.innerText = 'Log In';
input4.setAttribute('placeholder', 'Username');
input41.setAttribute('placeholder', 'Password');
input41.setAttribute('type', 'password');

//addElem
document.body.append(conteiner4);
conteiner4.append(input4, input41, buttonLogIn);

//addCSS
conteiner4.style = `
display: flex;
flex-direction: column;
width: 200px;
align-items: center;
margin: 35px auto 0 auto;
border: 1px solid black;
padding: 5px;
border-radius: 5px`

buttonLogIn.style = `
margin: 10px 0 0 0;
width: 40%;
border: none;
background: lightgreen;`

input4.style = `
border: none;`

input41.style = `
margin: 10px;
border: none;`

//addEvent
buttonLogIn.onclick = compare;

//addFunc
function compare() {
    result4 = arrOfUsers.find(item => item.userName === input4.value && item.password === input41.value)

    if(result4 !== undefined) {
        alert(`Hello ${input4.value}!`);
        input4.remove();
        input41.remove();
        buttonLogIn.remove();
    } else {alert(`неверные данные`)}
}

/**
 * Задание 5
 * Сделать 'тикающие часы' в формате: 00:00:00, они должны показывать текущее время.
 *
 * P.S. Задача со звездой :-)
 *
 */

//createElem
let conteiner5 = document.createElement('div');
let hours = document.createElement('p');
let minutes = document.createElement('p');
let seconds = document.createElement('p');

hours.innerText = '0';
minutes.innerText = '0';
seconds.innerText = '0';

//addElem
document.body.append(conteiner5);
conteiner5.append(hours, ':', minutes, ':', seconds);

//addCSS
conteiner5.style = `
display: flex;
flex-direction: row;
width: 200px;
align-items: center;
justify-content: center;
margin: 35px auto 0 auto;
border: 1px solid black;
padding: 5px;
border-radius: 5px`;

hours.style = `
margin: 0 20px 0 0`;

minutes.style = `
margin: 0 20px`;

seconds.style = `
margin: 0 0 0 20px`;

//timeData
let today,
    todayHours,
    todatMinutes,
    todaySeconds;

//addEvent

setInterval(() => newDate(), 1);

function newDate() {
    today = new Date(),
    hours.innerText = todayHours = today.getHours(),
    minutes.innerText = todatMinutes = today.getMinutes(),
    seconds.innerText = todaySeconds = today.getSeconds();
}