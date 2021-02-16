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
const task1 = document.getElementById("1");
function getUsers() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      return response.json();
    })
    .then((users) => {
      showUsers(users);
    });
}

function showUsers(users) {
  users.forEach((user) => {
    const userContainer = document.createElement("div");
    userContainer.classList.add("user-container");

    const name = document.createElement("p");
    name.innerText = user.name;

    const phone = document.createElement("p");
    phone.innerText = user.phone;

    userContainer.append(name, phone);
    task1.append(userContainer);
  });
}

getUsers();

/**
 * Задание 2
 * Сделать запрос при помощи fetch на адрес https://jsonplaceholder.typicode.com/users/1/todos,
 * вывести todo list пользователя, отобразить текст тудушки и индикатор выполнена она или нет.
 * Вывести в html внутри div с id = 2
 */

const task2 = document.getElementById("2");

function getTodos() {
  fetch("https://jsonplaceholder.typicode.com/users/1/todos")
    .then((response) => {
      return response.json();
    })
    .then((todos) => {
      showTodos(todos);
    });
}

function showTodos(todos) {
  todos.forEach((todo) => {
    const todoContainer = document.createElement("div");
    todoContainer.classList.add("todo-container");

    const title = document.createElement("p");
    title.innerText = `to do: ${todo.title}`;

    const isCompleted = document.createElement("p");
    isCompleted.innerText = `completed: ${todo.completed}`;

    todoContainer.append(title, isCompleted);
    task2.append(todoContainer);
  });
}

getTodos();

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
const task3 = document.getElementById("3");

function getPhotos() {
  fetch("https://jsonplaceholder.typicode.com/albums/1/photos")
    .then((response) => {
      return response.json();
    })
    .then((photos) => {
      showPhotos(photos);
    });
}

function showPhotos(photos) {
  photos.forEach((item) => {
    const photo = document.createElement("img");
    photo.classList.add("photo");
    photo.src = item.url;
    task3.append(photo);
  });
}

getPhotos();
/**
 * Задание 4
 * Сделать запрос альбомов при помощи fetch на адрес https://jsonplaceholder.typicode.com/albums,
 * Отобразить список альбомов и сделать там, чтобы по нажатию на альбом вместа списка альбомов
 * отобразились фотографии, которые относяться к этому альбому(https://jsonplaceholder.typicode.com/photos).
 * В списке альбомов добавить кнопку Назад, по нажатию на которую переходим обратно на список альбомов.
 */

const task4 = document.getElementById("4");
const backBtn = document.querySelector(".back");
const ul = document.createElement("ul");
const photosContainer = document.createElement("div");
photosContainer.classList.add("photos-contsiner");

function getAlbums() {
  fetch("https://jsonplaceholder.typicode.com/albums")
    .then((response) => {
      return response.json();
    })
    .then((albums) => {
      console.log(albums);
      showAlbums(albums);
    });
}

function showAlbums(albums) {
  albums.forEach((albumItem) => {
    const li = document.createElement("li");
    li.dataset.id = albumItem.id;
    li.innerText = albumItem.title;
    ul.append(li);
  });
  task4.append(ul);
}

getAlbums();

task4.addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {
    ul.classList.add("hidden");
    showPhotosByAlbum(event.target.dataset.id);
  }
});

backBtn.addEventListener("click", () => {
  photosContainer.innerHTML = "";
  ul.classList.remove("hidden");
});

function showPhotosByAlbum(id) {
  fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${id}`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      data.forEach((item) => {
        const img = document.createElement("img");
        img.classList.add("photo");
        img.src = item.url;
        photosContainer.append(img);
      });

      task4.append(photosContainer);
    });
}

/**
 * Задание 5
 *
 * Создать 2 инпута(1 - заголовок, 2 - текст поста) и кнопку.
 * По нажатию на кнопку сделать POST запрос для добавления нового поста(https://jsonplaceholder.typicode.com/posts).
 * Сделать так, чтобы если в инпутах ничего не введено кнопка должна некликабельна(атрибут disabled).
 */
const titleInput = document.querySelector('.title');
const textInput = document.querySelector('.text');
const postBtn = document.querySelector('.post');

function checkInputs() {
  if(!titleInput.value || !textInput.value) {
    postBtn.disabled = true;
  } else {
    postBtn.disabled = false;
  }
}

titleInput.addEventListener('input', checkInputs)
textInput.addEventListener('input', checkInputs)


postBtn.addEventListener("click", () => {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: titleInput.value,
      text: textInput.value
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
  .then((response) => response.json())
  .then((json) => console.log(json));
});
