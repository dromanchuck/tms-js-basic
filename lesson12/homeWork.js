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

//Promise

let result = document.querySelector('#result')

const showFirstTask = document.createElement('button')
showFirstTask.innerHTML = 'First Task'
const showSecondTask = document.createElement('button')
showSecondTask.innerHTML = 'Second Task'

let firstTaskContainer = document.createElement('div')
let secondTaskContainer = document.createElement('div')

let firstTask = document.createElement("script");
let secondTask = document.createElement("script");

result.append(firstTaskContainer, secondTaskContainer)

showFirstTask.addEventListener('click', event => {

    firstTask.setAttribute('src', 'task1.js')
    document.body.append(firstTask);

    secondTaskContainer.classList.add('hidden')
    firstTaskContainer.classList.remove('hidden')

    showFirstTask.setAttribute('disabled', true)
    showSecondTask.removeAttribute('disabled')
})

showSecondTask.addEventListener('click', event => {

    secondTask.setAttribute('src', 'task2.js')
    document.body.append(secondTask);

    firstTaskContainer.classList.add('hidden')
    secondTaskContainer.classList.remove('hidden')

    showFirstTask.removeAttribute('disabled')
    showSecondTask.setAttribute('disabled', true)
})


document.body.prepend(showFirstTask, showSecondTask)

/**
 * Задание 4
 * Сделайте промис, внутри которого будет задержка setTimeout в 3
 * секунды, после которой промис должен зарезолвится (то есть выполнится успешно).
 *
 * */

let promiseFullfilled = new Promise((resolve, reject) => {
    setTimeout(() => console.log('after 3 sec'), 3000)
})

/**
 * Задание 5
 * Сделайте промис, внутри которого будет задержка setTimeout в 3 секунды,
 * после которой промис должен зареджектится (то есть выполнится с ошибкой).
 */

let promiseRejected = new Promise((resolve, reject) => {
    setTimeout(() => reject(), 3000)
}).catch((e) => {
    console.log(`Caught ${e}`)
})

/**
 * Задание 6
 * Сделайте функцию, которая будет генерировать случайные числа от 1 до 10. Сделайте так,
 * чтобы сгенерированное число было задержкой функции setTimeout в секундах. Оберните все это в промис.
 * Пусть промис выполнится успешно, если сгенерировано число от 1 до 5, и с ошибкой - если от 6 до 10.
 */

let promiseRandom = new Promise((resolve, reject) => {
    let num = Math.floor(Math.random() * 10 + 1)
    num = num * 1000
    if (num > 5000) {
        setTimeout(() => {
            reject(new Error(`Rejected, num is ${num}`))
        }, num)
    }
    else {
        setTimeout(() => {
            resolve(console.log(`Everything is fine, num is ${num}`))
        }, num)
    }
})

/**
 * Задание 7
 * Сделайте 3 промиса, в каждом из которых расположена функция setTimeout со случайно задержкой от 1 до 5 секунд.
 * Пусть каждый промис своим результатом возвращает эту задержку.
 * С помощью Promise.all получите массив результатов, найдите его сумму, выведите на экран.
 */

let timeFirst = Math.floor(Math.random() * 10 + 1) * 1000
let timeSecond = Math.floor(Math.random() * 10 + 1) * 1000
let timeThird = Math.floor(Math.random() * 10 + 1) * 1000

let allPromises = Promise.all([
    new Promise(resolve => setTimeout(() => resolve(`First Promise: ${timeFirst}`), timeFirst)),
    new Promise(resolve => setTimeout(() => resolve(`Second Promise: ${timeSecond}`), timeSecond)),
    new Promise(resolve => setTimeout(() => resolve(`Third Promise: ${timeThird}`), timeThird)),
]).then(alert)