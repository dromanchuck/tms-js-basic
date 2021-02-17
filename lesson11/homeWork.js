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

const div1 = document.getElementById(1)
const br = document.createElement('br')

const URL1 = 'https://jsonplaceholder.typicode.com/users'

const usersData = (users) => {
  users.forEach((user) => {
    // div1.append(`Name: ${user.name}, phone number: ${user.phone}; `)
  })
}

const users = fetch(URL1)
  .then((responce) => responce.json())
  .then((responce) => {
    usersData(responce)
  })

/**
 * Задание 2
 * Сделать запрос при помощи fetch на адрес https://jsonplaceholder.typicode.com/users/1/todos,
 * вывести todo list пользователя, отобразить текст тудушки и индикатор выполнена она или нет.
 * Вывести в html внутри div с id = 2
 */

const URL2 = 'https://jsonplaceholder.typicode.com/users/1/todos'

const div2 = document.getElementById('2')

const getTodoStatus = (todos) => {
  todos.forEach((todo) => {
    // div2.append(`Todo text: ${todo.title}, status: ${todo.completed}; `)
  })
}

const todoList = fetch(URL2)
  .then((responce) => responce.json())
  .then((responce) => {
    getTodoStatus(responce)
  })

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

const URL3 = 'https://jsonplaceholder.typicode.com/albums/1/photos'

const div3 = document.getElementById('3')

const getUsersPhoto = (photos) => {
  photos.forEach((photo) => {
    const imgCreate = document.createElement('img')
    imgCreate.setAttribute('src', photo.url)
    // div3.append(imgCreate)
  })
}

const usersAlbum = fetch(URL3)
  .then((responce) => responce.json())
  .then((responce) => {
    getUsersPhoto(responce)
  })

/**
 * Задание 4
 * Сделать запрос альбомов при помощи fetch на адрес https://jsonplaceholder.typicode.com/albums,
 * Отобразить список альбомов и сделать там, чтобы по нажатию на альбом вместа списка альбомов
 * отобразились фотографии, которые относяться к этому альбому(https://jsonplaceholder.typicode.com/photos).
 * В списке альбомов добавить кнопку Назад, по нажатию на которую переходим обратно на список альбомов.
 */

// const URL4 = 'https://jsonplaceholder.typicode.com/albums'
// const div4 = document.getElementById('4')
// const btn = document.createElement('button')
// const div4_1 = document.createElement('div')

// btn.innerHTML = 'Back'

// const getAlbums = (albums1) => {
//   albums1.forEach((elem) => {
//     let alb = document.createElement('div')
//     alb.setAttribute('idValue', elem.id)
//     alb.innerHTML = `id: ${elem.id}, userId: ${elem.userId}, title: ${elem.title}`
//     div4.append(alb)
//   })
// }

// const albums = fetch(URL4)
//   .then((responce) => responce.json())
//   .then((responce) => {
//     getAlbums(responce)

//     div4.addEventListener('click', (event) => {
//       console.log(event.target.getAttribute('idValue'))
//       let id = event.target.getAttribute('idValue')

//       fetch(`https://jsonplaceholder.typicode.com/albums/${id}/photos`)
//         .then((result) => {
//           return result.json()
//         })
//         .then((result) => {
//           result.forEach((result) => {
//             let photo = document.createElement('img')
//             photo.setAttribute('src', result.url)
//             div4_1.append(photo)
//           })
//         })
//         .then(() => {
//           document.body.append(div4_1)
//           div4_1.append(btn)
//           div4.classList.add('hide')
//           btn.addEventListener('click', (event) => {
//             div4.classList.remove('hide')
//             while (div4_1.firstChild) {
//               div4_1.removeChild(div4_1.firstChild)
//             }
//             div4_1.remove()
//           })
//         })
//     })
//   })

/**
 * Задание 5
 *
 * Создать 2 инпута(1 - заголовок, 2 - текст поста) и кнопку.
 * По нажатию на кнопку сделать POST запрос для добавления нового поста(https://jsonplaceholder.typicode.com/posts).
 * Сделать так, чтобы если в инпутах ничего не введено кнопка должна некликабельна(атрибут disabled).
 */

const inp1 = document.createElement('input')
const inp2 = document.createElement('input')
const btn1 = document.createElement('button')

btn1.innerText = 'Add POST'

btn1.setAttribute('disabled', true)

inp1.oninput = () => {
  if (inp2.value.trim() === '') {
  } else {
    btn1.removeAttribute('disabled', true)
  }
}

inp2.oninput = () => {
  if (inp1.value.trim() === '') {
  } else {
    btn1.removeAttribute('disabled', true)
  }
}

btn1.addEventListener('click', (event) => {
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: inp1.value,
      body: inp2.value,
      userId: 2,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((responce) => console.log(responce))
})

document.body.append(inp1, inp2, btn1)
