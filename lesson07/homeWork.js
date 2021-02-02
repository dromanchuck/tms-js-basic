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

const min = (...args) => {
  let array = args
  array.sort((a, b) => a - b)
  return array[0]
}

console.log(min(5, 8, 4, 1, 2, 9))

function test(result, expectedResult) {
  let status = result === expectedResult ? 'Успех' : 'Провал'
  return status
}

console.log(`Функция должна показать 1: ${test(min(5, 8, 4, 1, 2, 9), 1)}`)
console.log(`Функция должна показать 1: ${test(min(5, 8, 4, 1, 2, 9), 3)}`)
console.log(`Функция должна показать 1: ${test(min(5, 8, 4, 1, 2, 9), 4)}`)

/**
 * Задание 1
 * Сделать функцию, которая вычисляет разность между двумя числами и вернет разность.
 * Выполнить используя замыкание, результат должен выглядеть примерно так
 * let sub = substract(a)(b) // a - b
 */

let sub = (a) => {
  return (b) => a - b
}

let a = sub(6)(5)
console.log(`sub(6)(5): ${test(sub(6)(5), 1)}`)
console.log(`sub(2)(1): ${test(sub(2)(1), 1)}`)
console.log(`sub(12)(6): ${test(sub(12)(6), 5)}`)

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

function pass(password) {
  return function (str) {
    if (password === str) {
      return true
    } else {
      return false
    }
  }
}

let checkPass = pass(123456)

console.log(`Проверка пароля: ${checkPass(123456)}`)
console.log(`Проверка пароля: ${checkPass(1234567)}`)
console.log(`Проверка пароля: ${checkPass(12345)}`)

/** Задание 3
 * Написать функцию, которая приобразуем любую строку в строку написанную кебаб кейсом (все буквы с маленькой буквы и на месте пробелов - тире)
 * Например:
 * 'Hello World' -> 'hello-world';
 * 'Hello dear hell' -> 'hello-dear-hell'
 */

const kebabCase = (string) => {
  let result = ''
  for (let char of string) {
    if (char === ' ') {
      result += '-'
    } else if (char === char.toUpperCase()) {
      result += char.toLowerCase()
    } else {
      result += char
    }
  }
  return result
}

console.log(test(kebabCase('Hello world'), 'hello-world'))
console.log(test(kebabCase('WeLLcom TO THE HEll'), 'wellcom-to-the-hell'))
console.log(test(kebabCase('Hello JS'), 'hello-world'))

/**
 * Написать функцию, которая из любой фразы сделает вернет ее абревиатуру.
 *
 * 'Республика беларусь' -> 'РБ'
 * 'Минск' -> 'М'
 */

const abbreviation = (string) => {
  let result = ''
  for (let char of string) {
    if (char === ' ') {
      result += ''
    } else if (char === char.toUpperCase()) {
      result += char
    }
  }
  return result
}
console.log(test(abbreviation('Республика Беларусь'), 'РБ'))
console.log(test(abbreviation('Российская Федерация'), 'РФ'))
console.log(test(abbreviation('Соединённые Штаты Америки'), 'США'))
