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
let line = `------------------------------------------`;
let container = document.getElementById("1");

fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.json())
  .then((json) => result(json));

  function result(data) {
    data.forEach(user => {
      let rowOfUser = document.createElement('p');
      rowOfUser.innerText = `name: ${user.name}, phone: ${user.phone}`;
      container.append(rowOfUser);
    });
    container.append(line);
  }
  

/**
 * Задание 2
 * Сделать запрос при помощи fetch на адрес https://jsonplaceholder.typicode.com/users/1/todos,
 * вывести todo list пользователя, отобразить текст тудушки и индикатор выполнена она или нет.
 * Вывести в html внутри div с id = 2
 */

let container2 = document.getElementById("2");

fetch('https://jsonplaceholder.typicode.com/users/1/todos')
.then((response) => response.json())
.then((json) => result1(json));

function result1(data) {
  data.forEach(user => {
    let rowOfUser = document.createElement('p');
    rowOfUser.innerText = `title: ${user.title}, completed: ${user.completed}`;
    container2.append(rowOfUser);
  });
  container2.append(line);
}


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
let container3 = document.getElementById("3");

fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
.then((response) => response.json())
.then((json) => result2(json));

function result2(data) {
  data.forEach(user => {
    let rowOfUser = document.createElement('img');
    
    rowOfUser.setAttribute('src', user.url);
    container3.append(rowOfUser);
  });
}

/**
 * Задание 4
 * Сделать запрос альбомов при помощи fetch на адрес https://jsonplaceholder.typicode.com/albums,
 * Отобразить список альбомов и сделать там, чтобы по нажатию на альбом вместа списка альбомов
 * отобразились фотографии, которые относяться к этому альбому(https://jsonplaceholder.typicode.com/photos).
 * В списке альбомов добавить кнопку Назад, по нажатию на которую переходим обратно на список альбомов.
 */

let container4 = document.getElementById("4");
let i = 1;

fetch('https://jsonplaceholder.typicode.com/albums')
  .then((response) => response.json())
  .then((json) => showAlbums(json));

//addFunc
function showAlbums(data) {
  data.forEach(user => {
    let rowOfUser = document.createElement('p');
    rowOfUser.setAttribute('class', i++);
    rowOfUser.innerText = user.title;
    container4.append(rowOfUser);
})}

function showListPhoto(elem) {
  let idNumber = elem.getAttribute('class');
  let data;

  fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${idNumber}`)
    .then((response) => response.json())
    .then((json) => data = json);
  
  data.forEach((item) => {
    let rowOfUser = document.createElement('img');
    rowOfUser.setAttribute('src', item.url);
    elem.append(rowOfUser);
  })  
}

//addEvent
let collection = container4.querySelectorAll('p'); //в консоли отрабатывает, выдаёт коллекцию p, тут выдаёт пустую коллекцию, почему?!
let arrCollection = [...collection];
arrCollection.forEach((item) => {
  item.onclick = showListPhoto(item);
})


/**
 * Задание 5
 *
 * Создать 2 инпута(1 - заголовок, 2 - текст поста) и кнопку.
 * По нажатию на кнопку сделать POST запрос для добавления нового поста(https://jsonplaceholder.typicode.com/posts).
 * Сделать так, чтобы если в инпутах ничего не введено кнопка должна некликабельна(атрибут disabled).
 */

 let container5 = document.createElement('div');
 let input1 = document.createElement('input');
 let input2 = document.createElement('input');
 let button = document.createElement('button');

 button.innerText = 'send';
 button.setAttribute("disabled", "disabled");

 document.body.append(container5);
 container5.append(input1, input2, button);

 input1.oninput = () => {
   if(input1 === '') {
    button.setAttribute("disabled", "disabled");
   } else {
    button.removeAttribute("disabled", "disabled");
   }
 }

 input2.oninput = () => {
  if(input2 === '') {
   button.setAttribute("disabled", "disabled");
  } else {
   button.removeAttribute("disabled", "disabled");
  }
}

  button.onclick = function() {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          title: input1.value,
          body: input2.value,
          userId: 1,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
    }