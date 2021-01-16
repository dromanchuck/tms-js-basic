/**
 * Домашнее задание к занятию 2
 *
 * Каждому нужно создать новую ветку от ветки master. Название ветки должно содержать имя + первая буква фамилии + /lesson02.
 * Например: dmitryR/lesson02. Выполнение задания производится в свое ветке и в этом файле.
 * После выполнения задания делаете пулл реквест и сообщаете о том, что задание выполнено:)
 * В случае неполодок с гитом, присылаете папку с проектом мне в личные сообщения
 * Код решения должен быть сразу же после самого задания
 */

/**Задание №0
 * Определите переменные str, num, flag и txt со значениями «Привет», 123, true, «true».
 * При помощи оператора определения типа убедитесь, что переменных принадлежат типам: string, number, boolean.
 */

const str = 'Привет' // string
const num = 123 // number
const flag = true // boolean
const txt = 'true' // string

console.log(typeof str, typeof num, typeof flag, typeof txt)

/**Задание №1
* Создайте переменные a1, a2, a3, a4, a5. При помощи математических операторов найдите значения выражений:
(5 + 3) * (5 - 3),
(10 - 6) * 200,
534 * 132 / 18,
123 * 3 + 10,
12*13*14
поместив результат каждого выражения в соответствующую переменную.
Вывести все результаты через запятую используя alert или console.log
*/

const a1 = (5 + 3) * (5 - 3)
const a2 = (10 - 6) * 200
const a3 = 534 * 132 / 18
const a4 = 123 * 3 + 10
const a5 = 12 * 13 * 14

console.log(a1, a2, a3, a4, a5)

/**Задание №2
* Напишите скрипт, который находит площадь прямоугольника c высота 43см и шириной 27см
  значение площади должно хранится в числовой переменной s.
*/

const height = 43
const width = 27

const s = height * width

console.log(s)

/**Задание №3
У прямоугольного треугольника две стороны n (со значением 3) и m (со значением 4).
Найдите гипотенузу k по теореме Пифагора.
*/

const n = 3
const m = 4

const k = Math.sqrt(n ** 2 + m ** 2)

console.log(k)

/**Задание №4
 * Даны размер кредита  — 1 тыс.бел.руб,
 * процентная ставка — 10%,
 * количество лет — 5.
 * Найти переплату по кредиту.
 */

const amount = 1000
const percents = 0.1
const period = 5

const overPayment = amount * percents * period - amount

console.log(Math.abs(overPayment)) // К счастью, жизнь пока что меня не столкнула с кредитами, так что за правильность формулы не ручаюсь))
// Адекватную формулу под это ДАНО не нагуглил, но думаю, что написать функцию при наличии формулы не составит проблем)

/**
 * Задание №5
 * Напишите скрипт, который считает количество секунд в неделе и показывает это количество в модальном окне.
 * Сообщение в модальном окне должно быть таким: 'Сегодня (здесь вставить день выполнения задания) и узнал что колиство секунд
 * одной неделе составляет (высчитанное количество)'
 */

const secondsInWeek = 60 * 60 * 24 * 7
const today = '16.01.2021'

alert(`Сегодня, ${today}, я узнал, что количество секунд в одной неделе составляет ${secondsInWeek}`)

/**
 * Задание №6
 * Создайте переменные a=10, b=2 и c=5. Выведите на экран и в консоль их сумму.
 */

const a = 10
const b = 2
const c = 5

alert(a + b + c)
console.log(a + b + c)

/**
 *   Задание №7
 * Создайте переменную age и присвойте ей ваш возраст.
 * Выведите на экран 'Мне %Возраст% лет!'.
 */

const age = 19
alert(`Мне ${age} лет!`)

/**
* Задание №8
  Создайте три переменные - час, минута, секунда. С их помощью выведите на экран время выполнения задания
  в формате 'час:минута:секунда'.
*/

const hours = 19
const minutes = 27
const seconds = 35

alert(`${hours}:${minutes}:${seconds}`)

/**
 * Задание №9
 * Переделайте этот код так, чтобы в нем использовались операции ++ и --.
 * Количество строк кода при этом не должно измениться.
 *
 *
 */
let numPlus = 10;
numPlus++;
numPlus++;
numPlus--;
alert(numPlus);

/**
 * Задание №10
 * Создайте переменные a6, a7, a8, a9, a10. Поместите в них результат выражений:
  5 % 3,
  3 % 5,
  5 + '3',
  '5' - 3,
  75 + 'кг'
  Вывести все результаты через запятую используя alert или console.log
 */

let a6 = 0
let a7 = 0
let a8 = 0
let a9 = 0
let a10 = 0

a6 = 5 % 3
a7 = 3 % 5
a8 = 5 + '3'
a9 = '5' - 3
a10 = 75 + 'kg'

console.log(a6, a7, a8, a9, a10)

