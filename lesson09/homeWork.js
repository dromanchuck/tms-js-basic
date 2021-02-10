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
const paragraph = document.createElement('p');
const button = document.createElement('button');
paragraph.textContent = '0';
button.textContent = 'get random number';
paragraph.classList.add('paragraph');
button.classList.add('button');

document.body.append(paragraph, button);

button.addEventListener('click', () => {
  const randomValue = Math.floor(Math.random() * 10);
  paragraph.textContent = randomValue;
})

/**
 * Задание 2
 * Создать 2 инпута, 3 параграфа и кнопку. Разместить следующим образом:
 * инпут, параграф с текстом +, инпут, параграф с текстом =, параграф в котором будет размещаться результат.
 * И ниже разместить кнопку с текстом 'посчитать сумму'.
 * Сделать так, чтобы пожатию на кнопку, происходило подсчет введенных в инпуты чисел.
 */
const secondContainer = document.createElement('div');
secondContainer.classList.add('second-container');
const input1 = document.createElement('input');
const input2 = document.createElement('input');
const plusText = document.createElement('p');
plusText.textContent = '+';
const equalsText = document.createElement('p');
equalsText.textContent = '=';
const result = document.createElement('p');

const resultBtn = document.createElement('button');
resultBtn.classList.add('result-btn');
resultBtn.textContent = 'посчитать сумму';

secondContainer.append(input1, plusText, input2, equalsText, result);
document.body.append(secondContainer, resultBtn);

resultBtn.addEventListener('click', () => {
  const sum = +input1.value + +input2.value;
  result.textContent = sum;
})



/**
 * Задание 3
 * Получить элементы ссылки (a) из div с id = 3. Добавить кнопку с текстом 'Показать путь'.
 * Сделать так, чтобы по нажатию на кнопку, к тексту ссылки добавить путь и после чего убрать кнопку.
 * Например:
 * Ссылка с текстом 'Ссылка 1' после нажатия на кнопку текст меняется на 'Ссылка 1 (yandex.ru)'.
 */

 const links = document.querySelectorAll('a');
 links.forEach((link) => {
   const button = document.createElement('button');
   button.addEventListener('click', showPath);
   button.textContent = 'Показать путь';

   link.after(button);
 });

function showPath(event) {
  const link = event.target.previousSibling;
  linkPath = ` (${link.href.slice(8, -1)})`;
  link.textContent += linkPath;
  event.target.remove();
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
const block4 = document.getElementById('4');
const buttonsForSort = block4.querySelectorAll('.exercise_4 button');
const sortBtn = document.querySelector('.sort');
sortBtn.addEventListener('click', () => {
  const sortedButtons = [...buttonsForSort].sort((a, b) => a.innerText - b.innerText);
  buttonsForSort.forEach((b) => b.remove());
  block4.children[0].append(...sortedButtons);
})

/** Задание 5
 * Создать 2 кнопки с текстами 'Заблокировать' и 'Разблокировать' и 1 инпут.
 * Сделать так, чтобы по нажатию на кнопку 'Заблокировать', input блокируется,
 * по нажатию на 'Разблокировать' input разблокируется. Использовать атрибут disabled для input.
 */

 const input5 = document.createElement('input');
 const lockBtn = document.createElement('button');
 lockBtn.textContent = 'Заблокировать';
 const unLockkBtn = document.createElement('button');
 unLockkBtn.textContent = 'Разблокировать';

 document.body.append(input5, lockBtn, unLockkBtn);

 lockBtn.addEventListener('click', () => {
   input5.disabled = true;
 });

 unLockkBtn.addEventListener('click', () => {
  input5.disabled = false;
});

/**
 * Задание 6
 * Создать 5 параграфов с числами(<p>5</p>).
 * По нажатию на параграф в нем должен появится квадрат числа, которое он содержит.
 *
 */

 const paragraphContainer = document.createElement('div');

 for (let i = 1; i <= 5; i++) {
   const paragraph = document.createElement('p');
   paragraph.textContent = i;
   paragraphContainer.append(paragraph);
   paragraph.addEventListener('click', () => {
     paragraph.textContent = Number(paragraph.textContent) ** 2;
   })
 }
 document.body.append(paragraphContainer);
