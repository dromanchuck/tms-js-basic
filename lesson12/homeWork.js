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

 // ? Не совсем получается. Как включать и отключать тот или ной скрипт?

const task1Btn = document.createElement('button');
const task2Btn = document.createElement('button');
const resultContainer = document.querySelector('#result');

document.body.prepend(task1Btn, task2Btn);

task1Btn.innerText = `show task1`;
task2Btn.innerText = `show task2`;

task1Btn.addEventListener('click', () => {
  resultContainer.innerHTML = '';
  script = document.createElement('script');
  script.setAttribute('src', 'task1.js');
  // script.dataset.id = 1;
  document.body.append(script);
 })

 task2Btn.addEventListener('click', () => {
  resultContainer.innerHTML = '';
  script = document.createElement('script');
  script.setAttribute('src', 'task2.js');
  // script.dataset.id = 2;
  document.body.append(script);
 })


//Promise

/**
 * Задание 4
 * Сделайте промис, внутри которого будет задержка setTimeout в 3
 * секунды, после которой промис должен зарезолвится (то есть выполнится успешно).
 *
 * */

 const promise1 = new Promise((resolve, reject) => {
   setTimeout(() => {
    resolve('promise resolved')
   }, 3000)
 })

 promise1.then((result) => {
   console.log(result);
 })

/**
 * Задание 5
 * Сделайте промис, внутри которого будет задержка setTimeout в 3 секунды,
 * после которой промис должен зареджектится (то есть выполнится с ошибкой).
 */

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('promise rejected')
  }, 3000)
})

promise2.catch((err) => {
  console.log(err);
})

/**
 * Задание 6
 * Сделайте функцию, которая будет генерировать случайные числа от 1 до 10. Сделайте так,
 * чтобы сгенерированное число было задержкой функции setTimeout в секундах. Оберните все это в промис.
 * Пусть промис выполнится успешно, если сгенерировано число от 1 до 5, и с ошибкой - если от 6 до 10.
 */

 function getRandomValue(x) {
   return Math.floor(Math.random() * x)
 }

const promise3 = new Promise((resolve, reject) => {
  const randomValue= getRandomValue(10)
  console.log(randomValue);
  setTimeout(() => {
    randomValue <= 5 ? resolve('resolve') : reject('reject')
  }, randomValue * 1000)
})

promise3.then((result) => {
  console.log(result);
})
.catch((err) => {
  console.log(err);
})
 


/**
 * Задание 7
 * Сделайте 3 промиса, в каждом из которых расположена функция setTimeout со случайно задержкой от 1 до 5 секунд.
 * Пусть каждый промис своим результатом возвращает эту задержку.
 * С помощью Promise.all получите массив результатов, найдите его сумму, выведите на экран.
 */

const promise7_1 = new Promise((resolve, reject) => {
  const randomValue= getRandomValue(5)
  setTimeout(() => {
    resolve(randomValue)
  }, randomValue * 1000)
})


const promise7_2 = new Promise((resolve, reject) => {
  const randomValue= getRandomValue(5)
  setTimeout(() => {
    resolve(randomValue)
  }, randomValue * 1000)
})


const promise7_3 = new Promise((resolve, reject) => {
  const randomValue= getRandomValue(5)
  setTimeout(() => {
    resolve(randomValue)
  }, randomValue * 1000)
})

const promiseResult = Promise.all([promise7_1, promise7_2, promise7_3]);
promiseResult.then((res) => {
  const sum = res.reduce((acc, curr) => acc + curr)
  console.log(sum);
})