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

const taskChangeDiv = document.querySelector('#result');

const task1Button = document.createElement('button');
task1Button.innerText = 'Task 1 On';

const task2Button = document.createElement('button');
task2Button.innerText = 'Task 2 On';

taskChangeDiv.append(task1Button, task2Button);

task1Button.onclick = () => {
    const task1Script = document.createElement('script');
    task1Script.setAttribute('src', 'task1.js');
    document.body.append(task1Script);
};

task2Button.onclick = () => {
    const task2Script = document.createElement('script');
    task2Script.setAttribute('src', 'task2.js');
    document.body.append(task2Script);
};



//Promise

/**
 * Задание 4
 * Сделайте промис, внутри которого будет задержка setTimeout в 3
 * секунды, после которой промис должен зарезолвится (то есть выполнится успешно).
 *
 * */

const promise = new Promise(function (resolve, reject) {
    setTimeout(() => resolve(console.log('Done!!!')), 3000);
});


/**
 * Задание 5
 * Сделайте промис, внутри которого будет задержка setTimeout в 3 секунды,
 * после которой промис должен зареджектится (то есть выполнится с ошибкой).
 */

const promise = new Promise(function (resolve, reject) {
    setTimeout(() => reject(new Error('Oh nooo...')), 3000);
});


/**
 * Задание 6
 * Сделайте функцию, которая будет генерировать случайные числа от 1 до 10. Сделайте так,
 * чтобы сгенерированное число было задержкой функции setTimeout в секундах. Оберните все это в промис.
 * Пусть промис выполнится успешно, если сгенерировано число от 1 до 5, и с ошибкой - если от 6 до 10.
 */

function getRandomNmb() {
    const getNumber = Math.round(Math.random() * 10);
    return getNumber
};

const promise = new Promise((resolve, reject) => {
    const randomNumber = getRandomNmb();
    const timeOut = randomNumber * 1000;

    if (randomNumber >= 1 && randomNumber <= 5) {
        setTimeout (() => resolve('Number from 1 to 5'), timeOut)
    } else if (randomNumber > 5 && randomNumber <= 10) {
        setTimeout (() => reject(new Error('Number from 6 to 10')), timeOut)
    };
})

promise.then((value) => {
    console.log(value);
});



/**
 * Задание 7
 * Сделайте 3 промиса, в каждом из которых расположена функция setTimeout со случайно задержкой от 1 до 5 секунд.
 * Пусть каждый промис своим результатом возвращает эту задержку.
 * С помощью Promise.all получите массив результатов, найдите его сумму, выведите на экран.
 */


//Первый вариант

const firstTimeOut = Math.round(Math.random() * 5) * 1000;
const secondTimeOut = Math.round(Math.random() * 5) * 1000;
const thirdTimeOut = Math.round(Math.random() * 5) * 1000;

const firstPromise = new Promise(resolve=> {
    setTimeout(() => resolve(`${firstTimeOut / 1000}`), firstTimeOut);
});

firstPromise.then((value) => {
    console.log(value);
});

const secondPromise = new Promise(resolve => {
    setTimeout(() => resolve(`${secondTimeOut / 1000}`), secondTimeOut);
});

secondPromise.then((value) => {
    console.log(value);
});

const thirdPromise = new Promise(resolve => {
    setTimeout(() => resolve(`${thirdTimeOut / 1000}`), thirdTimeOut);
});

thirdPromise.then((value) => {
    console.log(value);
});

Promise.all([firstPromise, secondPromise, thirdPromise]).then(result => {
    alert(`Сумма всех промисов = ${[...result].reduce((acc, val) => +acc + +val)}`);
});

//Второй вариант (как в примере учебника)

const firstTimeOut = Math.round(Math.random() * 5) * 1000;
const secondTimeOut = Math.round(Math.random() * 5) * 1000;
const thirdTimeOut = Math.round(Math.random() * 5) * 1000;

const allPromises = Promise.all([
    new Promise(resolve => setTimeout(() => resolve(`${thirdTimeOut / 1000}`), thirdTimeOut)),
    new Promise(resolve => setTimeout(() => resolve(`${secondTimeOut / 1000}`), secondTimeOut)),
    new Promise(resolve => setTimeout(() => resolve(`${thirdTimeOut / 1000}`), thirdTimeOut)),
]).then(result => alert(`Сумма всех промисов = ${[...result].reduce((acc, val) => +acc + +val)}`));