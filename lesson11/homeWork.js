/**
 * Задание 0
 * Сделать запрос при помощи fetch на адрес https://jsonplaceholder.typicode.com/users,
 * вывести список пользователей, отобразить имя, username, email, телефон каждого пользователя.
 * Вывести в html внутри div с id = 0
 */

/**
 * Задание 1
 * Сделать запрос при помощи fetch на адрес https://jsonplaceholder.typicode.com/users/1/todos,
 * вывести todo list пользователя, отобразить текст тудушки и индикатор выполнена она или нет.
 * Вывести в html внутри div с id = 1
 */

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

fetch("https://jsonplaceholder.typicode.com/albums/1/photos")
  .then((response) => response.json())
  .then((json) => {
    const object = json;
    return object;
  })
  .then((object) => {
    let ol = document.createElement("ol");
    ol.setAttribute("class", "third-list");

    let h2 = document.createElement("h2");
    h2.append("Задание 2");
    let thirdContainer = document.getElementById("2");
    thirdContainer.append(h2);
    thirdContainer.append(ol);
    object.forEach((elem) => {
      let li = document.createElement("li");
      ol.append(li);
      let img = document.createElement("img");
      img.setAttribute("class", "photo");
      img.setAttribute("src", elem.url);
      li.append(img);
    });
  });
