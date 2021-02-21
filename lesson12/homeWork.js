/**
 * Домашнее задание к занятию 12
 * Каждому нужно создать новую ветку от ветки master. Название ветки должно содержать имя + первая буква фамилии + /lesson12.
 * Например: dmitryR/lesson12. Выполнение задания производится в свое ветке и в этом файле.
 * После выполнения задания делаете пулл реквест и сообщаете о том, что задание выполнено:)
 * В случае неполодок с гитом, присылаете папку с проектом мне в личные сообщения
 * Код решения должен быть сразу же после самого задания
 */

//Внимание

const div = document.querySelector('#result');

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

// Совсем не хотелось читать почему-то статью про модальное окно, сделал по-своему :)

/**
 * Задание 3
 * Создать 2 кнопки с текстом Таск1 Таск2. Сделать так, чтобы по нажатию на
 * кнопку в div отображалось соотвествующее задание. Реализовать путем добавления/удаления тега script c src task1.js или task2.js.
 *
 */

// Не понимаю реальных ситуаций применения такого решения :(

const firstTaskButton = document.createElement('button');
const secondTaskButton = document.createElement('button');

firstTaskButton.innerText = 'Task 1';
secondTaskButton.innerText = 'Task 2';

document.body.prepend(firstTaskButton, secondTaskButton);

let currentTask = null;

function taskChange(src) {
  if (currentTask) {
    document.body.removeChild(currentTask);
    currentTask.remove();
  }
  div.innerHTML = '';
  currentTask = document.createElement('script');
  currentTask.src = src;
  document.body.append(currentTask);
  currentTask.onload = () => {
    task();
  };
}

firstTaskButton.addEventListener('click', () => taskChange('task1.js'));
secondTaskButton.addEventListener('click', () => taskChange('task2.js'));

//Promise

/**
 * Задание 4
 * Сделайте промис, внутри которого будет задержка setTimeout в 3
 * секунды, после которой промис должен зарезолвится (то есть выполнится успешно).
 *
 * */

let promise4 = new Promise((resolve, reject) => {
  setTimeout(() => resolve(true), 3000);
}).then((res) => console.log(res));

/**
 * Задание 5
 * Сделайте промис, внутри которого будет задержка setTimeout в 3 секунды,
 * после которой промис должен зареджектится (то есть выполнится с ошибкой).
 */

let promise5 = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error('Ошибка')), 3000);
})
  .then((res) => console.log(res))
  .catch((err) => console.log(err))
  .finally(() => console.log('Finally promise 5'));

/**
 * Задание 6
 * Сделайте функцию, которая будет генерировать случайные числа от 1 до 10. Сделайте так,
 * чтобы сгенерированное число было задержкой функции setTimeout в секундах. Оберните все это в промис.
 * Пусть промис выполнится успешно, если сгенерировано число от 1 до 5, и с ошибкой - если от 6 до 10.
 */

function randomNumber(x) {
  return Math.ceil(Math.random() * x + 1e-10);
}

let promise6 = new Promise((resolve, reject) => {
  let hold = randomNumber(10);
  setTimeout(() => {
    hold < 6 ? resolve(true) : reject(new Error('Проблема'));
  }, hold * 1e3);
})
  .then((res) => console.log(res))
  .catch((err) => console.log(err))
  .finally(() => console.log('Finally promise 6'));

/**
 * Задание 7
 * Сделайте 3 промиса, в каждом из которых расположена функция setTimeout со случайно задержкой от 1 до 5 секунд.
 * Пусть каждый промис своим результатом возвращает эту задержку.
 * С помощью Promise.all получите массив результатов, найдите его сумму, выведите на экран.
 */

Promise.all(
  Array(3).fill(
    new Promise((resolve) => {
      let hold = randomNumber(5);
      setTimeout(() => resolve(hold), hold * 1e3);
    })
  )
).then((res) => console.log(res.reduce((sum, el) => sum + el, 0)));
