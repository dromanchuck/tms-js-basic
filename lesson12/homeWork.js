/**
 * Домашнее задание к занятию 12
 * Каждому нужно создать новую ветку от ветки master. Название ветки должно содержать имя + первая буква фамилии + /lesson12.
 * Например: dmitryR/lesson12. Выполнение задания производится в свое ветке и в этом файле.
 * После выполнения задания делаете пулл реквест и сообщаете о том, что задание выполнено:)
 * В случае неполодок с гитом, присылаете папку с проектом мне в личные сообщения
 * Код решения должен быть сразу же после самого задания
 */

//Внимание

/**
 * Задание 1
 * Перепишите задание 1 из урока 11 используя async/await.
 * Код разместить в отдельном файле с названием task1.js. Результат нужно разместить в div c id = result
 */

/**
 * Задание 2
 * Дописать задание 4 из занятия 11. Нужно сделать так, чтобы по нажатию на фотку она должна
 * отобразиться поверх всех фоток как модальное окно (пример здесь https://itchief.ru/javascript/modal-window).
 * У модального окна должна быть кнопка, по нажатию на который модальное окно закрывается.
 *  Код разместить в отдельном файле с названием task2.js. Результат нужно разместить в div c id = result
 */

/**
 * Задание 3
 * Создать 2 кнопки с текстом Таск1 Таск2. Сделать так, чтобы по нажатию на
 * кнопку в div отображалось соотвествующее задание. Реализовать путем добавления/удаления тега script c src task1.js или task2.js.
 *
 */

const addButtonTaskOne = document.createElement('button')
const addButtonTaskTwo = document.createElement('button')

addButtonTaskOne.innerText = 'Добавить задание 1'
addButtonTaskTwo.innerText = 'Добавить задание 2'

document.body.append(addButtonTaskOne, addButtonTaskTwo)

addButtonTaskOne.addEventListener('click', (event) => {
  const taskOneScript = document.createElement('script')

  taskOneScript.setAttribute('src', 'task1.js')
  document.body.append(taskOneScript)

  addButtonTaskOne.remove()
})

addButtonTaskTwo.addEventListener('click', (event) => {
  const taskTwoScript = document.createElement('script')

  taskTwoScript.setAttribute('src', 'task2.js')
  document.body.append(taskTwoScript)

  addButtonTaskTwo.remove()
})

//Promise

/**
 * Задание 4
 * Сделайте промис, внутри которого будет задержка setTimeout в 3
 * секунды, после которой промис должен зарезолвится (то есть выполнится успешно).
 *
 * */

let promiseTaskFour = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Я живой!')
  }, 3000)
}).then((value) => console.log(value))

/**
 * Задание 5
 * Сделайте промис, внутри которого будет задержка setTimeout в 3 секунды,
 * после которой промис должен зареджектится (то есть выполнится с ошибкой).
 */

let promiseTaskFive = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('Я не живой!')
  }, 5000)
}).catch((error) => {
  console.log(`${error}`)
})

/**
 * Задание 6
 * Сделайте функцию, которая будет генерировать случайные числа от 1 до 10. Сделайте так,
 * чтобы сгенерированное число было задержкой функции setTimeout в секундах. Оберните все это в промис.
 * Пусть промис выполнится успешно, если сгенерировано число от 1 до 5, и с ошибкой - если от 6 до 10.
 */

function getRandomNumber() {
  let randomNumber = Math.round(Math.random() * 10)
  return randomNumber
}

let promise = new Promise((resolve, reject) => {
  let randomNum = getRandomNumber()
  setTimeout(() => {
    if (randomNum < 5 && randomNum > 0) {
      resolve('Выпало число от 1 до 5')
    } else {
      reject('Выпало число больше 5 и меньше 10')
    }
  }, randomNum * 1000)
}).then((value) => console.log(value))

/**
 * Задание 7
 * Сделайте 3 промиса, в каждом из которых расположена функция setTimeout со случайно задержкой от 1 до 5 секунд.
 * Пусть каждый промис своим результатом возвращает эту задержку.
 * С помощью Promise.all получите массив результатов, найдите его сумму, выведите на экран.
 */

let randomNumForSevenTask = Math.round((Math.random() * 10) / 2)
let randomNumForSevenTask2 = Math.round((Math.random() * 10) / 2)
let randomNumForSevenTask3 = Math.round((Math.random() * 10) / 2)

Promise.all([
  new Promise((resolve) =>
    setTimeout(
      () => resolve(randomNumForSevenTask),
      randomNumForSevenTask * 1000
    )
  ).then((randomNumForSevenTask) => {
    console.log(randomNumForSevenTask)
  }),
  new Promise((resolve) =>
    setTimeout(
      () => resolve(randomNumForSevenTask2),
      randomNumForSevenTask2 * 1000
    )
  ).then((randomNumForSevenTask2) => {
    console.log(randomNumForSevenTask2)
  }),
  new Promise((resolve) =>
    setTimeout(
      () => resolve(randomNumForSevenTask3),
      randomNumForSevenTask3 * 1000
    )
  ).then((randomNumForSevenTask3) => {
    console.log(randomNumForSevenTask3)
  }),
]).then((value) => {
  console.log(
    `Суммы всех задержек: ${
      randomNumForSevenTask + randomNumForSevenTask2 + randomNumForSevenTask3
    }`
  )
})
