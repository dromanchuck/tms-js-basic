/**
 * Задание 0
 * Сделать запрос при помощи fetch на адрес https://jsonplaceholder.typicode.com/users,
 * вывести список пользователей, отобразить имя, username, email, телефон каждого пользователя.
 * Вывести в html внутри div с id = 0
 */
let div0 = document.createElement('div');
div0.setAttribute('id', '0');
let ol = document.createElement('ol');

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((json) => {

    for(let i = 0; i < json.length; i++) {
        
      let users = document.createElement('li');
      users.innerHTML = '<strong>Name: </strong>' + json[i].name + '; ';
      users.innerHTML += '<strong>Username: </strong>' + json[i].username + '; ';
      users.innerHTML += '<strong>Email: </strong>' + json[i].email + '; ';
      users.innerHTML += '<strong>Phone: </strong>' + json[i].phone + ';';
        
        
      ol.append(users);
      div0.append(ol);
      document.body.append(div0);
    }
  });

/**
 * Задание 1
 * Сделать запрос при помощи fetch на адрес https://jsonplaceholder.typicode.com/users/1/todos,
 * вывести todo list пользователя, отобразить текст тудушки и индикатор выполнена она или нет.
 * Вывести в html внутри div с id = 1
 */
let div1 = document.createElement('div');
div1.setAttribute('id', '1');
let ol1 = document.createElement('ol');

fetch("https://jsonplaceholder.typicode.com/users/1/todos")
  .then((response) => response.json())
  .then((json) => {
 
    for(let i = 0; i < json.length; i++) {
        
      let todos = document.createElement('li');
      todos.innerHTML = '<strong>Title: </strong>' + json[i].title + '; ';
      todos.innerHTML += '<strong>Completed: </strong>' + json[i].completed + '; ';

      ol1.append(todos);
      div1.append(ol1);
      document.body.append(div1);
    }
  });

/**
 * Задание 2 
 * Сделать запрос при помощи fetch на адрес https://jsonplaceholder.typicode.com/albums/1/photos,
 * вывести фотографии, используя тег img. В качестве src для img использовать поле url в объекте фото
 * {
    "albumId": 1,
    "id": 4,
    "title": "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
    "url": "https://via.placeholder.com/600/d32776",
    "thumbnailUrl": "https://via.placeholder.com/150/d32776"
  },
 * Вывести в html внутри div с id = 2
 */
let div2 = document.createElement('div');
div2.setAttribute('id', '2');
let ol2 = document.createElement('ol');
 
fetch("https://jsonplaceholder.typicode.com/albums/1/photos")
  .then((response) => response.json())
  .then((json) => {
 
    for(let i = 0; i < json.length; i++) {

      let photos = document.createElement('li');
      let img = document.createElement('img');
      img.innerHTML = json[i].title;
      url = json[i].url;
      img.setAttribute('src', url);

      photos.append(img);
      ol2.append(photos);
      div2.append(ol2);
      document.body.append(div2);
    }
  });
