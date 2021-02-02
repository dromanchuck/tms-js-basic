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
  let status = result === expectedResult ? 'true :)' : 'false :(';
  console.log(
    message +
      '. ' +
      'Результат: ' +
      result +
      ', ожидаемый результат ' +
      expectedResult +
      ', status - ' +
      status
  );
}

/**
 * Задание 0
 * Написать функцию, которая вычислит минимальное значени всех аргументов функции и вернет это значение.
 * (Math.min использовать нельзя :-) )
 */

function task0(...args) {
  return [...args].sort((a, b) => a - b)[0];
}

test(
  'Вывод минимального из переданных в функцию значений',
  task0(8, 9, -8, 16, -9, 154, -99, 0),
  -99
);
test(
  'Вывод минимального из переданных в функцию значений',
  task0(8.2, 19, -28, 156, -9, -154, -929, 17),
  -929
);
test(
  'Вывод минимального из переданных в функцию значений',
  task0(1, 9, 8, -16, -29, 14, -9, 22),
  -29
);

/**
 * Задание 1
 * Сделать функцию, которая вычисляет разность между двумя числами и вернет разность.
 * Выполнить используя замыкание, результат должен выглядеть примерно так
 * let sub = substract(a)(b) // a - b
 */

function task1(a) {
  return function (b) {
    return a - b;
  };
}

test('Разность двух чисел', task1(8)(9), -1);
test('Разность двух чисел', task1(7)(2), 5);
test('Разность двух чисел', task1(2)(2), 0);

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

function task2(pwd) {
  const password = pwd;
  return (auth) => password === auth;
}

let checkPassword = task2('1231');

test('Проверка пароля #1', checkPassword('1231'), true);
test('Проверка пароля #2', checkPassword('131'), false);
test('Проверка пароля #3', checkPassword('123q1'), false);

/** Задание 3
 * Написать функцию, которая приобразуем любую строку в строку написанную кебаб кейсом (все буквы с маленькой буквы и на месте пробелов - тире)
 * Например:
 * 'Hello World' -> 'hello-world';
 * 'Hello dear hell' -> 'hello-dear-hell'
 */

function task3(str) {
  return str
    .split(' ')
    .map((val) => val.toLowerCase())
    .join('-');
}

test(
  'Перевод строки в kebab-case',
  task3('Home sweet home'),
  'home-sweet-home'
);
test(
  'Перевод строки в kebab-case',
  task3('не могу придумать нормальную фразу'),
  'не-могу-придумать-нормальную-фразу'
);
test(
  'Перевод строки в kebab-case',
  task3('Все еще Не могу Придумать нормальную Фразу'),
  'все-еще-не-могу-придумать-нормальную-фразу'
);

/**
 * Написать функцию, которая из любой фразы сделает вернет ее абревиатуру.
 *
 * 'Республика беларусь' -> 'РБ'
 * 'Минск' -> 'М'
 */

function task4(str) {
  return str
    .split(' ')
    .map((val) => val[0].toUpperCase())
    .join('');
}

test('Вывод аббревиатуры', task4('Республика Казахстан'), 'РК');
test('Вывод аббревиатуры', task4('Arsenal Football Club'), 'AFC');
test('Вывод аббревиатуры', task4('неопознанный летающий объект'), 'НЛО');
