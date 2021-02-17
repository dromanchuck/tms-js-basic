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

//  let div1 = document.getElementById('1');

//  let promise = fetch('https://jsonplaceholder.typicode.com/users').then((res) => {
//    return res.json();
//  }).then((response) => {
//    response.forEach((user) => {
//     let name = document.createElement('p');
//     name.innerText = user.name;

//     let phoneNumber = document.createElement('p');
//     phoneNumber.innerText = user.phone;

//     phoneNumber.style = `border-bottom : 1px solid black`;

//     div1.append(name, phoneNumber);
//   });
// });


/**
 * Задание 2
 * Сделать запрос при помощи fetch на адрес https://jsonplaceholder.typicode.com/users/1/todos,
 * вывести todo list пользователя, отобразить текст тудушки и индикатор выполнена она или нет.
 * Вывести в html внутри div с id = 2
 */

//  let div2 = document.getElementById('2');

//  let promise = fetch('https://jsonplaceholder.typicode.com/users/1/todos').then((res) => {
//    return res.json();
// }).then((response) => {
//      response.forEach((user) => {
//       let todoTitle = document.createElement('p');
//       todoTitle.innerText = `TODO: ${user.title}`;
  
//       let complete = document.createElement('p');
//       complete.innerText = `Completed: ${user.completed}`;
  
//       complete.style = `border-bottom : 1px solid black`;
  
//       div2.append(todoTitle, complete);
//     });
//   });

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

//  let div3 = document.getElementById('3');

//  let promise = fetch('https://jsonplaceholder.typicode.com/albums/1/photos').then((result) => {
//    return result.json();
//  }).then((response) => {
//    console.log(response);
//    response.forEach((photo) => {
//     let albumPhoto = document.createElement('img');
//     albumPhoto.setAttribute('src', `${photo.url}`);
      
//     div3.append(albumPhoto);
//    })
//  })

/**
 * Задание 4
 * Сделать запрос альбомов при помощи fetch на адрес https://jsonplaceholder.typicode.com/albums,
 * Отобразить список альбомов и сделать там, чтобы по нажатию на альбом вместа списка альбомов
 * отобразились фотографии, которые относяться к этому альбому(https://jsonplaceholder.typicode.com/photos).
 * В списке альбомов добавить кнопку Назад, по нажатию на которую переходим обратно на список альбомов.
 */


//  let div4 = document.getElementById('4');

//  let promise = fetch(`https://jsonplaceholder.typicode.com/albums/`).then((result) => {
//    return result.json();
//  }).then((response) => {
//    response.forEach(album => {
//       let p = document.createElement('p');
//       p.innerText = `Album : ${album.title}`;

//       div4.append(p);

//       p.onclick = () => {
//         fetch(`https://jsonplaceholder.typicode.com/photos`).then((result) => {
//           return result.json();
//         }).then((response) => {
//           response.forEach(photo => {
//             let photoItem = document.createElement('img');
//             photoItem.setAttribute('src', `${photo.url}`);
//             if(photo.id === album.id) {
//               let button = document.createElement('button');
//               button.innerText = 'Назад';
//               p.innerText = '';
//               p.append(photoItem);
//               p.append(button);

//               button.onclick = () => {
//                 p.remove(photoItem);
//                 p.innerText = `Album : ${album.title}`;
//               }
//             }
//           })
//         })
//       }
//    });
//  })


/**
 * Задание 5
 *
 * Создать 2 инпута(1 - заголовок, 2 - текст поста) и кнопку.
 * По нажатию на кнопку сделать POST запрос для добавления нового поста(https://jsonplaceholder.typicode.com/posts).
 * Сделать так, чтобы если в инпутах ничего не введено кнопка должна некликабельна(атрибут disabled).
 */

//  let input1 = document.querySelector('.textInput1');
//  let input2 = document.querySelector('.textInput2');
//  let button = document.querySelector('.btn');

//    function inputs() {
//     if(!input1.value || !input2.value) {
//       button.disabled = true;    
//     } else {
//       button.disabled = false;    }
//   }
  
//   input1.addEventListener('input', inputs)
//   input2.addEventListener('input', inputs)


//  button.addEventListener('click', function() {
//    fetch('https://jsonplaceholder.typicode.com/posts', {
//      method: "POST",
//      body: JSON.stringify({
//        title: input1.value,
//        body: input2.value,
//        userId: 11,
//      }),
//      headers: {
//       "Content-type": "application/json; charset=UTF-8",
//     },  
//    }).then((response) => response.json()).then((json) => console.log(json));
//   })