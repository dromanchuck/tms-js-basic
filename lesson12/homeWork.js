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
// let UserInfo = document.querySelector('div[id=result]');

// async function ShowNames() {
//     try{
//         let result = await fetch('https://jsonplaceholder.typicode.com/users')
//         let ShowResult = await result.json();

//         ShowResult.forEach((item) => {
//         let name = document.createElement('p');
//         let phone = document.createElement('p');

//         name.innerText = 'Name:' + ' ' + item.name;
//         phone.innerText = 'Phone:' + ' ' + item.phone;

//         UserInfo.style = `
//         display: flex;
//         flex-direction: column;
//         border-bottom: 1px black solid;
//         `;
        
//         UserInfo.append(name,phone);
//         });
    
//     }catch(err){
//         console.log(err)
//     }
// }
// ShowNames()
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
let TaskDiv = document.createElement('div');
let buttonTask1 = document.createElement('button');
let buttonTask2 = document.createElement('button');

buttonTask1.innerText = 'Tack1';
buttonTask2.innerText = 'Tack2';


document.body.append(TaskDiv);

TaskDiv.append(buttonTask1,buttonTask2);

buttonTask1.onclick = () => {
    let ScriptTask1 = document.createElement('script');
    ScriptTask1.setAttribute('src', 'task1.js')
    document.body.append(ScriptTask1)
}

buttonTask2.onclick = () => {
    let ScriptTask2 = document.createElement('script');
    ScriptTask2.setAttribute('src', 'task2.js')
    document.body.append(ScriptTask2)
}







//Promise

/**
 * Задание 4
 * Сделайте промис, внутри которого будет задержка setTimeout в 3
 * секунды, после которой промис должен зарезолвится (то есть выполнится успешно).
 *
 * */
async function ShowSuccessfully() { 
let promiseSuccessfully = new Promise((resolve, reject) => setTimeout(() => resolve('Выполнено'), 1000));

let Result = await promiseSuccessfully;
console.log(Result);
}
ShowSuccessfully()
/**
 * Задание 5
 * Сделайте промис, внутри которого будет задержка setTimeout в 3 секунды,
 * после которой промис должен зареджектится (то есть выполнится с ошибкой).
 */
async function ShowFalled() { 
let promiseFalled = new Promise((resolve, reject) => setTimeout(() => reject('Ошибка'), 1000));

let Result = await promiseFalled;
console.log(Result)
}
ShowFalled()
/**
 * Задание 6
 * Сделайте функцию, которая будет генерировать случайные числа от 1 до 10. Сделайте так,
 * чтобы сгенерированное число было задержкой функции setTimeout в секундах. Оберните все это в промис.
 * Пусть промис выполнится успешно, если сгенерировано число от 1 до 5, и с ошибкой - если от 6 до 10.
 */
function CalcRandom(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

async function ShowRandom() {
    
let RandomNum = CalcRandom(10);
RandomNum++;
console.log(RandomNum)
let PromiseRandom = new Promise((resolve,reject) => setTimeout(() => RandomNum < 6 ? resolve('Good') : reject('Bad') , RandomNum * 1000));

let resultRandom = await PromiseRandom;
console.log(resultRandom)

}
ShowRandom()
/**
 * Задание 7
 * Сделайте 3 промиса, в каждом из которых расположена функция setTimeout со случайно задержкой от 1 до 5 секунд.
 * Пусть каждый промис своим результатом возвращает эту задержку.
 * С помощью Promise.all получите массив результатов, найдите его сумму, выведите на экран.
 */
async function SumPromise() {
    
    Promise.all([
        new Promise(resolve => setTimeout(() => {
            let RandomNumFirst = CalcRandom(5);
            RandomNumFirst++;
            resolve(RandomNumFirst),  RandomNumFirst * 1000
        })), 

        new Promise(resolve => setTimeout(() => {
            let RandomNumSecond = CalcRandom(5);
            RandomNumSecond++;
            resolve(RandomNumSecond),  RandomNumSecond * 1000
        })), 

        new Promise(resolve => setTimeout(() => {
            let RandomNumThird = CalcRandom(5);
            RandomNumThird++;
            resolve(RandomNumThird),  RandomNumThird * 1000
        }))  
      ]).then(total => {alert([...total].reduce((sum,curr) => sum + curr, 0))});

}
SumPromise();