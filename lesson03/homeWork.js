/**
 * Домашнее задание к занятию 3
 * Каждому нужно создать новую ветку от ветки master. Название ветки должно содержать имя + первая буква фамилии + /lesson03.
 * Например: dmitryR/lesson03. Выполнение задания производится в свое ветке и в этом файле.
 * После выполнения задания делаете пулл реквест и сообщаете о том, что задание выполнено:)
 * В случае неполодок с гитом, присылаете папку с проектом мне в личные сообщения
 * Код решения должен быть сразу же после самого задания
 */

/**
 * Задание 0
 * Создать объект пользователя интернет магазина,
 * объект должен содержать следущие поля: имя, email, нравятся ли ему фрукты, показатель IQ.
 * Созданный объект вывести в консоли.
 */
const user = {
  name: 'Petr',
  email: 'petr@mail.com',
  likeFruits: true,
  iq: 33,
};

console.log(user);

/**
 * Задание 1
 * Создайте объект дерево у которого есть следующие свойства:
 * название,
 * высота,
 * количество листьев,
 * семейство.
 *
 * Необходимо вывести в консоль объект, а затем "укоротить" дерево, и вывести в консоль.
 * Подсказка: посмотреть операторы += -=
 */
const tree = {
  name: 'applewood',
  height: 60,
  leaves: 10000,
  family: 'family1',
}

tree.height -= 20;

console.log(tree)
/**
 * Задание 2
 * Напишите цикл от 0 до 15. И в каждой итерации цикла нужно проверить четное число или нечетное.
 * И вывести в консоли, результат будет выглядеть примерно так:
 * 0 это четное
 * 1 это нечетное
 * ...
 */
for (let i = 0; i <= 15; i++) {
  if (i % 2 === 0) {
    console.log(`${i} это чётное`)
  }
  if (i % 2 !== 0) {
    console.log(`${i} это нечётное`)
  }
}

/**
 * Задание 3
 * У нас есть студентов: Вася, Зина, Катя, Петя, Вова. Они решали финальный тест
 * и процент выполнения теста таков: Вася - 80, Зина - 77, Катя - 88, Петя - 95, Вова - 57.
 * Оценки рассчитываются следующим образом:
 *
 * если процент > 90 - 5
 * если процент > 80 - 4
 * если процент > 70 - 3
 * если процент > 60 - 2
 *
 * Ответ вывести следующим образом:
 * Вася - 2,
 * Зина - 3
 * ...
 */
const studentsMarks = {
  'Вася': 80,
  'Зина': 77,
  'Катя': 88,
  'Петя': 95,
  'Вова': 57,
}

console.log(studentsMarks)

for (let key in studentsMarks) {
  if (studentsMarks[key] > 90) {
    console.log(`${key} - 5`)
  }
  else if (studentsMarks[key] > 80) {
    console.log(`${key} - 4`)
  }
  else if (studentsMarks[key] > 70) {
    console.log(`${key} - 3`)
  }
  else if (studentsMarks[key] > 60) {
    console.log(`${key} - 2`)
  }
}

/**
 * Задание 4
 * Написать цикл, который будет итерироватся от 1 до 100.
 * На каждой итерации цикла нужно проверить:
 * если число кратное 3 - то вывести в консоль строку Fizz,
 * если число кратное 5 - то вывести в консоль строку Buzz,
 * если число кратное и 3 и 5 - то вывести FizzBuzz
 */
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 !== 0) {
    console.log('Fizz')
  }
  else if (i % 5 === 0 && i % 3 !== 0) {
    console.log('Buzz')
  }
  else if (i % 3 === 0 && i % 5 === 0) {
    console.log('FizzBuzz')
  }
}

/**
 * Задание 5
 *
 * Нарисовать прямоугольный треугольник с длинной катетов i (любое число больше 1).
 * Для рисования использовать символ *(звездочка) или %(знак процента) и консоль.
 *
 */

//*
//**
//***
//****
let result = '';
for (let i = 0; i < 7; i++) {
  result += '*'
  console.log(result);
}

/**
 * Задание 6
 * Написать цикл от 0 до 1000. Высчитать сумму всех чисел кратных 4 и сумму всех чисел кратных 3.
 *
 */
let sum4 = 0;
let sum3 = 0;
for (let i = 0; i < 1000; i++) {
  if (i % 4 === 0) {
    sum4 += i;
  } else if (i % 3 === 0) {
    sum3 += i;
  }
}
console.log(`Сумма чисел кратных 4 = ${sum4}`)
console.log(`Сумма чисел кратных 3 = ${sum3}`)

/**
 * Задание 7
 * Написать программу, которая найдет наибольший общий делитель двух целых чисел и вывести это число в alert.
 *
 */
function nod(a, b) {
  while (a != 0 && b != 0) {
    if (a > b) {
      a = a % b;
    } else {
      b = b % a;
    }
  }
  return a + b;
}

/**
 * Задание 8
 * Создайте массив из 5 любых элементов.
 * Напишите программу, которая будет клонировать заданный массив, не изменяя оригинала.
 * Склонированный массив вывести в консоль
 *
 */
const array1 = [1, 2, 3, 4, 5]
const array2 = [...array1]
