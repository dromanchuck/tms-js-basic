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

let btn = document.createElement('button');
let p = document.createElement('p');

btn.innerText = 'Get number';
p.innerText = '0';

document.body.append(p, btn);

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

btn.addEventListener('click', function() {
    let newText = String(getRndInteger(0, 10));
    p.innerText = newText;
});

/**
 * Задание 2
 * Создать 2 инпута, 3 параграфа и кнопку. Разместить следующим образом:
 * инпут, параграф с текстом +, инпут, параграф с текстом =, параграф в котором будет размещаться результат.
 * И ниже разместить кнопку с текстом 'посчитать сумму'.
 * Сделать так, чтобы пожатию на кнопку, происходило подсчет введенных в инпуты чисел.
 */

let input1 = document.createElement('input');
let input2 = document.createElement('input');
let button = document.createElement('button');
let p1 = document.createElement('p');
let p2 = document.createElement('p');
let p3 = document.createElement('p');
let divContainer = document.createElement('div');

input1.setAttribute('type', 'number');
input2.setAttribute('type', 'number');

p1.innerText = '+';
p2.innerText = '=';
p3.innerText = '';
button.innerText = 'Get sum'

divContainer.append(input1, p1, input2, p2, p3);
divContainer.style.display = 'flex';
document.body.append(divContainer);
document.body.append(button);

button.addEventListener('click', function() {
    p3.innerText = +input1.value + +input2.value;
})

/**
 * Задание 3
 * Получить элементы ссылки (a) из div с id = 3. Добавить кнопку с текстом 'Показать путь'.
 * Сделать так, чтобы по нажатию на кнопку, к тексту ссылки добавить путь и после чего убрать кнопку.
 * Например:
 * Ссылка с текстом 'Ссылка 1' после нажатия на кнопку текст меняется на 'Ссылка 1 (yandex.ru)'.
 */

let div = document.body.querySelector('div[id="3"]');
let links = document.body.querySelectorAll('div[id="3"] > a');
let btn2 = document.createElement('button');

btn2.innerText = 'Добавить путь';
div.append(btn2);

btn2.addEventListener('click', function() {
    for (let link of links) {
        let linkForText = link.getAttribute('href').slice(8);
        link.innerText = link.innerText + ` (${linkForText})`;
    };
    btn2.remove()
});

/**

 * Задание 4

 * Получить элемент с id = 4. *
      < div id = "4" >
        <div class = "exercise_4" >
        <
        button > 5 < /button> <
        button > 6 < /button> <
        button > 3 < /button> <
        button > 8 < /button> <
        button > 1 < /button> <
        button > 9 < /button> <
        button > 10 < /button> <
        button > 9 < /button> <
        button > 15 < /button> <
        button > 0 < /button> <
        button > 10 < /button> <
        button > 90 < /button> <
        button > 100 < /button> <
        button > 2 < /button> <
        button > 3 < /button> <
        /div> <
        button > Отсортировать < /button> <
        /div> *
        *
  Сделать так, чтобы по нажатию на кнопку Отсортировать, кнопки были отсортированы по возрастанию.*
   */

let div1 = document.getElementById('4');

let div2 = document.querySelector('.exercise_4');
let btnsWithNumbers = document.querySelectorAll('.exercise_4 > button');

let sortButton = div1.lastElementChild;

sortButton.addEventListener('click', function() {
    let arr = [...btnsWithNumbers];
    let sortedArr = arr.sort((a, b) => a.innerHTML - b.innerHTML);
    div2.innerHTML = '';
    for (let btn of sortedArr) {
        div2.appendChild(btn)
    }
})

/** Задание 5
 * Создать 2 кнопки с текстами 'Заблокировать' и 'Разблокировать' и 1 инпут.
 * Сделать так, чтобы по нажатию на кнопку 'Заблокировать', input блокируется,
 * по нажатию на 'Разблокировать' input разблокируется. Использовать атрибут disabled для input.
 */

let btn3 = document.createElement('button');
let btn4 = document.createElement('button');
let input3 = document.createElement('input');

let divContainer2 = document.createElement('div');

btn3.innerText = 'Заблокировать';
btn4.innerText = 'Разблокировать';

divContainer2.append(input3, btn3, btn4);
divContainer2.style.display = 'flex';

document.body.append(divContainer2);

btn3.addEventListener('click', function() {
    input3.setAttribute('disabled', '')
});

btn4.addEventListener('click', function() {
    input3.removeAttribute('disabled')
});


/**
 * Задание 6
 * Создать 5 параграфов с числами(<p>5</p>).
 * По нажатию на параграф в нем должен появится квадрат числа, которое он содержит.
 *
 */

let p4 = document.createElement('p');
let p5 = document.createElement('p');
let p6 = document.createElement('p');
let p7 = document.createElement('p');
let p8 = document.createElement('p');

let divContainer3 = document.createElement('div');

p4.innerText = '2';
p5.innerText = '3';
p6.innerText = '4';
p7.innerText = '11';
p8.innerText = '9';

divContainer3.append(p4, p5, p6, p7, p8);
document.body.append(divContainer3);
divContainer3.style.display = 'flex';

let array = [p4, p5, p6, p7, p8];

for (let num of array) {
    num.style.marginRight = '10px';
    num.addEventListener('click', function() {
        num.innerText = String(Number(num.innerText) ** 2);
    });
}