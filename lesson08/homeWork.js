/**
 * Домашнее задание к занятию 8
 * Каждому нужно создать новую ветку от ветки master. Название ветки должно содержать имя + первая буква фамилии + /lesson08.
 * Например: dmitryR/lesson08. Выполнение задания производится в свое ветке и в этом файле.
 * После выполнения задания делаете пулл реквест и сообщаете о том, что задание выполнено:)
 * В случае неполодок с гитом, присылаете папку с проектом мне в личные сообщения
 * Код решения должен быть сразу же после самого задания
 */

//Внимание! Верстку для заданий использовать файл index.html

/**
 * Задание №1
 * 
 * Получить элемент 
 * <div id="unordered_list" class="ordered_list">
      <ul>
        <li>Fourth</li>
        <li>Fourth</li>
      </ul>
    </div> 
    тремя способами.
 *
 */
const list = document.querySelectorAll('.ordered_list')[1];
const list2 = document.querySelector('#unordered_list');
const list3 = document.getElementById('unordered_list');
console.log(list, list2, list3);

/**
 * Задание №2
 * Получить кнопку с текстом click. Сделать так, чтобы по нажатию на кнопку вызывался alert('Hello!!!');
 *
 */
const button = document.querySelector('.click-btn');
button.addEventListener('click', () => alert('Hello!!!'))

/**
 * Задание №3
 * Получить все кнопки из index.html. Изменить у каждой кнопки шрифт, размер и сделать в тексте все буквы большими (click -> CLICK);
 *
 */
const buttons = document.querySelectorAll('button');
buttons.forEach((item) => {
  item.style = `
    font-size: 25px;
    padding: 5px 10px;
  `;
  item.textContent = item.textContent.toUpperCase()
})

/**
 * Задание №4
 * Получить все элементы li c классом list_item. Изменить стиль(использовать inline стили и добавление класса).
 * Сделать все буквы маленькими у каждого текстого узла li. Добавить каждому li кнопку c текстом ok.
 *
 */

const listItems = document.querySelectorAll('.list_item');
listItems.forEach((item) => {
  const buttonOk = document.createElement('button');
  buttonOk.append('ok');

  item.style = `
    font-size: 20px;
    color: blue;
  `;
  item.classList.add('lowercase');
  item.append(buttonOk);
})

/**
 * Задание 5
 * Создать элементы input и button добавить их в верстку файла index.html. Сделать так. чтобы по нажатию на
 * кнопку текст преобразовывался в кэмэл кейс.
 * Например:
 * 'Введенный текст' -> 'введенныйТекст'
 * 'CaMel CaSe -> camelCase
 * front END -> frontEnd
 *
 */
const camelCaseInput = document.querySelector('.camel-case');
const camelCaseBtn = document.querySelector('.camel-case-btn');
const toCamelCase = (text) => {
  return text.split(' ')
    .map((word, index) => {
    if (index === 0) {
      return word.toLowerCase();
    } else {
      return word
        .split('')
        .map((item, i) => i === 0 ? item.toUpperCase() : item.toLowerCase())
        .join(''); 
    } 
  }).join('')
}

camelCaseBtn.addEventListener('click', () => {
  const inputText = camelCaseInput.value;
  camelCaseInput.value = toCamelCase(inputText);
})

/**
 * Задание 6
 * Создать элементы 2 input'a и button добавить их в верстку файла index.html. Сделать так,
 * чтобы по нажатию на кнопку введенные тексты менялись местами.
 * Инпут1: 'Hello'
 * Инпут2: 'World'
 * Нажатие на кнопку
 * Инпут1: 'World'
 * Инпут2: 'Hello'
 */
const changeInput1 = document.querySelector('.change-input-1');
const changeInput2 = document.querySelector('.change-input-2');
const changeBtn = document.querySelector('.change-btn');

changeBtn.addEventListener('click', () => {
  const changeInput1Value = changeInput1.value;
  changeInput1.value = changeInput2.value;
  changeInput2.value = changeInput1Value;
})
/**
 * Задание 7
 * Написать код, который будет каждую минуту будет менять цвет у страницы. Цвет должен генерироваться рандомно.
 *
 */
const random = () => {
  return Math.floor(Math.random() * 255)
}

const cnangeBg = () => {
  const color = 'rgb(' + random() + "," + random() + "," + random() + ')';
  document.body.style = `
    background: ${color}
  `
}

setInterval(cnangeBg, 600);
