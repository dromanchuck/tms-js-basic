/**
 * Домашнее задание к занятию 7
 * Каждому нужно создать новую ветку от ветки master. Название ветки должно содержать имя + первая буква фамилии + /lesson05.
 * Например: dmitryR/lesson07. Выполнение задания производится в свое ветке и в этом файле.
 * После выполнения задания делаете пулл реквест и сообщаете о том, что задание выполнено:)
 * В случае неполодок с гитом, присылаете папку с проектом мне в личные сообщения
 * Код решения должен быть сразу же после самого задания
 */

//ВНИМАНИЕ! К кажому заданию написать тесты(минимум 3)! Использовать функцию test из index.js или написать свою собственную функцию

/**
 * Задание 0
 * Написать функцию, которая вычислит минимальное значени всех аргументов функции и вернет это значение.
 * (Math.min использовать нельзя :-) )
 */
function findMin(...args) {
    let min = args.reduce((acc, curr) => {
      if (acc > curr) {
        return curr;
      }
      return acc;

    }, args[0]);
    return min;
    
  }
  let min = findMin(34, 11, -14, 356, 3911, -500);
  console.log(min);

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

  test(`Функция должна вывести минимальное число в аргументе`, findMin(34, 11, -14, 356, 3911, -500), -500);
  test(`Функция должна вывести минимальное число в аргументе`, findMin(34, 152, -14, 352346, -911, -500), -14);
  test(`Функция должна вывести минимальное число в аргументе`, findMin(34, 11, -14, 356, 3911, 500), -14);
  test(`Функция должна вывести минимальное число в аргументе`, findMin(34, 11, 3114, 356, 31, 552), 11);

/**
 * Задание 1
 * Сделать функцию, которая вычисляет разность между двумя числами и вернет разность.
 * Выполнить используя замыкание, результат должен выглядеть примерно так
 * let sub = substract(a)(b) // a - b
 */
function substract(a) {
    return function (b) {
      return a - b;
    };
  }
  let sub = substract(20)(18);

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
  test(`Функция должна вычислить разность двух чисел и вернуть разницу`, substract(20)(18), 2);
  test(`Функция должна вычислить разность двух чисел и вернуть разницу`, substract(200)(31), 68);
  test(`Функция должна вычислить разность двух чисел и вернуть разницу`, substract(-20)(-18), -2);
  test(`Функция должна вычислить разность двух чисел и вернуть разницу`, substract(1400)(12), 1388);
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
  return function user(userPassword) {
         return (userPassword === password);
  };
}
let checkPassword = makePassword("true");
console.log( "Введенный пароль: " + checkPassword(" false"));
console.log( "Введенный пароль: " + checkPassword(" true"));
/** Задание 3
 * Написать функцию, которая приобразуем любую строку в строку написанную кебаб кейсом (все буквы с маленькой буквы и на месте пробелов - тире)
 * Например:
 * 'Hello World' -> 'hello-world';
 * 'Hello dear hell' -> 'hello-dear-hell'
 */
let textKebabCase = (string) => {
  return string.replace(/\s+/g, '-').toLowerCase();
}
console.log(textKebabCase(`Hello World`));
console.log(textKebabCase(`hello-world`));
console.log(textKebabCase(`Hello dear hell`));
/**
 * Написать функцию, которая из любой фразы сделает вернет ее абревиатуру.
 *
 * 'Республика беларусь' -> 'РБ'
 * 'Минск' -> 'М'
 */
function substring(str) {
  return str.split( /\b(?=[a-z])/ig ).map( token => token[0] ).join( '' ).toUpperCase();
}
console.log(substring(`hello world`));

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

test(`Функция должна вывести аббревиатуру`, substring(`hello world`), `HW`);
test(`Функция должна вывести аббревиатуру`, substring(`gamardjoba Dima!`), `GD!`);
test(`Функция должна вывести аббревиатуру`, substring(`London is the capital of Great Britain`), `LISTCOGG`);
test(`Функция должна вывести аббревиатуру`, substring(`All cats are beautiful`), `ACAB`);