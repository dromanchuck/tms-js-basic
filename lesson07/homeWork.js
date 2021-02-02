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

function getMin() {
    let array = Array.from(arguments)
    let min = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] <= min) {
            min = array[i]
        }
    }
    return min
}

test("Аргументы 2, 5, -1, 0, 6", getMin(2, 5, -1, 0, 6), -1);
test("Аргументы 2, 5, -1, 0, -5", getMin(2, 5, -1, 0, -5), -5);
test("Аргументы 1, 12, 0, 6, 4", getMin(1, 12, 2, 6, 4), 1);

/**
 * Задание 1
 * Сделать функцию, которая вычисляет разность между двумя числами и вернет разность.
 * Выполнить используя замыкание, результат должен выглядеть примерно так
 * let sub = substract(a)(b) // a - b
 */

function getSubstract(a) {
    return function(b) {
        return a - b
    }
}

test("Разность чисел a = 2 и b = 1", getSubstract(2)(1), 1);
test("Разность чисел a = 7 и b = 10", getSubstract(7)(10), -3);
test("Разность чисел a = 12 и b = 1", getSubstract(12)(1), 11);

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
    return function() {
        let somePassword = prompt('Введите пароль', '');
        if (password === somePassword) {
            return true
        } else {
            return false
        }
    }
}

test("Проверка пароля. Введенный пароль 12345true", makePassword('12345true')(), true);
test("Проверка пароля. Введенный пароль 12345false", makePassword('12345true')(), false);
test("Проверка пароля. Введенный пароль 12345false", makePassword('12345false')(), true);

/** Задание 3
 * Написать функцию, которая приобразуем любую строку в строку написанную кебаб кейсом (все буквы с маленькой буквы и на месте пробелов - тире)
 * Например:
 * 'Hello World' -> 'hello-world';
 * 'Hello dear hell' -> 'hello-dear-hell'
 */

function transformString(string) {
    return string.toLowerCase().split(' ').join('-')
}

test("Преобразование строки 'Hello World'", transformString('Hello World'), 'hello-world');
test("Преобразование строки 'Hello dear hell'", transformString('Hello dear hell'), 'hello-dear-hell');
test("Преобразование строки 'I love JS'", transformString('I love JS'), 'i-love-js');

/**
 * Написать функцию, которая из любой фразы сделает вернет ее абревиатуру.
 *
 * 'Республика беларусь' -> 'РБ'
 * 'Минск' -> 'М'
 */

function cutString(string) {
    return string.split(' ').map(value => value[0].toUpperCase()).join('')
}

test("Преобразование строки 'Best friends forever'", cutString('Best friends forever'), 'BFF');
test("Преобразование строки 'Hello dear hell'", cutString('Hello dear hell'), 'HDH');
test("Преобразование строки 'Hello world'", cutString('Hello world'), 'HW');