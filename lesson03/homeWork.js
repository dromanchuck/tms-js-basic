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

let user = {
  name: 'Ilya',
  email: 'Ilya@gmail.com',
  likesFruits: true,
  iq: 200,
}

console.log(user)

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

let tree = {
  name: 'pine',
  height: 100,
  leavesNumber: 1000,
  family: 'pine family',
}

console.log(tree)

tree.height -= 20

console.log(tree)

/**
 * Задание 2
 * Напишите цикл от 0 до 15. И в каждой итерации цикла нужно проверить четное число или нечетное.
 * И вывести в консоли, результат будет выглядеть примерно так:
 * 0 это четное
 * 1 это нечетное
 * ...
 */

const evenOrNot = () => {
  for (let i = 0; i <= 15; i++) {
    if (i % 2 === 0) {
      console.log(`${i} это чётное число.`)
    } else {
      console.log(`${i} это нечётное число.`)
    }
  }
}

evenOrNot()

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

let students = {
  Вася: 80,
  Зина: 77,
  Катя: 88,
  Петя: 95,
  Вова: 57,
}

const finalMarks = () => {
  for (let key in students) {
    if (students[key] > 90) {
      console.log(`${key} - 5`)
    } else if (students[key] > 80) {
      console.log(`${key} - 4`)
    } else if (students[key] > 70) {
      console.log(`${key} - 3`)
    } else if (students[key] > 60) {
      console.log(`${key} - 2`)
    } else if (students[key] > 50) {
      console.log(`${key} - 1`)
    }
  }
}

finalMarks()

/**
 * Задание 4
 * Написать цикл, который будет итерироватся от 1 до 100.
 * На каждой итерации цикла нужно проверить:
 * если число кратное 3 - то вывести в консоль строку Fizz,
 * если число кратное 5 - то вывести в консоль строку Buzz,
 * если число кратное и 3 и 5 - то вывести FizzBuzz
 */

const fizzBuzz = () => {
  for (let i = 0; i <= 1000; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('FizzBuzz')
    } else if (i % 3 === 0) {
      console.log('Fizz')
    } else if (i % 5 === 0) {
      console.log('Buzz')
    }
  }
}

// fizzBuzz()

/**
 * Задание 5
 *
 * Нарисовать прямоугольный треугольник с длинной катетов i (любое число больше 1).
 * Для рисования использовать символ *(звездочка) или %(знак процента) и консоль.
 *
 */

let percent = '%'

const triangle = () => {
  while (percent.length <= 4) {
    console.log(percent)
    percent += '*'
  }
}

triangle()

//*
//**
//***
//****

/**
 * Задание 6
 * Написать цикл от 0 до 1000. Высчитать сумму всех чисел кратных 4 и сумму всех чисел кратных 3.
 *
 */

let sumFourth = 0
let sumThree = 0

const sum = () => {
  for (let i = 0; i <= 1000; i++) {
    if (i % 4 === 0) {
      sumFourth = +i
    }
    if (i % 3 === 0) {
      sumThree = +i
    }
  }
}

sum()

console.log(`Сумма чисел кратных 4 равна ${sumFourth}`)
console.log(`Сумма чисел кратных 3 равна ${sumThree}`)

/**
 * Задание 7
 * Написать программу, которая найдет наибольший общий делитель двух целых чисел и вывести это число в alert.
 *
 */

const egcd = (a, b) => {
  if (a === 0) {
    return b
  }

  while (b != 0) {
    if (a > b) {
      a = a - b
    } else {
      b = b - a
    }
  }

  return a
}

console.log(egcd(4, 16))

/**
 * Задание 8
 * Создайте массив из 5 любых элементов.
 * Напишите программу, которая будет клонировать заданный массив, не изменяя оригинала.
 * Склонированный массив вывести в консоль
 *
 */

let arr = [1, 5, 8, 10, 87]

let arr2 = { ...arr }

console.log(arr2)
