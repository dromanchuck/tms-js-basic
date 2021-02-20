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
 let newScript;
 let block = document.createElement('div');
 let btnTask1 = document.createElement('button');
 let btnTask2 = document.createElement('button');
 let clear = document.createElement('button');

 document.body.append(block);
 block.append(btnTask1, btnTask2, clear);

 btnTask1.innerText = `show Task1`;
 btnTask2.innerText = `show Task2`;
 clear.innerText = `clear`;

 btnTask1.onclick = () => {
  newScript = document.createElement('script');
  newScript.setAttribute('src', 'task1.js');
  document.body.append(newScript);
};

btnTask2.onclick = () => {
  newScript = document.createElement('script');
  newScript.setAttribute('src', 'task2.js');
  document.body.append(newScript);
};

clear.onclick = () => {
  let resultContainer = document.querySelector('#result');
  let child = [...resultContainer.children]
  newScript.remove();
  child.forEach(item => item.remove())
 }

/**
 * Задание 4
 * Сделайте промис, внутри которого будет задержка setTimeout в 3
 * секунды, после которой промис должен зарезолвится (то есть выполнится успешно).
 * */

async function daleyResolve() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("готово!"), 3000)
  });
  let result = await promise;
  console.log(result);
}

daleyResolve();

/**
 * Задание 5
 * Сделайте промис, внутри которого будет задержка setTimeout в 3 секунды,
 * после которой промис должен зареджектится (то есть выполнится с ошибкой).
 */

async function daleyReject() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => reject("бяда!"), 3000)
  });
  let result = await promise;
  console.log(result);
}

daleyReject();

/**
 * Задание 6
 * Сделайте функцию, которая будет генерировать случайные числа от 1 до 10. Сделайте так,
 * чтобы сгенерированное число было задержкой функции setTimeout в секундах. Оберните все это в промис.
 * Пусть промис выполнится успешно, если сгенерировано число от 1 до 5, и с ошибкой - если от 6 до 10.
 */

function getRandomInt(number) {
  return Math.floor(Math.random() * Math.floor(number));
}

async function generaiteDaley() {
  let number = getRandomInt(10);
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      number < 6 ? resolve('везёт') : reject("невезёт");
      console.log(number);
    }, number*1000);
  })
  let result = await promise;
  console.log(result);
}

generaiteDaley()

/**
 * Задание 7
 * Сделайте 3 промиса, в каждом из которых расположена функция setTimeout со случайно задержкой от 1 до 5 секунд.
 * Пусть каждый промис своим результатом возвращает эту задержку.
 * С помощью Promise.all получите массив результатов, найдите его сумму, выведите на экран.
 */
Promise.all([
  new Promise(resolve => setTimeout(() => {
    const first = getRandomInt(5)
    resolve(first), first*1000})),

  new Promise(resolve => setTimeout(() => {
    const second = getRandomInt(5)
    resolve(second), second*1000})),

  new Promise(resolve => setTimeout(() => {
    const third = getRandomInt(5)
    resolve(third), third*1000})),
]).then(data => alert([...data].reduce((total, item) => total + item, 0)));

