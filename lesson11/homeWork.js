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


const container = document.getElementById('1');
container.style = `border-bottom : 3px solid red`;

function getUser() {
  fetch('https://jsonplaceholder.typicode.com/users').then((response) => {
    return response.json();
  }).then((users) => {
    users.forEach((user) => {
      const nameOfUser = document.createElement('p');
      nameOfUser.innerText = user.name;

      const phoneOfUser = document.createElement('p');
      phoneOfUser.innerText = user.phone;
      phoneOfUser.classList.add('user_phone');

      container.append(nameOfUser, phoneOfUser);
    })
  });
};

getUser();

/**
 * Задание 2
 * Сделать запрос при помощи fetch на адрес https://jsonplaceholder.typicode.com/users/1/todos,
 * вывести todo list пользователя, отобразить текст тудушки и индикатор выполнена она или нет.
 * Вывести в html внутри div с id = 2
 */


const containerTask2 = document.getElementById('2');
containerTask2.style = `border-bottom : 3px solid red`;

function getToDo() {
  fetch('https://jsonplaceholder.typicode.com/users/1/todos').then((response) => {
    return response.json();
  }).then((users) => {
    users.forEach((user) => {
      const userTodo = document.createElement('p');
      userTodo.innerText = `Todo: ${user.title}`;

      const userTodoComplete = document.createElement('p');
      userTodoComplete.innerText = `Completed: ${user.completed}`;
      userTodoComplete.classList.add('user_todo_completed')

      containerTask2.append(userTodo, userTodoComplete);
    });
  });
};

getToDo();


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


const containerTask3 = document.getElementById('3');
containerTask3.style = `border-bottom : 3px solid red`;

function getImg() {
  fetch('https://jsonplaceholder.typicode.com/albums/1/photos').then((response) => {
    return response.json();
  }).then((users) => {
    users.forEach((photo) => {
      const userPhoto = document.createElement('img');
      userPhoto.setAttribute('src', `${photo.url}`);

      containerTask3.append(userPhoto);
    });
  });
};

getImg();

/**
 * Задание 4
 * Сделать запрос альбомов при помощи fetch на адрес https://jsonplaceholder.typicode.com/albums,
 * Отобразить список альбомов и сделать там, чтобы по нажатию на альбом вместа списка альбомов
 * отобразились фотографии, которые относяться к этому альбому(https://jsonplaceholder.typicode.com/photos).
 * В списке альбомов добавить кнопку Назад, по нажатию на которую переходим обратно на список альбомов.
 */


const containerTask4 = document.getElementById('4');
containerTask4.style = `border-bottom : 3px solid red`;

const albumsUl = document.createElement('ul');

const backbutton = document.createElement('button');

function getAlbum() {
  fetch('https://jsonplaceholder.typicode.com/albums').then((response) => {
    return response.json();
  }).then((albums) => {
    albums.forEach((album) => {
      const albumLi = document.createElement('li');
      albumLi.setAttribute('id', `${album.id}`);

      albumLi.innerText = `Title: ${album.title}. \n id: ${album.id}.`;

      albumsUl.append(albumLi);
    });
  });
  
  containerTask4.append(albumsUl);
};

getAlbum();

//В процессе...



/**
 * Задание 5
 *
 * Создать 2 инпута(1 - заголовок, 2 - текст поста) и кнопку.
 * По нажатию на кнопку сделать POST запрос для добавления нового поста(https://jsonplaceholder.typicode.com/posts).
 * Сделать так, чтобы если в инпутах ничего не введено кнопка должна некликабельна(атрибут disabled).
 */



const containerTask5 = document.createElement('div');

const firstInput = document.createElement('input');
firstInput.setAttribute('placeholder', 'Заголовок');

const secondInput = document.createElement('input');
secondInput.setAttribute('placeholder', 'Текст поста');

const addButton = document.createElement('button');
addButton.innerText = 'Добавить пост';
addButton.setAttribute('disabled', true);

containerTask5.append(firstInput, secondInput, addButton);
document.body.append(containerTask5);

/** не совсем нормально работает 'disabled' 
 * (изначально кнопка не кликабельна, но если что-то написать, 
 * а потом все стереть, сделать снова пустые инпуты, ее можно нажать)
 */

firstInput.oninput = () => {
  if(firstInput === null) {
    addButton.setAttribute('disabled', true)
  } else {
    addButton.removeAttribute('disabled', true)
  };
};

secondInput.oninput = () => {
  if (secondInput === null) {
    addButton.setAttribute('disabled', true)
  } else {
    addButton.removeAttribute('disabled', true)
  };
};

addButton.addEventListener('click', () => {
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify({
      title: firstInput.value,
      body: secondInput.value
    })
  })

  .then((response) => response.json());
});
