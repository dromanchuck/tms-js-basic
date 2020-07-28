/**
 * Задание 0
 * Сделать запрос при помощи fetch на адрес https://jsonplaceholder.typicode.com/users,
 * вывести список пользователей, отобразить имя, username, email, телефон каждого пользователя.
 * Вывести в html внутри div с id = 0
 */
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((json) => {
    const obj = json;
    return obj;
  })
  .then((obj) => {
    const div = document.createElement("div");
    const ul = document.createElement("ul");
    document.body.append(div);
    div.append(ul);
    div.setAttribute("id", "0");
    console.log(obj);
    obj.forEach((elem) => {
      const li = document.createElement("li");
      const p = document.createElement("p");
      ul.append(li);
      li.append(p);
      const string = `name = ${elem.name}, username = ${elem.username}, email = ${elem.email}, phone = ${elem.phone}`;
      p.append(string);
    });
  });
/**
 * Задание 1
 * Сделать запрос при помощи fetch на адрес https://jsonplaceholder.typicode.com/users/1/todos,
 * вывести todo list пользователя, отобразить текст тудушки и индикатор выполнена она или нет.
 * Вывести в html внутри div с id = 1
 */
fetch("https://jsonplaceholder.typicode.com/users/1/todos")
  .then((response) => response.json())
  .then((json) => {
    let obj = json;
    return obj;
  })
  .then((obj) => {
    const div = document.createElement("div");
    const ul = document.createElement("ul");
    document.body.append(div);
    div.append(ul);
    div.setAttribute("id", "1");
    obj.forEach((elem) => {
      const li = document.createElement("li");
      const p = document.createElement("p");
      ul.append(li);
      li.append(p);
      let decision = "";
      elem.completed === true ? (decision = "Верно") : (decision = "Неверно");
      const newString = `ToDoItem = ${elem.title},  ${decision}`;
      p.append(newString);
    });
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
fetch("https://jsonplaceholder.typicode.com/albums/1/photos")
  .then((response) => response.json())
  .then((json) => {
    let obj = json;
    console.log(obj);
    return obj;
  })
  .then((obj) => {
    const div = document.createElement("div");
    const ul = document.createElement("ul");
    document.body.append(div);
    div.append(ul);
    div.setAttribute("id", "2");
    obj.forEach((elem) => {
      const li = document.createElement("li");
      const img = document.createElement("img");
      ul.append(li);
      li.append(img);
      img.setAttribute("src", elem.url);
    });
  });