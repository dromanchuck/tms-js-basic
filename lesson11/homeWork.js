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

/**
 * Задание 2
 * Сделать запрос при помощи fetch на адрес https://jsonplaceholder.typicode.com/users/1/todos,
 * вывести todo list пользователя, отобразить текст тудушки и индикатор выполнена она или нет.
 * Вывести в html внутри div с id = 2
 */

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

/**
 * Задание 4
 * Сделать запрос альбомов при помощи fetch на адрес https://jsonplaceholder.typicode.com/albums,
 * Отобразить список альбомов и сделать там, чтобы по нажатию на альбом вместа списка альбомов
 * отобразились фотографии, которые относяться к этому альбому(https://jsonplaceholder.typicode.com/photos).
 * В списке альбомов добавить кнопку Назад, по нажатию на которую переходим обратно на список альбомов.
 */

try {
  let container = document.querySelector('div[id="4"]');
  let albumsContainer = document.createElement("div");
  let photosContainer = document.createElement("div");
  let backButton = document.createElement("button");

  backButton.innerText = "Go back";
  backButton.addEventListener("click", () => {
    photosContainer.innerHTML = "";

    photosContainer.replaceWith(albumsContainer);
    backButton.remove();
  });

  container.append(albumsContainer);

  fetch("https://jsonplaceholder.typicode.com/albums")
    .then((res) => {
      return res.json();
    })
    .then((albums) => {
      let albumsElements = albums.map((item) => {
        let p = document.createElement("p");
        p.innerText = item.title;
        p.id = item.id;

        p.style = `
          border: 1px solid white;
        `;

        return p;
      });

      albumsContainer.append(...albumsElements);
    });

  albumsContainer.addEventListener("click", (event) => {
    if (event.target.tagName === "P") {
      console.log(event.target);
      let albumId = event.target.id;

      fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
        .then((res) => res.json())
        .then((photos) => {
          let photosElems = photos.map((item) => {
            let img = document.createElement("img");
            img.src = item.url;

            return img;
          });

          photosContainer.append(backButton, ...photosElems);

          albumsContainer.replaceWith(photosContainer);
        });
    }
  });
} catch (error) {
  console.log(error);
}

/**
 * Задание 5
 *
 * Создать 2 инпута(1 - заголовок, 2 - текст поста) и кнопку.
 * По нажатию на кнопку сделать POST запрос для добавления нового поста(https://jsonplaceholder.typicode.com/posts).
 * Сделать так, чтобы если в инпутах ничего не введено кнопка должна некликабельна(атрибут disabled).
 */

const titleInput = document.querySelector(".title");
const textInput = document.querySelector(".text");
const postBtn = document.querySelector(".post");

function checkInputs() {
  if (!titleInput.value || !textInput.value) {
    postBtn.disabled = true;
  } else {
    postBtn.disabled = false;
  }
}

titleInput.addEventListener("input", checkInputs);
textInput.addEventListener("input", checkInputs);

postBtn.addEventListener("click", () => {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: titleInput.value,
      text: textInput.value,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
});
