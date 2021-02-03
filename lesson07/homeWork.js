/**
 * Домашнее задание к занятию 7
 * Каждому нужно создать новую ветку от ветки master. Название ветки должно содержать имя + первая буква фамилии + /lesson05.
 * Например: dmitryR/lesson07. Выполнение задания производится в свое ветке и в этом файле.
 * После выполнения задания делаете пулл реквест и сообщаете о том, что задание выполнено:)
 * В случае неполодок с гитом, присылаете папку с проектом мне в личные сообщения
 * Код решения должен быть сразу же после самого задания
 */

//ВНИМАНИЕ! К кажому заданию написать тесты(минимум 3)! Использовать функцию test из index.js или написать свою собственную функцию

// function test(message, result, expectedResult) {
//     let status = result === expectedResult ? " Успех" : " Ошибка";
//     console.log(
//       message +
//         "----" +
//         "Результат: " +
//         result +
//         " ожидаемый результат " +
//         expectedResult +
//         "   status" +
//         status
//     );
//   }

/**
 * Задание 0 
 * Написать функцию, которая вычислит минимальное значени всех аргументов функции и вернет это значение.
 * (Math.min использовать нельзя :-) )
 */

// function findMin(...args) {
//     let min = args.reduce((acc, value) => {
//       if (acc > value) {
//         return value;
//       }
  
//       return acc;
//     }, args[0]);
  
//     return min;
//   }

//   console.log(findMin(1,2,3,-1));

// test("Минимальным числом должно быть -1", findMin(1,-1), -1);
// test("Минимальным числом должно быть 3", findMin(5,4,19,3), 3);
// test("Минимальным числом должно быть 6", findMin(10,12,6), 6);

/**
 * Задание 1
 * Сделать функцию, которая вычисляет разность между двумя числами и вернет разность.
 * Выполнить используя замыкание, результат должен выглядеть примерно так
 * let sub = substract(a)(b) // a - b
 */

//  function sub(a) {
//      return function(b) {
//         return a - b;
//      }
//  }

//  let sub2 = sub(6)(2);
//  console.log(sub2);

// test("Разность между числами должна быть 4", sub(6)(2), 4);
// test("Разность между числами должна быть 1", sub(2)(1), 1);
// test("Разность между числами должна быть 2", sub(1)(-1), 2);


/** 
 * Задание 2
 * Создайте замыкание: функция makePassword получает пароль в аргументе и возвращает
 * внутреннюю функцию, которая принимает введенную строку и возвращает булевое значение true,
 * если введенная строка совпадает с паролем и false – если не совпадает.
 * Пример выполнения функции:
 * let checkPassword = makePassword('somePassword'); //задаем пороль
 *
 * checkPassword('password') // возвращает false
 * checkPassword('somePassword')
 */

//  function makePassword(password) {

//      return function() {
//         if (password === 'hello') {
//             return true;
//         } else {
//             return false;
//         }
//      }
//  }

// test("Пароль совпал", makePassword('hello')(), true);
// test("Пароль не совпал", makePassword('lala')(), false);
// test("Пароль не совпал", makePassword(123)(), false);


/** Задание 3
 * Написать функцию, которая приобразуем любую строку в строку написанную кебаб кейсом (все буквы с маленькой буквы и на месте пробелов - тире)
 * Например:
 * 'Hello World' -> 'hello-world';
 * 'Hello dear hell' -> 'hello-dear-hell'
 */

// function kebab(str) {
//     return str.toLowerCase().split(' ').join('-');
// }

// console.log(kebab('Hello dear hell'));

// test("Строка написана кебаб кейсом", kebab('Hello dear hell'), 'hello-dear-hell');
// test("Строка написана кебаб кейсом", kebab('HELLO WORLD'), 'hello-world');
// test("Строка написана кебаб кейсом", kebab('Hello World'), 'hello-world');



/**
 * Написать функцию, которая из любой фразы сделает вернет ее абревиатуру.
 *
 * 'Республика беларусь' -> 'РБ'
 * 'Минск' -> 'М'
 */

//  function toAbbreviation(string) {
//     return string.split(' ').map(item => item[0].toUpperCase()).join('');
//  }

//  console.log(toAbbreviation('Republic Of Belarus'));

//  test("Аббревиатура получена верно", toAbbreviation('Republic Of Belarus'), 'ROB');
//  test("Аббревиатура получена верно", toAbbreviation('Rick And Morty'), 'RAM');
//  test("Аббревиатура получена верно", toAbbreviation('May The Forth Be With You'), 'MTFBWY');


//можешь рассказать как это работает? :)

// let str = "Republic Of Belarus";
// let matches = str.match(/\b(\w)/g);
// let abbreviation = matches.join('');

// console.log(abbreviation);