/**
 * Задание 11
 * Напишите программу, которая сравнит 2 числа и выведет в алерт наименьшее.
 */

let firstNumber = 2
let secondNumber = 5
if (typeof firstNumber === 'number' && typeof secondNumber === 'number') {
  if (firstNumber < secondNumber) {
    alert(firstNumber)
  }
  else if (firstNumber === secondNumber) {
    alert('Numbers are equal!')
  }
  else {
    alert(secondNumber)
  }
}
else {
  alert('You should enter only numbers!')
}



/**
 * Задание 12
 * Создайте три переменные a1, a2, a3 и положите в них числа (желательно использовать
 * как положительные так и отрицательные числа). Используя условные операторы
 найдите знаки этих чисел (это может быть - или ничего).
 * Результат должен быть выведен через alert, который содержит сообщение
 * следующего вида: Знаки чисел a1, a2, a3: -, ,- (например a1 = -14, a2 = 10, a3 = -12);
 */

let aa1 = -5
let aa2 = 6
let aa3 = 0

if (aa1 < 0) {
  aa1 = '-'
}
else if (aa1 === 0) {
  aa1 = 'zero'
}
else {
  aa1 = ' '
}

if (aa1 < 0) {
  aa2 = '-'
}
else if (aa2 === 0) {
  aa2 = 'zero'
}
else {
  aa2 = ' '
}

if (aa3 < 0) {
  aa3 = '-'
}
else if (aa3 === 0) {
  aa3 = 'zero'
}
else {
  aa3 = ' '
}

alert(`${aa1}, ${aa2}, ${aa3}`)

/**
 * Задание 13
 * Создайте 5 чисел и найдите наибольшее при помощи условий
 */

const first = 1
const second = 8
const third = 11
const fourth = 4
const fifth = 2

// console.log(Math.max(first, second, third, fourth, fifth)) // Есть же прекрасный объект Math, разве в практике когда-нибудь пригодится ручной поиск большего числа через условия?)


// Нижепредставленное решение далеко от совершенства, в нём не учтено возможное равенство чисел.

if (first > second && first > third && first > fourth && first > fifth) {
  console.log(`${first} is the biggest`)
}
if (first < second && first > third && first > fourth && first > fifth) {
  console.log(`${second} is the biggest`)
}
if (first > second && first < third && first > fourth && first > fifth) {
  console.log(`${third} is the biggest`)
}
if (first > second && first > third && first < fourth && first > fifth) {
  console.log(`${fourth} is the biggest`)
}
if (first > second && first > third && first > fourth && first < fifth) {
  console.log(`${fifth} is the biggest`)
}

if (second > first && second > third && second > fourth && second > fifth) {
  console.log(`${second} is the biggest`)
}
if (second < first && second > third && second > fourth && second > fifth) {
  console.log(`${first} is the biggest`)
}
if (second > first && second < third && second > fourth && second > fifth) {
  console.log(`${third} is the biggest`)
}
if (second > first && second > third && second < fourth && second > fifth) {
  console.log(`${fourth} is the biggest`)
}
if (second > first && second > third && second > fourth && second < fifth) {
  console.log(`${fifth} is the biggest`)
}

if (third > first && third > second && third > fourth && third > fifth) {
  console.log(`${third} is the biggest`)
}
if (third < first && third > second && third > fourth && third > fifth) {
  console.log(`${first} is the biggest`)
}
if (third > first && third < second && third > fourth && third > fifth) {
  console.log(`${second} is the biggest`)
}
if (third > first && third > second && third < fourth && third > fifth) {
  console.log(`${fourth} is the biggest`)
}
if (third > first && third > second && third > fourth && third < fifth) {
  console.log(`${fifth} is the biggest`)
}

if (fourth > first && fourth > second && fourth > third && fourth > fifth) {
  console.log(`${fourth} is the biggest`)
}
if (fourth < first && fourth > second && fourth > third && fourth > fifth) {
  console.log(`${first} is the biggest`)
}
if (fourth > first && fourth < second && fourth > third && fourth > fifth) {
  console.log(`${second} is the biggest`)
}
if (fourth > first && fourth > second && fourth < third && fourth > fifth) {
  console.log(`${third} is the biggest`)
}
if (fourth > first && fourth > second && fourth > third && fourth < fifth) {
  console.log(`${fifth} is the biggest`)
}

if (fifth > first && fifth > second && fifth > third && fifth > fourth) {
  console.log(`${fifth} is the biggest`)
}
if (fifth < first && fifth > second && fifth > third && fifth > fourth) {
  console.log(`${first} is the biggest`)
}
if (fifth > first && fifth < second && fifth > third && fifth > fourth) {
  console.log(`${second} is the biggest`)
}
if (fifth > first && fifth > second && fifth < third && fifth > fourth) {
  console.log(`${third} is the biggest`)
}
if (fifth > first && fifth > second && fifth > third && fifth < fourth) {
  console.log(`${fourth} is the biggest`)
}