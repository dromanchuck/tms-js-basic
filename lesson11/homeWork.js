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

let div1 = document.querySelector('div[id="1"]');

function showUsers() {
    fetch(`https://jsonplaceholder.typicode.com/users`)
        .then(response => response.json())
        .then(users => {

            users.forEach(user => {

                let name = user.name;
                let phone = user.phone;
                let userInfo = document.createElement('p');
                div1.append(userInfo);
                userInfo.innerHTML = `name: ${name}, phone: ${phone};`

            });
        })
}

showUsers();

/**
 * Задание 2
 * Сделать запрос при помощи fetch на адрес https://jsonplaceholder.typicode.com/users/1/todos,
 * вывести todo list пользователя, отобразить текст тудушки и индикатор выполнена она или нет.
 * Вывести в html внутри div с id = 2
 */

let div2 = document.querySelector('div[id="2"]');

function showToDoList() {
    fetch(`https://jsonplaceholder.typicode.com/users/1/todos`)
        .then(response => response.json())
        .then(userToDo => {
            userToDo.forEach(user => {
                let userId = user.userId;
                let toDoName = user.title;
                let toDoStatus = user.completed;
                let toDoInfo = document.createElement('p');
                div2.append(toDoInfo);
                toDoInfo.innerText = `User Id: ${userId}. Задача ${toDoName} выполнена? ${toDoStatus};`;
            });
        })
}
showToDoList()

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

let div3 = document.querySelector('div[id="3"]');

fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
    .then(response => response.json())
    .then(photos => {
        let images = '';
        for (let photo of photos) {
            images += `<img src="${photo.url}" width="50" height="50">`
        };
        div3.innerHTML = images;
    })

/**
 * Задание 4
 * Сделать запрос альбомов при помощи fetch на адрес https://jsonplaceholder.typicode.com/albums,
 * Отобразить список альбомов и сделать там, чтобы по нажатию на альбом вместа списка альбомов
 * отобразились фотографии, которые относяться к этому альбому(https://jsonplaceholder.typicode.com/photos).
 * В списке альбомов добавить кнопку Назад, по нажатию на которую переходим обратно на список альбомов.
 */

// :(

/**
 * Задание 5
 *
 * Создать 2 инпута(1 - заголовок, 2 - текст поста) и кнопку.
 * По нажатию на кнопку сделать POST запрос для добавления нового поста(https://jsonplaceholder.typicode.com/posts).
 * Сделать так, чтобы если в инпутах ничего не введено кнопка должна некликабельна(атрибут disabled).
 */

let input1 = document.createElement('input');
let input2 = document.createElement('input');
let button = document.createElement('button');
let container = document.createElement('div');

container.append(input1, input2, button);
document.body.append(container);

input1.placeholder = 'Заголовок';
input2.placeholder = 'Текст поста';
button.innerText = 'Cделать Post';

button.setAttribute('disabled', '');

container.addEventListener('input', (event) => {
    if (event.target.tagName !== 'INPUT') {
        return
    }
    if (event.target.value !== '') {
        button.removeAttribute('disabled')
    } else {
        button.setAttribute('disabled', '')
    }
});

button.addEventListener('click', () => {
    let array = [input1.value, input2.value];
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(array)
    })
})