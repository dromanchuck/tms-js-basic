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
let divResult = document.querySelector('#result');
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
let containerResult = document.querySelector('#result');
let task1Btn = document.createElement('button');
let task2Btn = document.createElement('button');

task1Btn.innerText = 'Show Task 1';
task2Btn.innerText = 'Show Task 2';

containerResult.append(task1Btn, task2Btn);

function loadScript(src) {
    return new Promise(function(resolve, reject) {
        let script = document.createElement('script');
        script.src = src;

        script.onload = () => resolve(script);
        script.onerror = () => reject(new Error(`Ошибка загрузки скрипта ${src}`));

        document.head.append(script);
    })
}
task1Btn.addEventListener('click', function() {
    if (task1Btn.innerText === 'Show Task 1') {
        let promis = loadScript('task1.js');
        promis.then(
            script => {
                task1Btn.innerText = 'Hide Task 1';
                script.setAttribute('id', 'task1');

            },
            error => alert(`Ошибка: ${error.message}`)
        );

        task2Btn.setAttribute('disabled', '');
    }
    if (task1Btn.innerText === 'Hide Task 1') {
        task1Btn.innerText = 'Show Task 1';
        let script = document.head.querySelector('#task1');
        let task1Block = document.body.querySelector('.usersInfo');
        script.remove();
        task1Block.remove();

        task2Btn.removeAttribute('disabled');
    }

});
task2Btn.addEventListener('click', function() {
        if (task2Btn.innerText === 'Show Task 2') {
            let promis = loadScript('task2.js');
            promis.then(
                script => {
                    task2Btn.innerText = 'Hide Task 2';
                    script.setAttribute('id', 'task2');

                },
                error => alert(`Ошибка: ${error.message}`)
            );

            task1Btn.setAttribute('disabled', '');
        }
        if (task2Btn.innerText === 'Hide Task 2') {
            task2Btn.innerText = 'Show Task 2';
            let script = document.head.querySelector('#task2');
            let task2Block = document.body.querySelector('.task2Block');
            script.remove();
            task2Block.remove();

            task1Btn.removeAttribute('disabled');
        }

    })
    //Promise

/**
 * Задание 4
 * Сделайте промис, внутри которого будет задержка setTimeout в 3
 * секунды, после которой промис должен зарезолвится (то есть выполнится успешно).
 *
 * */

let promise4 = new Promise(function(resolve, reject) {
    setTimeout(() => resolve(alert("Выполнено!")), 3000);
});

/**
 * Задание 5
 * Сделайте промис, внутри которого будет задержка setTimeout в 3 секунды,
 * после которой промис должен зареджектится (то есть выполнится с ошибкой).
 */

let promise5 = new Promise(function(resolve, reject) {
    setTimeout(() => {
        reject(new Error(alert("Ошибка!!")))
    }, 3000);
})

/**
 * Задание 6
 * Сделайте функцию, которая будет генерировать случайные числа от 1 до 10. Сделайте так,
 * чтобы сгенерированное число было задержкой функции setTimeout в секундах. Оберните все это в промис.
 * Пусть промис выполнится успешно, если сгенерировано число от 1 до 5, и с ошибкой - если от 6 до 10.
 */

let promise6 = new Promise(function(resolve, reject) {
    let num = Math.floor(Math.random() * 10) + 1;
    console.log(num);
    if (num >= 1 && num <= 5) {
        setTimeout(() =>
            resolve(alert(`Выполнено! Число ${num}`)), 5000)
    } else {
        setTimeout(() =>
            reject(new Error(alert(`Ошибка! Число ${num}`))), 5000)
    }
})

/**
 * Задание 7
 * Сделайте 3 промиса, в каждом из которых расположена функция setTimeout со случайно задержкой от 1 до 5 секунд.
 * Пусть каждый промис своим результатом возвращает эту задержку.
 * С помощью Promise.all получите массив результатов, найдите его сумму, выведите на экран.
 */

function getRandomNum(min, max) {
    // случайное число от min до (max+1)
    let rand = Math.floor(min + Math.random() * (max + 1 - min));
    return rand;
}

let promise71 = new Promise((resolve, reject) => {
    let sec = getRandomNum(1, 5);
    setTimeout(() => resolve(sec), sec * 1000)
});

let promise72 = new Promise((resolve, reject) => {
    let sec = getRandomNum(1, 5);
    setTimeout(() => resolve(sec), sec * 1000)
});

let promise73 = new Promise((resolve, reject) => {
    let sec = getRandomNum(1, 5);
    setTimeout(() => resolve(sec), sec * 1000)
});

Promise.all([promise71, promise72, promise73])
    .then((response) => response.reduce((acc, item) => acc += item, 0))
    .then(alert)