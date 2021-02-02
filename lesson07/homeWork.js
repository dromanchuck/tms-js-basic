/**
 * Домашнее задание к занятию 7
 * Каждому нужно создать новую ветку от ветки master. Название ветки должно содержать имя + первая буква фамилии + /lesson05.
 * Например: dmitryR/lesson07. Выполнение задания производится в свое ветке и в этом файле.
 * После выполнения задания делаете пулл реквест и сообщаете о том, что задание выполнено:)
 * В случае неполодок с гитом, присылаете папку с проектом мне в личные сообщения
 * Код решения должен быть сразу же после самого задания
 */

//ВНИМАНИЕ! К кажому заданию написать тесты(минимум 3)! Использовать функцию test из index.js или написать свою собственную функцию

function testToFuncMinArg(message,result,trueResult) {
    console.log(`${message} -- получилось: ${result} -- ожидалось: ${trueResult} -- Итог ${result == trueResult ? 'Успех' : 'Неудача'}`);;
}


/**
 * Задание 0
 * Написать функцию, которая вычислит минимальное значени всех аргументов функции и вернет это значение.
 * (Math.min использовать нельзя :-) )
 */

function minArg(...number) {
    return number.sort( (a, b) => a - b ).slice(0,1);
  }

testToFuncMinArg('Первый тест', minArg(19, 11, 12, 1 , 3, 0), 0);
testToFuncMinArg('Второй тест', minArg(19, 11, 12, 1 , 4), 1);
testToFuncMinArg('Третий тест', minArg(19, 11, 12, 100, 12, 111), 11);

  /**
 * Задание 1
 * Сделать функцию, которая вычисляет разность между двумя числами и вернет разность.
 * Выполнить используя замыкание, результат должен выглядеть примерно так
 * let sub = substract(a)(b) // a - b
 */
function diff(a,b) {
    let result;
    function make() {
        return result = a - b;
    }
    return make()
}

testToFuncMinArg('Первый тест', diff(9,1), 8);
testToFuncMinArg('Второй тест', diff(4,1), 3);
testToFuncMinArg('Третий тест', diff(1,1), 0);
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
    let realPassword = 'LowlyYl';
    function checkPassword() {
        return password === realPassword ? true : false;
    }
    return checkPassword();
 }
 console.log(makePassword('password'));

testToFuncMinArg('Первый тест', diff(9,1), 8);
testToFuncMinArg('Второй тест', diff(4,1), 3);
testToFuncMinArg('Третий тест', diff(1,1), 0);

/** Задание 3
 * Написать функцию, которая приобразуем любую строку в строку написанную кебаб кейсом (все буквы с маленькой буквы и на месте пробелов - тире)
 * Например:
 * 'Hello World' -> 'hello-world';
 * 'Hello dear hell' -> 'hello-dear-hell'
 */

function kebab(str) {
    let arr = str.toLowerCase().split('');
    let result = arr.map(item => item === ' ' ? item = '-' : item).join('');
    return result;
}

testToFuncMinArg('Первый тест', kebab('Teach me Skills'), 'teach-me-skills');
testToFuncMinArg('Второй тест', kebab('Артюшко Антон Викторович'), 'артюшко-антон-викторович');
testToFuncMinArg('Третий тест', kebab('Белоруский Государственный Технологический Университет'), 'белоруский-государственный-технологический-университет');

/**
 * Написать функцию, которая из любой фразы сделает вернет ее абревиатуру.
 *
 * 'Республика беларусь' -> 'РБ'
 * 'Минск' -> 'М'
 */

function abbreviation(str) {
    let arr = str.toUpperCase().split(' ');
    let result = arr.map(item => item.split('').slice(0,1)).join('');
    return result;
 }

testToFuncMinArg('Первый тест', abbreviation('Teach me Skills'), 'TMS');
testToFuncMinArg('Второй тест', abbreviation('Артюшко Антон Викторович'), 'ААВ');
testToFuncMinArg('Третий тест', abbreviation('Белоруский Государственный Технологический Университет'), 'БГТУ');
