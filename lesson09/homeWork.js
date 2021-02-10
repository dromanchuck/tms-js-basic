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

//createElem
 let container = document.createElement('div'),
     button = document.createElement('button'),
     p = document.createElement('p');

     p.innerHTML = '0';
     button.innerHTML = 'сгенерировать число';

//addCSS
container.style =  `
  display: flex;
  margin: 10px 0 0 0;
  justify-content: center`;

p.style = `margin: 0 0 0 10px;`

//addElem
document.body.append(container);
container.append(button, p);

//addEvent
button.onclick = () => {
  p.innerHTML = getRandomInt();
}

//function  
function getRandomInt() {
  return Math.floor(Math.random() * Math.floor(10));
}

/**
 * Задание 2
 * Создать 2 инпута, 3 параграфа и кнопку. Разместить следующим образом:
 * инпут, параграф с текстом +, инпут, параграф с текстом =, параграф в котором будет размещаться результат.
 * И ниже разместить кнопку с текстом 'посчитать сумму'.
 * Сделать так, чтобы пожатию на кнопку, происходило подсчет введенных в инпуты чисел.
 */

//CreateElem
let container2 = document.createElement('div'),
    container3 = document.createElement('div'),
    container4 = document.createElement('div'),
    input1 = document.createElement('input'),
    input2 = document.createElement('input'),
    p1 = document.createElement('p'),
    p2 = document.createElement('p'),
    p3 = document.createElement('p'),
    button1 = document.createElement('button');

    p1.innerHTML = '+';
    p2.innerHTML = '=';
    p3.innerHTML = '';

    button1.innerHTML = 'посчитать сумму';

//AddElem
document.body.append(container2);
container2.append(container3, container4);
container3.append(input1, p1, input2, p2, p3);
container4.append(button1);

//addCSS
container2.style =  `margin: 10px 0 0 0;`;

container3.style =  `
display: flex;
align-items: center;
justify-content: center`;

container4.style =  `
display: flex;
align-items: center;
justify-content: center`;

p1.style = `padding: 5px;`
p2.style = `padding: 5px;`
p3.style = `font-size: 20px;`

//addEvent
button1.onclick = () => {
  p3.innerHTML = sum();
}

//addFunc
function sum() {
  return Number(input1.value) + Number(input2.value);
}

/**
 * Задание 3
 * Получить элементы ссылки (a) из div с id = 3. Добавить кнопку с текстом 'Показать путь'.
 * Сделать так, чтобы по нажатию на кнопку, к тексту ссылки добавить путь и после чего убрать кнопку.
 * Например:
 * Ссылка с текстом 'Ссылка 1' после нажатия на кнопку текст меняется на 'Ссылка 1 (yandex.ru)'.
 */

let divlinks = document.getElementById('3');
let arrOfLinks = [...divlinks.children];

//createElem
let container5 = document.createElement('div'),
    container6 = document.createElement('div'),
    container7 = document.createElement('div'),
    a1 = document.createElement('a'),
    a2 = document.createElement('a'),
    a3 = document.createElement('a'), 
    button2 = document.createElement('button');

    button2.innerHTML = 'показать путь';
    a1.innerHTML = 'ссылка 1';
    a2.innerHTML = 'ссылка 2';
    a3.innerHTML = 'ссылка 3';

    a1 = arrOfLinks[0];
    a2 = arrOfLinks[1];
    a3 = arrOfLinks[2];

//addElem
document.body.append(container5);
container5.append(container6, container7);
container6.append(a1, a2, a3);
container7.append(button2);

//addCSS
container5.style =  `margin: 10px 0 0 0;`;

container6.style =  `
display: flex;
align-items: center;
justify-content: center`;

container7.style =  `
display: flex;
align-items: center;
justify-content: center;
margin: 10px;`;

a2.style = `margin: 10px;`

//addEvent
button2.onclick = showURL;

//addFunc
function showURL() {
  a1.innerHTML = `Ссылка 1 ${arrOfLinks[0].getAttribute('href')}`;
  a2.innerHTML = `Ссылка 2 ${arrOfLinks[1].getAttribute('href')}`;
  a3.innerHTML = `Ссылка 3 ${arrOfLinks[2].getAttribute('href')}`;
  button2.remove();
}

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

let divFromEx4 = document.getElementById('4');
let buttonFromEx4 = [...divFromEx4.children];
let arrButtons = [...buttonFromEx4[0].children];
let buttonSort = buttonFromEx4[1];

function sotrCe() {
  for(let i = 0; i < arrButtons.length; i++) {
    for(let j = 0; j < arrButtons.length; j++) {
      if(Number(arrButtons[i].innerHTML) > Number(arrButtons[j].innerHTML)) {
        let temp = arrButtons[i];
        arrButtons[i].remove();
        arrButtons.append(temp); // *
      }
    }
  }
}
 //после начала отрабатывания, жалуется на * , не понимаю в чём конфликт

/** Задание 5
 * Создать 2 кнопки с текстами 'Заблокировать' и 'Разблокировать' и 1 инпут.
 * Сделать так, чтобы по нажатию на кнопку 'Заблокировать', input блокируется,
 * по нажатию на 'Разблокировать' input разблокируется. Использовать атрибут disabled для input.
 */

//createElem
let container8 = document.createElement('div'),
    input3 = document.createElement('input'),
    button3 = document.createElement('button'),
    button4 = document.createElement('button');

button3.innerHTML = 'Разблокировать';
button4.innerHTML = 'Заблокировать';

//addElem
document.body.append(container8);
container8.append(button3, button4, input3);

//addCSS
container8.style =  `
margin: 10px 0 0 0;
display: flex;
align-items: center;
justify-content: center;`;

//addEvent
button3.onclick = unlockInput;
button4.onclick = lockInput;

//addFunc
function lockInput() {
  return input3.setAttribute("disabled", "true");
}

function unlockInput() {
  return input3.removeAttribute("disabled");
}


/**
 * Задание 6
 * Создать 5 параграфов с числами(<p>5</p>).
 * По нажатию на параграф в нем должен появится квадрат числа, которое он содержит.
 *
 */

//createElem
let container9 = document.createElement('div'),
    p4 = document.createElement('p'),
    p5 = document.createElement('p'),
    p6 = document.createElement('p'),
    p7 = document.createElement('p'),
    p8 = document.createElement('p');

    p4.innerHTML = '1';
    p5.innerHTML = '2';
    p6.innerHTML = '3';
    p7.innerHTML = '4';
    p8.innerHTML = '5';

//addClass
p4.classList.add("paragraph");
p5.classList.add("paragraph");
p6.classList.add("paragraph");
p7.classList.add("paragraph");
p8.classList.add("paragraph");

//addElem
document.body.append(container9);
container9.append(p4, p5, p6, p7, p8);

//addCSS
container9.style =  `
margin: 10px 0 0 0;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;`;

//addFunc
container9.onclick = function(event) {
  let p = event.target.closest('.paragraph');

  if (!p) return; 

  if (!container9.contains(p)) return;

  return p.innerHTML = (p.innerHTML ** 2)
};

