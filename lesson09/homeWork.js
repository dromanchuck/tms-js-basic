/**
 * Домашнее задание к занятию 9
 * Каждому нужно создать новую ветку от ветки master. Название ветки должно содержать имя + первая буква фамилии + /lesson09.
 * Например: dmitryR/lesson09. Выполнение задания производится в свое ветке и в этом файле.
 * После выполнения задания делаете пулл реквест и сообщаете о том, что задание выполнено:)
 * В случае неполодок с гитом, присылаете папку с проектом мне в личные сообщения
 * Код решения должен быть сразу же после самого задания
 */

//Внимание! Верстку для заданий использовать файл index.html

let br = document.createElement('br');

/**
 * Задание 1
 * Создать кнопку и параграф с текстом '0'. Сделать так, чтобы по нажатию
 * на кнопку, в параграф вставлялась рандомная цифра от 0 до 10.
 */

let button1 = document.createElement('button');
let p1 = document.createElement('p');

document.body.append(p1, button1);

button1.innerText = 'Вставляем рандомное ЧИСЛО';
p1.innerText = '0';

button1.addEventListener('click', () => {
  p1.innerText = Math.round(Math.random() * 10);
});

/**
 * Задание 2
 * Создать 2 инпута, 3 параграфа и кнопку. Разместить следующим образом:
 * инпут, параграф с текстом +, инпут, параграф с текстом =, параграф в котором будет размещаться результат.
 * И ниже разместить кнопку с текстом 'посчитать сумму'.
 * Сделать так, чтобы пожатию на кнопку, происходило подсчет введенных в инпуты чисел.
 */

let div2 = document.createElement('div');
let button2 = document.createElement('button');
let p2_1 = document.createElement('p');
let p2_2 = document.createElement('p');
let p2_3 = document.createElement('p');
let input2_1 = document.createElement('input');
let input2_2 = document.createElement('input');

input2_1.setAttribute('type', 'number');
input2_2.setAttribute('type', 'number');

p2_1.innerText = '+';
p2_2.innerText = '=';
button2.innerText = 'Посчитать сумму';
div2.append(input2_1, p2_1, input2_2, p2_2, p2_3);
document.body.append(div2, button2);
div2.style.display = 'flex';

button2.addEventListener('click', () => {
  p2_3.innerText = +input2_1.value + +input2_2.value;
});

/**
 * Задание 3
 * Получить элементы ссылки (a) из div с id = 3. Добавить кнопку с текстом 'Показать путь'.
 * Сделать так, чтобы по нажатию на кнопку, к тексту ссылки добавить путь и после чего убрать кнопку.
 * Например:
 * Ссылка с текстом 'Ссылка 1' после нажатия на кнопку текст меняется на 'Ссылка 1 (yandex.ru)'.
 */

let div3 = document.getElementById('3');

let links3 = [...div3.children];

links3.forEach((item) => item.after(document.createElement('button')));
links3.forEach((item) => (item.nextSibling.innerText = 'Показать путь'));
links3.forEach((item) =>
  item.nextSibling.addEventListener('click', () => {
    item.append(` (${item.getAttribute('href').replace('https://', '')})`);
    item.nextSibling.remove();
  })
);

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

let div4 = document.getElementById('4');
div4.lastElementChild.addEventListener('click', () => {
  let kek = [...[...div4.children][0].children].sort(
    (a, b) => a.textContent - b.textContent
  );
  div4.children[0].innerHTML = '';
  for (let i = 0; i < kek.length; i++) {
    div4.children[0].append(kek[i]);
  }
});

/** Задание 5
 * Создать 2 кнопки с текстами 'Заблокировать' и 'Разблокировать' и 1 инпут.
 * Сделать так, чтобы по нажатию на кнопку 'Заблокировать', input блокируется,
 * по нажатию на 'Разблокировать' input разблокируется. Использовать атрибут disabled для input.
 */

let input5 = document.createElement('input');
let btn5_1 = document.createElement('button');
let btn5_2 = document.createElement('button');

btn5_1.innerText = 'Заблокировать';
btn5_2.innerText = 'Разблокировать';

document.body.append(br, input5, btn5_1, btn5_2);

btn5_1.onclick = () => input5.setAttribute('disabled', '');
btn5_2.onclick = () => input5.removeAttribute('disabled');

/**
 * Задание 6
 * Создать 5 параграфов с числами(<p>5</p>).
 * По нажатию на параграф в нем должен появится квадрат числа, которое он содержит.
 *
 */

let p6_1 = document.createElement('p');
let p6_2 = document.createElement('p');
let p6_3 = document.createElement('p');
let p6_4 = document.createElement('p');
let p6_5 = document.createElement('p');

let arr6 = [p6_1, p6_2, p6_3, p6_4, p6_5];

for (let i = 1, j = 0; i <= arr6.length; i++, j++) {
  arr6[j].innerText = '' + i;
  arr6[j].onclick = () => {
    arr6[j].innerText = String(Number(arr6[j].textContent) ** 2);
  };
}

document.body.append(p6_1, p6_2, p6_3, p6_4, p6_5);
