/**
 * Домашнее задание к занятию 11
 * Каждому нужно создать новую ветку от ветки master. Название ветки должно содержать имя + первая буква фамилии + /lesson11.
 * Например: dmitryR/lesson11. Выполнение задания производится в свое ветке и в этом файле.
 * После выполнения задания делаете пулл реквест и сообщаете о том, что задание выполнено:)
 * В случае неполодок с гитом, присылаете папку с проектом мне в личные сообщения
 * Код решения должен быть сразу же после самого задания
 */

/**
 * Задание 1
 * Сделать запрос при помощи fetch на адрес https://jsonplaceholder.typicode.com/users,
 * вывести список пользователей, отобразить имя, телефон каждого пользователя.
 * Вывести в html внутри div с id = 1
 */
let container = document.querySelector(`div[id = "1"]`);
document.body.style = `
background-color: #abede5;
`
container.style = `
  display: flex;
  flex-direction: column;
`
function showUsers(users){
  users.forEach(user => {
    let p = document.createElement('p');
    p.style = `
  color: #6c18a1;
  border-bottom: 3px #d10486 solid;
  `
    p.innerText = `UserId: ${user.id}; User Name: ${user.name}; User Phone: ${user.phone}.`
    container.append(p);
  })
}
let promise = fetch(`https://jsonplaceholder.typicode.com/users`)
.then((res) => res.json())
.then((response) => showUsers(response));
/**
 * Задание 2
 * Сделать запрос при помощи fetch на адрес https://jsonplaceholder.typicode.com/users/1/todos,
 * вывести todo list пользователя, отобразить текст тудушки и индикатор выполнена она или нет.
 * Вывести в html внутри div с id = 2
 */
let container1 = document.querySelector(`div[id = "2"]`);
document.body.style = `
background-color: #abede5;
`
container1.style = `
  display: flex;
  flex-direction: column;
`
function showTodo(items){
  items.forEach(item => {
    let p1 = document.createElement('p');
    p1.style = `
  color: #6c18a1;
  border-bottom: 3px #d10486 solid;
  `
    p1.innerText = `ToDo: ${item.title} Progress Bar: ${item.completed}`
    container1.append(p1);
  })
}
let promise1 = fetch(`https://jsonplaceholder.typicode.com/users/1/todos`)
.then((res) => res.json())
.then((response) => showTodo(response));
/**
 * Задание 3
 * Сделать запрос при помощи fetch на адрес https://jsonplaceholder.typicode.com/albums/1/photos,
 * вывести фотографии, используя тег img. В качестве src для img использовать поле url в объекте фото
 * {
    "albumId": 1,
    "id": 4,
    "title": "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
    "url": "https://via.placeholder.com/600/d32776",
    "thumbnailUrl": "https://via.placeholder.com/150/d32776"
  },
 * Вывести в html внутри div с id = 3
 */
let container2 = document.querySelector(`div[id = "3"]`);
document.body.style = `
background-color: #abede5;
`
container2.style = `
  display: flex;
  flex-direction: column;
`
function showImages(items){
  items.forEach(item => {
    let img = document.createElement('img');
    img.style = `
    height: 600px;
    weight: 600px;`
    img.setAttribute("src", item.url);
    img.innerText = `${item.thumbnailUrl}`
    container2.append(img);
  })
}
let promise2 = fetch(`https://jsonplaceholder.typicode.com/albums/1/photos`)
.then((res) => res.json())
.then((response) => showImages(response));
/**
 * Задание 4
 * Сделать запрос альбомов при помощи fetch на адрес https://jsonplaceholder.typicode.com/albums,
 * Отобразить список альбомов и сделать там, чтобы по нажатию на альбом вместа списка альбомов
 * отобразились фотографии, которые относяться к этому альбому(https://jsonplaceholder.typicode.com/photos).
 * В списке альбомов добавить кнопку Назад, по нажатию на которую переходим обратно на список альбомов.
 */

/**
 * Задание 5
 *
 * Создать 2 инпута(1 - заголовок, 2 - текст поста) и кнопку.
 * По нажатию на кнопку сделать POST запрос для добавления нового поста(https://jsonplaceholder.typicode.com/posts).
 * Сделать так, чтобы если в инпутах ничего не введено кнопка должна некликабельна(атрибут disabled).
 */
let input1 = document.createElement(`input`);
let input2 = document.createElement(`input`);
let button = document.createElement(`button`);
button.innerText = `Добавить пост`;
button.setAttribute(`id`, `empty`);
button.setAttribute(`disabled`, true);
document.body.append(input1, input2, button);
function inputIsEmpty(value){
  if(input1.value !== 0 && input2.value !== 0) { 
      button.removeAttribute(`disabled`, true) 
  }
}
button.addEventListener(`click`, (value) => {
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: input1.value,
      body: input2.value,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
    if(input1.value === null && input2 === null) {
      button.setAttribute(`disabled`);
    }
})
