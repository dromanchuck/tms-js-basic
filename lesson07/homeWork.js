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

function min(...args) {
    let array = args

    array.sort((a, b) => a - b)

    return array[0]
}

function test(message, result, expectedResult) {
    let status = result === expectedResult ? " Успех" : " Ошибка";
    console.log(
        message +
        " ---- " +
        "Результат: " +
        result +
        " ожидаемый результат " +
        expectedResult +
        "   status" +
        status
    );
}

test("Аргументы 8, 2, 3, 4, 5, -1 - должно вывести -1", min(8, 2, 3, 4, 5, -1), -1);
test("Аргументы 8, 2, 3, 4, 2, -5 - должно вывести -5", min(8, 2, 3, 4, -5, 2), -5);
test("Аргументы 0, 2, 3, 4, 11, 4 - должно вывести 0", min(0, 2, 3, 4, 11, 4), 0);

/**
 * Задание 1
 * Сделать функцию, которая вычисляет разность между двумя числами и вернет разность.
 * Выполнить используя замыкание, результат должен выглядеть примерно так
 * let sub = substract(a)(b) // a - b
 */

function diff(a) {
    return (b) => a - b
}

let difference = diff(5)(1)

test("diff(5)(1)", difference = diff(5)(1), 4);
test("diff(4)(2)", difference = diff(4)(2), 2);
test("diff(0)(-1)", difference = diff(0)(-1), 1);


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
    return function (str) {
        let status = str === password ? true : false;
        return status
    }
}

let checkPassword = makePassword('password')

test("makePassword('password')", checkPassword('password'), true)
test("makePassword('Nepassword')", checkPassword('Nepassword'), false)
test("makePassword('Upassword')", checkPassword('Upassword'), false)


/** Задание 3
 * Написать функцию, которая приобразуем любую строку в строку написанную кебаб кейсом (все буквы с маленькой буквы и на месте пробелов - тире)
 * Например:
 * 'Hello World' -> 'hello-world';
 * 'Hello dear hell' -> 'hello-dear-hell'
 */

function kebabCase(str) {

    let newPhrase = ''
    for (let char of str) {
        if (char === ' ') {
            newPhrase += '-'
        }
        else if (char === char.toUpperCase()) {
            newPhrase += char.toLowerCase()
        }
        else {
            newPhrase += char
        }
    }
    return newPhrase
}


test("kebabCase('Hello world')", kebabCase('Hello world'), 'hello-world')
test("kebabCase('Hello my World')", kebabCase('Hello my World'), 'hello-my-world')
test("kebabCase('Hi my gummy bears')", kebabCase('Hi my gummy bears'), 'hi-my-gummy-bears')


/**
 * Написать функцию, которая из любой фразы сделает вернет ее абревиатуру.
 *
 * 'Республика беларусь' -> 'РБ'
 * 'Минск' -> 'М'
 */


function abbreviation(phrase) {
    let newPhrase = ''
    for (let char of phrase) {
        if (char === ' ') {
            newPhrase += ''
        }
        else if (char === char.toUpperCase()) {
            newPhrase += char
        }
    }
    return newPhrase
}


test("abbreviation('Republic of Belarus')", abbreviation('Republic of Belarus'), 'RB')
test("abbreviation('Minsk')", abbreviation('Minsk'), 'M')
test("abbreviation('NASA')", abbreviation('NASA'), 'NASA')
