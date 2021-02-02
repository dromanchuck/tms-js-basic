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

/** вообще эта фраза пишется только один раз в самом верху файла,
 * но для удобства дублирую ее в каждом задании 
 */

const assert = require('assert'); 

function arrayMin(...arr) {
    return arr.reduce((a, b) => {
      return ( a < b ? a : b )
    });
};
  
assert.equal(arrayMin(7, 10, 2), 2);
assert.equal(arrayMin(-2, 1, 7), -2);
assert.equal(arrayMin(96, 12, 7), 7);


/**
 * Задание 1
 * Сделать функцию, которая вычисляет разность между двумя числами и вернет разность.
 * Выполнить используя замыкание, результат должен выглядеть примерно так
 * let sub = substract(a)(b) // a - b
 */

const assert = require('assert');

function difference(a) {

    return (b) => {
        if (a === b) {
            return 'Числа равны'
        } else if (a > b) {
            return a - b
        } else {
            return b - a
        }
    }
};

let diff = difference(4)(6);

assert.equal(diff = difference(4)(6),2);
assert.equal(diff = difference(4)(1),3);
assert.equal(diff = difference(5)(5),'Числа равны');


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

const assert = require('assert');

function makePassword(password) {

    return (str) => {
        if (password === str) {
            return true
        } else {
            return false
        }
    }
};

let checkPassword = makePassword('somePassword');

assert.equal(checkPassword('somePassword'), true);
assert.equal(checkPassword('some'), false);
assert.equal(checkPassword('Password'), false);

/** Задание 3
 * Написать функцию, которая приобразуем любую строку в строку написанную кебаб кейсом (все буквы с маленькой буквы и на месте пробелов - тире)
 * Например:
 * 'Hello World' -> 'hello-world';
 * 'Hello dear hell' -> 'hello-dear-hell'
 */


/** Если сразу писать проверку на teUpperCase, а потом на пробел/замена на тире, 
 * то не сработает замена на тире)
 */

const assert = require('assert');

function notKebabCase(str) {

    return str.split(' ').map((value) => value.toLowerCase()).join('-')
};

assert.equal(notKebabCase('Hi Friend'), 'hi-friend');
assert.equal(notKebabCase('It Is My Life'), 'it-is-my-life');
assert.equal(notKebabCase('I Like My Car'), 'i-like-my-car');


/**
 * Написать функцию, которая из любой фразы сделает вернет ее абревиатуру.
 *
 * 'Республика беларусь' -> 'РБ'
 * 'Минск' -> 'М'
 */

const assert = require('assert');

function abbreviation(str) {
    return str.split(' ').map((value) => value[0].toUpperCase()).join('-')
};

assert.equal(abbreviation('happy cat'), 'HC');
assert.equal(abbreviation('Volkswagen A G'), 'VAG');
assert.equal(abbreviation('Скоро закончится зима'), 'СЗЗ');



