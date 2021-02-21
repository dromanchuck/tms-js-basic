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

// let div = document.querySelector('.task3');

// let buttonTask1 = document.createElement('button');
// buttonTask1.innerText = 'Task1';

// let buttonTask2 = document.createElement('button');
// buttonTask2.innerText = 'Task2';

// buttonTask1.style = `margin-right: 25px`;


// div.append(buttonTask1, buttonTask2);

// buttonTask1.addEventListener('click', function() {
//     let script = document.createElement('script');
//     script.src = 'task1.js';
//     div.append(script);
// })

// buttonTask2.addEventListener('click', function() {
//     let script = document.createElement('script');
//     script.src = 'task2.js';
//     div.append(script);
// })

/**
 * Задание 4 
 * Сделайте промис, внутри которого будет задержка setTimeout в 3
 * секунды, после которой промис должен зарезолвится (то есть выполнится успешно).
 *
 * */


//  let promise = new Promise(function(resolve, reject) {
//     setTimeout(() => {
//         resolve(console.log('Done!'));
        
//     }, 3000);
// });



/**
 * Задание 5 
 * Сделайте промис, внутри которого будет задержка setTimeout в 3 секунды,
 * после которой промис должен зареджектится (то есть выполнится с ошибкой).
 */

// let promise = new Promise(function(resolve, reject) {
//     setTimeout(() => {        
//         reject(new Error('Download error'));
//     }, 3000);
// });

/**
 * Задание 6 
 * Сделайте функцию, которая будет генерировать случайные числа от 1 до 10. Сделайте так,
 * чтобы сгенерированное число было задержкой функции setTimeout в секундах. Оберните все это в промис.
 * Пусть промис выполнится успешно, если сгенерировано число от 1 до 5, и с ошибкой - если от 6 до 10.
 */

//  let promise = new Promise(function(resolve, reject) {
     
//     let randomValue = Math.floor(Math.random() * 10);
//     let delay = randomValue * 1000;

//     if (delay > 5000) {
//         setTimeout(() => {
//             reject(new Error('Error'))
//         }, delay);
//     } else {
//         setTimeout(() => {
//             resolve(console.log('Success'))
//         }, delay);
//     }
//  });


/**
 * Задание 7 
 * Сделайте 3 промиса, в каждом из которых расположена функция setTimeout со случайно задержкой от 1 до 5 секунд.
 * Пусть каждый промис своим результатом возвращает эту задержку.
 * С помощью Promise.all получите массив результатов, найдите его сумму, выведите на экран.
 */


//  let promiseOne = new Promise(function(resolve, reject) {
//     let randomValue = Math.floor(Math.random() * 5);

//     let delay = randomValue * 1000;
//      setTimeout(() => {
//         console.log(delay);
//          resolve(delay);
//      }, delay);
//  });

//  let promiseTwo = new Promise(function(resolve, reject) {
//     let randomValue = Math.floor(Math.random() * 5);
//     let delay = randomValue * 1000;

//     setTimeout(() => {
//         console.log(delay);
//         resolve(delay);
//     }, delay);
// });

// let promiseThree = new Promise(function(resolve, reject) {
//     let randomValue = Math.floor(Math.random() * 5);
//     let delay = randomValue * 1000;

//     setTimeout(() => {
//         console.log(delay);
//         resolve(delay);
//     }, delay);
// });

// Promise.all([promiseOne, promiseTwo, promiseThree]).then((res) => {
//    console.log(`Сумма = ${res.reduce((acc, num) => {
//     acc += num;
//     return acc;
// }, 0)}`);
// })