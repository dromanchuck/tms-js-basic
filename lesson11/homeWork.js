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
let div = document.getElementById('1');
fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.json())
  .then((json) => ShowNames(json))

function ShowNames(username) {
    username.forEach((item) => {
    let name = document.createElement('p');
    let phone = document.createElement('p');

    name.innerText = 'Name:' + ' ' + item.name;
    phone.innerText = 'Phone:' + ' ' + item.phone;

    div.style = `
      display: flex;
      flex-direction: column;
      border-bottom: 1px white solid;
    `;

    div.append(name,phone);
  });
}

/**
 * Задание 2
 * Сделать запрос при помощи fetch на адрес https://jsonplaceholder.typicode.com/users/1/todos,
 * вывести todo list пользователя, отобразить текст тудушки и индикатор выполнена она или нет.
 * Вывести в html внутри div с id = 2
 */
let div2 = document.getElementById('2');
fetch('https://jsonplaceholder.typicode.com/users/1/todos')
  .then((response) => response.json())
  .then((json) => ShowTODO(json))

function ShowTODO(showTitle) {
    showTitle.forEach((item) => {
    let title = document.createElement('p');
    let completed = document.createElement('p');

    title.innerText = 'Title:' + ' ' + item.title;
    completed.innerText = 'Completed:' + ' ' + item.completed;

    div2.style = `
      display: flex;
      flex-direction: column;
      border-bottom: 2px solid white;
    `;

    div2.append(title,completed);
  });
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
let div3 = document.getElementById('3');
fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
  .then((response) => response.json())
  .then((json) => ShowPhoto(json))

  function ShowPhoto(photos) {
    photos.forEach((item) => {
    let url = document.createElement('img');
    url.setAttribute('src', item.url);

    url.innerText = 'Photo:' + ' ' + item.url;

    div3.style = `
      display: flex;
      flex-direction: column;
      border-bottom: 2px solid white;
    `;

    div3.append(url);
  });
}
/**
 * Задание 4
 * Сделать запрос альбомов при помощи fetch на адрес https://jsonplaceholder.typicode.com/albums,
 * Отобразить список альбомов и сделать там, чтобы по нажатию на альбом вместа списка альбомов
 * отобразились фотографии, которые относяться к этому альбому(https://jsonplaceholder.typicode.com/photos).
 * В списке альбомов добавить кнопку Назад, по нажатию на которую переходим обратно на список альбомов.
 */
// let div4 = document.getElementById('4');
// fetch('https://jsonplaceholder.typicode.com/albums/')
//   .then((response) => response.json())
//   .then((json) => ShowAlbums(json))

//   function ShowAlbums(albums) {
//       albums.forEach((item) => {
//       let album = document.createElement('p');
//       album.setAttribute('class', item.id)
//       album.innerText = 'Album:' + ' ' + item.id;
      
//       album.onclick = () => {
//         ShowPhotos(item.url);
//       }
    
//       div4.style = `
//         display: flex;
//         flex-direction: column;
//         border-bottom: 2px solid white;
//       `;

//       div4.append(album);
//     });
// }

//         function ShowPhotos(photo) {

<<<<<<< HEAD
//           fetch('https://jsonplaceholder.typicode.com/photos')
//         .then((response) => response.json())
//         .then((json) => ShowPhotos(json))


//           photo.forEach((item) => {
//                 let photo = document.createElement('img');
//                 photo.setAttribute('src', item.url);
            
//                 photo.innerText = 'Photo:' + ' ' + item.url;

              
//           });
//         }

// не работает
        
=======
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

>>>>>>> 8d04ff9ca90033baf2c5aa1ffc0a7e347b619659
/**
 * Задание 5
 *
 * Создать 2 инпута(1 - заголовок, 2 - текст поста) и кнопку.
 * По нажатию на кнопку сделать POST запрос для добавления нового поста(https://jsonplaceholder.typicode.com/posts).
 * Сделать так, чтобы если в инпутах ничего не введено кнопка должна некликабельна(атрибут disabled).
 */
<<<<<<< HEAD
  
  let div5 = document.createElement('div');
  div5.setAttribute('id', '5');
  let inp51 = document.createElement('input');
  inp51.setAttribute('placeholder', 'Заголовок');
  let inp52 = document.createElement('input');
  inp52.setAttribute('placeholder', 'Текст поста')
  let button5 = document.createElement('button');
  button5.setAttribute('disabled', true)

  button5.innerHTML = 'Create Post';

  document.body.append(div5);

  div5.append(inp51,inp52,button5);

inp51.oninput = () =>{
  if(inp51.value){
    button5.removeAttribute('disabled', true)
  }
}

inp52.oninput = () =>{
  if(inp52.value){
    button5.removeAttribute('disabled', true)
  }
}



button5.onclick = () =>{
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: inp51.value,
        body: inp52.value,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
}
=======

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
>>>>>>> 8d04ff9ca90033baf2c5aa1ffc0a7e347b619659
