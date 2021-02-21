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
 let div1 = document.querySelector('div[id="result"]');
 let buttonTask1 = document.createElement('button');
 let buttonTask2 = document.createElement('button');
 document.body.append(buttonTask1, buttonTask2);
 
 buttonTask1.innerText = `Таск1`;
 buttonTask2.innerText = `Таск2`;

 buttonTask1.onclick = () => {
  let script1 = document.createElement('script');
  script1.setAttribute('src', 'task1.js');
  document.body.append(script1);
};
buttonTask2.onclick = () => {
  let script2 = document.createElement('script');
  script2.setAttribute('src', 'task2.js');
  document.body.append(script2);
};
//Promise

/**
 * Задание 4
 * Сделайте промис, внутри которого будет задержка setTimeout в 3
 * секунды, после которой промис должен зарезолвится (то есть выполнится успешно).
 *
 * */
let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log(`Success!`);
    }, 3000);
  });
/**
 * Задание 5
 * Сделайте промис, внутри которого будет задержка setTimeout в 3 секунды,
 * после которой промис должен зареджектится (то есть выполнится с ошибкой).
 */
let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log(`Success!`);
    }, 3000);
  }).catch(() => {
    alert(`Failure :(`);
  });
/**
 * Задание 6
 * Сделайте функцию, которая будет генерировать случайные числа от 1 до 10. Сделайте так,
 * чтобы сгенерированное число было задержкой функции setTimeout в секундах. Оберните все это в промис.
 * Пусть промис выполнится успешно, если сгенерировано число от 1 до 5, и с ошибкой - если от 6 до 10.
 */
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  let promise = new Promise((resolve, reject) => {
    let randomNumber = getRandomNumber(1, 10);
    let error = new Error(`Wrong number!`);
    setTimeout(() => {
        if (randomNumber >= 1 && randomNumber <= 5){
            resolve(console.log(randomNumber));
        } 
        if (randomNumber >= 6 && randomNumber <= 10){
            reject(`${error}` + randomNumber)
        }
    }, 2000);
  });
/**
 * Задание 7
 * Сделайте 3 промиса, в каждом из которых расположена функция setTimeout со случайно задержкой от 1 до 5 секунд.
 * Пусть каждый промис своим результатом возвращает эту задержку.
 * С помощью Promise.all получите массив результатов, найдите его сумму, выведите на экран.
 */
let firstPromiseTime = Math.floor(Math.random() * 4 + 1)*1000;
let secondPromiseTime = Math.floor(Math.random() * 4 + 1)*1000;
let thirdPromiseTime = Math.floor(Math.random() * 4 + 1)*1000;
let firstPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        alert(`This is our first promise!`);
    }, firstPromiseTime)
})
let secondPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        alert(`This is our second promise!`);
    }, secondPromiseTime)
})
let thirdPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        alert(`THIS IS SPARTA!`);
    }, thirdPromiseTime)
})
let allPromises = Promise.all([firstPromise, secondPromise, thirdPromise]);
function sumOfPromises(array){
let sum = 0;
for (i = 0; i < allPromises.length; i++){
    sum += allPromises[i];
    }
    console.log(sum)
};
alert(sumOfPromises(allPromises));