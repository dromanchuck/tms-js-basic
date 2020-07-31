/**
 * Решить задания
 * https://learn.javascript.ru/task/async-from-regular
  https://learn.javascript.ru/task/rewrite-async
  http://new.code.mu/ru/javascript/book/promise/resolve-reject/
 */

/**
 * Задание со зведочкой
 *
 * Переписать дз к уроку 11 используя async/await вместо промисов
 *
 */

 /**
 * Задание 0
 * Сделать запрос при помощи fetch на адрес https://jsonplaceholder.typicode.com/users,
 * вывести список пользователей, отобразить имя, username, email, телефон каждого пользователя.
 * Вывести в html внутри div с id = 0
 */

async function fetchAsyncUsers() {

    try {
        let res = await fetch("https://jsonplaceholder.typicode.com/users");
        let users = await res.json(); 

        let div0 = document.createElement('div');
        div0.setAttribute('id', '0');
        let ol = document.createElement('ol');

        for(let i = 0; i < users.length; i++) {
        
            let user = document.createElement('li');
            user.innerHTML = '<strong>Name: </strong>' + users[i].name + '; ';
            user.innerHTML += '<strong>Username: </strong>' + users[i].username + '; ';
            user.innerHTML += '<strong>Email: </strong>' + users[i].email + '; ';
            user.innerHTML += '<strong>Phone: </strong>' + users[i].phone + ';';
        
        
            ol.append(user);
            div0.append(ol);
            document.body.append(div0);
        }
    } catch (e) {
        console.error(e);
    }
};

fetchAsyncUsers();

/**
 * Задание 1
 * Сделать запрос при помощи fetch на адрес https://jsonplaceholder.typicode.com/users/1/todos,
 * вывести todo list пользователя, отобразить текст тудушки и индикатор выполнена она или нет.
 * Вывести в html внутри div с id = 1
 */

async function fetchAsyncTodos() {

    try {
        let res = await fetch("https://jsonplaceholder.typicode.com/users/1/todos");
        let json = await res.json(); 


        let div1 = document.createElement('div');
        div1.setAttribute('id', '1');
        let ol1 = document.createElement('ol');
 
        for(let i = 0; i < json.length; i++) {
        
            let todos = document.createElement('li');
            todos.innerHTML = '<strong>Title: </strong>' + json[i].title + '; ';
            todos.innerHTML += '<strong>Completed: </strong>' + json[i].completed + '; ';

            ol1.append(todos);
            div1.append(ol1);
            document.body.append(div1);
        }
    } catch (e) {
        console.error(e);
    }
};

fetchAsyncTodos();



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
async function fetchAsyncPhoto() {

    try {
        let res = await fetch("https://jsonplaceholder.typicode.com/albums/1/photos");
        let json = await res.json();

        let div2 = document.createElement('div');
        div2.setAttribute('id', '2');
        let ol2 = document.createElement('ol');

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
    } catch (e) {
        console.error(e);
    }
}; 

fetchAsyncPhoto();
