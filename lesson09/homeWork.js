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


const button = document.createElement('button');
const paragraph = document.createElement('p');

button.textContent = 'Random number';
paragraph.innerHTML = '0';

paragraph.classList.add('paragraph');
button.classList.add('button');

document.body.append(paragraph);
document.body.append(button);

button.addEventListener('click', function () {
  const random =  Math.floor(Math.random() * 10);
  paragraph.innerHTML = random;
})



/**
 * Задание 2
 * Создать 2 инпута, 3 параграфа и кнопку. Разместить следующим образом:
 * инпут, параграф с текстом +, инпут, параграф с текстом =, параграф в котором будет размещаться результат.
 * И ниже разместить кнопку с текстом 'посчитать сумму'.
 * Сделать так, чтобы пожатию на кнопку, происходило подсчет введенных в инпуты чисел.
 */


const firstContainer = document.createElement('div');

const firstInput = document.createElement('input');
firstInput.setAttribute('type', 'number');

const firstParagraph = document.createElement('p');
firstParagraph.innerText = '+';

const secondInput = document.createElement('input');
secondInput.setAttribute('type', 'number');

const secondParagraph = document.createElement('p');
secondParagraph.innerText = '=';

const sumParagraph = document.createElement('p');
sumParagraph.innerText = '';

const sumButton = document.createElement('button');
sumButton.innerText = 'Sum';

firstContainer.append(firstInput, firstParagraph, secondInput, secondParagraph, sumParagraph);

document.body.append(firstContainer)
document.body.append(sumButton);

sumButton.addEventListener('click', () => {
  const result = +firstInput.value + +secondInput.value;
  sumParagraph.innerText = result;
});



/**
 * Задание 3
 * Получить элементы ссылки (a) из div с id = 3. Добавить кнопку с текстом 'Показать путь'.
 * Сделать так, чтобы по нажатию на кнопку, к тексту ссылки добавить путь и после чего убрать кнопку.
 * Например:
 * Ссылка с текстом 'Ссылка 1' после нажатия на кнопку текст меняется на 'Ссылка 1 (yandex.ru)'.
 */


const thirdDiv = document.getElementById('3');
const divLinks = document.querySelectorAll('div[id = "3"] > a');
const linksButton = document.createElement('button');
linksButton.innerText = 'Добавить путь';

thirdDiv.append(linksButton);

linksButton.addEventListener('click', () => {
  for (let link of divLinks) {
    const linkValue = link.getAttribute('href').slice(8);
    link.innerText += ` ${linkValue}`;
  };

  linksButton.remove()
});

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


const fourthDiv = document.getElementById('4');
const divExercise = document.querySelector('.exercise_4');
const allButtons = document.querySelectorAll('.exercise_4 > button');
const sortingButton = document.querySelector('.sorting_button');

sortingButton.addEventListener('click', () => {
  const buttonArray = [...allButtons];
  const sortButtonArray = buttonArray.sort((a, b) => a.innerHTML - b.innerHTML);

  fourthDiv.innerHTML = '';

  for (let button of sortButtonArray) {
    fourthDiv.appendChild(button);
  }
});


/** Задание 5
 * Создать 2 кнопки с текстами 'Заблокировать' и 'Разблокировать' и 1 инпут.
 * Сделать так, чтобы по нажатию на кнопку 'Заблокировать', input блокируется,
 * по нажатию на 'Разблокировать' input разблокируется. Использовать атрибут disabled для input.
 */

const fifthDiv = document.createElement('div');

const blockButton = document.createElement('button');
blockButton.innerText = 'Заблокировать';

const unblockButton = document.createElement('button');
unblockButton.innerText = 'Разблокировать';

const inputForBlock = document.createElement('input')

fifthDiv.append(blockButton, unblockButton, inputForBlock);

document.body.append(fifthDiv);

blockButton.addEventListener('click', () => {
  inputForBlock.setAttribute('disabled', '');
});

unblockButton.addEventListener('click', () => {
  inputForBlock.removeAttribute('disabled');
});


/**
 * Задание 6
 * Создать 5 параграфов с числами(<p>5</p>).
 * По нажатию на параграф в нем должен появится квадрат числа, которое он содержит.
 *
 */


const sixthDiv = document.createElement('div');

const paragraphOne = document.createElement('p');
paragraphOne.innerText = '1';

const paragraphTwo = document.createElement('p');
paragraphTwo.innerText = '2';

const paragraphThree = document.createElement('p');
paragraphThree.innerText = '3';

const paragraphFour = document.createElement('p');
paragraphFour.innerText = '4';

const paragraphFive = document.createElement('p');
paragraphFive.innerText = '5';

sixthDiv.append(paragraphOne, paragraphTwo, paragraphThree, paragraphFour, paragraphFive);

document.body.append(sixthDiv);

const arrayOfParagraphs = [paragraphOne, paragraphTwo, paragraphThree, paragraphFour, paragraphFive];

for (let number of arrayOfParagraphs) {
  number.addEventListener('click', () => {
    number.innerText = String(Number(number.innerText) ** 2);
  })
};