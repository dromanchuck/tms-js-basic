/**
 * Домашнее задание к занятию 7
 * Каждому нужно создать новую ветку от ветки master. Название ветки должно содержать имя + первая буква фамилии + /lesson05.
 * Например: dmitryR/lesson07. Выполнение задания производится в свое ветке и в этом файле.
 * После выполнения задания делаете пулл реквест и сообщаете о том, что задание выполнено:)
 * В случае неполодок с гитом, присылаете папку с проектом мне в личные сообщения
 * Код решения должен быть сразу же после самого задания
 */

//ВНИМАНИЕ! К кажому заданию написать тесты(минимум 3)! Использовать функцию test из index.js или написать свою собственную функцию

function test(message, result, expectedResult) {
  let status = result === expectedResult ? " Успех" : " Ошибка";
  console.log(
    message +
      "----" +
      "Результат: " +
      result +
      " ожидаемый результат " +
      expectedResult +
      "   status" +
      status
  );
}
/**
 * Задание 0
 * Написать функцию, которая вычислит минимальное значени всех аргументов функции и вернет это значение.
 * (Math.min использовать нельзя :-) )
 */
function findMin(...args) {
  let min = args[0]
  for (let i = 0; i < args.length; i++) {
    if  (args[i] < min) {
      min = args[i]
    }
  }
  return min
}

test("аргументы 5, 2, 6, 9, 8", findMin(5, 2, 6, 9, 8), 2);
test("аргументы 5, 89, 90, 10, 8", findMin(5, 89, 90, 10, 8), 5);
test("аргументы 0, 1, 55, 98, -85", findMin(0, 1, 55, 98, -85), -89);

/**
 * Задание 1
 * Сделать функцию, которая вычисляет разность между двумя числами и вернет разность.
 * Выполнить используя замыкание, результат должен выглядеть примерно так
 * let sub = substract(a)(b) // a - b
 */
function substract(a) {
  return function(b) {
    return a - b
  }
}

test("разность чисел 10 и 5, должно вывести 5", substract(10)(5), 5);
test("разность чисел -80 и 5, должно вывести -85", substract(-80)(5), -85);
test("разность чисел 100 и 8, должно вывести 92", substract(100)(8), 92);


/**
 * Задание 2
 * Создайте замыкание: функция makePassword получает пароль в аргументе и возвращает
 * внутреннюю функцию, которая принимает введенную строку и возвращает булево значение true,
 * если введенная строка совпадает с паролем и false – если не совпадает.
 * Пример выполнения функции:
 * let checkPassword = makePassword('somePassword'); //задаем пороль
 *
 * checkPassword('password') // возвращает false
 * checkPassword('somePassword')
 */
function makePassword(password) {
  return function checkPassword(passwordForCheck) {
    return password === passwordForCheck ? true : false;
  }
}

let checkPassword = makePassword('somePassword')

test("password somePassword", checkPassword('somePassword'), true);
test("password somePassword", checkPassword('123456'), false);
test("password somePassword", checkPassword('d;kajodfhowa'), false);



/** Задание 3
 * Написать функцию, которая приобразуем любую строку в строку написанную кебаб кейсом (все буквы с маленькой буквы и на месте пробелов - тире)
 * Например:
 * 'Hello World' -> 'hello-world';
 * 'Hello dear hell' -> 'hello-dear-hell'
 */
function toCebabCase(str) {
  return str.toLowerCase()
  .split('')
  .map((item) => item === ' ' ? '-' : item)
  .join('')
}
test("Hello World", toCebabCase('Hello World'), 'hello-world');
test("Hello dear hell", toCebabCase('Hello World'), 'hello-dear-hell');
test("JS is the Best", toCebabCase('JS is the Best'), 'js-is-the-best');



/**
 * Написать функцию, которая из любой фразы сделает вернет ее абревиатуру.
 *
 * 'Республика беларусь' -> 'РБ'
 * 'Минск' -> 'М'
 * 
 */
function getAbbreviation(str) {
  return str.split(' ')
    .map((word) => word[0].toUpperCase())
    .join('')
}

test("Республика беларусь", getAbbreviation('Республика беларусь'), 'РБ');
test("Минск", getAbbreviation('Минск'), 'М');
test("Объединенные Арабские Эмираты", getAbbreviation('Объединенные Арабские Эмираты'), 'ОАЭ');


