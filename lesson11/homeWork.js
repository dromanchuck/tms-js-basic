/**
 * Домашнее задание к занятию 11
 * Каждому нужно создать новую ветку от ветки master. Название ветки должно содержать имя + первая буква фамилии + /lesson11.
 * Например: dmitryR/lesson11. Выполнение задания производится в свое ветке и в этом файле.
 * После выполнения задания делаете пулл реквест и сообщаете о том, что задание выполнено:)
 * В случае неполадок с гитом, присылаете папку с проектом мне в личные сообщения
 * Код решения должен быть сразу же после самого задания
 */

/**
 * Задание 1
 * Сделать запрос при помощи fetch на адрес https://jsonplaceholder.typicode.com/users,
 * вывести список пользователей, отобразить имя, телефон каждого пользователя.
 * Вывести в html внутри div с id = 1
 */

const div1 = document.querySelector("div[id='1']");

fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.json())
  .then((users) => {
    div1.innerHTML = users.reduce(
      (acc, user) => acc + `Name: ${user.name} --- Tel: ${user.phone}<br />`,
      ''
    );
  });

/**
 * Задание 2
 * Сделать запрос при помощи fetch на адрес https://jsonplaceholder.typicode.com/users/1/todos,
 * вывести todo list пользователя, отобразить текст тудушки и индикатор выполнена она или нет.
 * Вывести в html внутри div с id = 2
 */

const div2 = document.querySelector("div[id='2']");

fetch('https://jsonplaceholder.typicode.com/users/1/todos')
  .then((response) => response.json())
  .then((todos) => {
    div2.innerHTML = todos.reduce(
      (acc, todo) =>
        acc + `Title: ${todo.title} --- Completed: ${todo.completed}<br />`,
      ''
    );
  });

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

const div3 = document.querySelector("div[id='3']");

fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
  .then((response) => response.json())
  .then((photos) => {
    div3.innerHTML = photos.reduce(
      (acc, photo) => acc + `<img src='${photo.url}' width='20' height='20' />`,
      ''
    );
  });

/**
 * Задание 4
 * Сделать запрос альбомов при помощи fetch на адрес https://jsonplaceholder.typicode.com/albums,
 * Отобразить список альбомов и сделать так, чтобы по нажатию на альбом вместо списка альбомов
 * отобразились фотографии, которые относятся к этому альбому(https://jsonplaceholder.typicode.com/photos).
 * В списке альбомов добавить кнопку Назад, по нажатию на которую переходим обратно на список альбомов.
 */

const div4 = document.querySelector("div[id='4']");
let temp;

fetch('https://jsonplaceholder.typicode.com/albums')
  .then((response) => response.json())
  .then((albums) => {
    div4.innerHTML = albums.reduce(
      (acc, album) => acc + `<div data-id='${album.id}'>${album.title}</div>`,
      ''
    );

    div4.addEventListener('click', (event) => {
      if (!event.target.getAttribute('data-id')) return;

      fetch(
        `https://jsonplaceholder.typicode.com/albums/${event.target.getAttribute(
          'data-id'
        )}/photos`
      )
        .then((response) => response.json())
        .then((photos) => {
          temp = div4.innerHTML;
          div4.innerHTML = photos.reduce(
            (acc, photo) =>
              acc + `<img src='${photo.url}' width='20' height='20' />`,
            `<button onclick="div4.innerHTML = temp">Назад</button><br>`
          );
        });
    });
  });

/**
 * Задание 5
 *
 * Создать 2 инпута(1 - заголовок, 2 - текст поста) и кнопку.
 * По нажатию на кнопку сделать POST запрос для добавления нового поста(https://jsonplaceholder.typicode.com/posts).
 * Сделать так, чтобы если в инпутах ничего не введено кнопка должна быть некликабельна(атрибут disabled).
 */

const div5 = document.createElement('div');
const input5_1 = document.createElement('input');
const input5_2 = document.createElement('input');
const button5 = document.createElement('button');

input5_1.placeholder = 'Заголовок';
input5_2.placeholder = 'Текст поста';
button5.innerText = 'Сдедать POST запрос';

document.body.append(div5);
div5.append(input5_1, input5_2, button5);

button5.setAttribute('disabled', '');

div5.addEventListener('input', (event) => {
  if (event.target.tagName !== 'INPUT') return;
  if (input5_1.value.length !== 0 && input5_2.value.length !== 0)
    button5.removeAttribute('disabled');
  else button5.setAttribute('disabled', '');
});

button5.addEventListener('click', () => {
  let post = {
    title: `${input5_1.value}`,
    body: `${input5_2.value}`,
  };
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify(post),
  }).then((response) => console.log(response));
});
