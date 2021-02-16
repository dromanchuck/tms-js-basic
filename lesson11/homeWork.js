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

let div1 = document.querySelector("div[id='1']")

function showUsers(users) {
  users.forEach(user => {
    let info = document.createElement('div')
    info.innerHTML = `user: ${user.name}, name: ${user.name}, phone: ${user.phone}`
    // div1.append(info)
  })
}

let promise = fetch(`https://jsonplaceholder.typicode.com/users`)
  .then(result => {
    return result.json()
  }).then(result => {
    showUsers(result)
  })


/**
 * Задание 2
 * Сделать запрос при помощи fetch на адрес https://jsonplaceholder.typicode.com/users/1/todos,
 * вывести todo list пользователя, отобразить текст тудушки и индикатор выполнена она или нет.
 * Вывести в html внутри div с id = 2
 */

let div2 = document.querySelector("div[id='2']")

function showTodo(todos) {
  todos.forEach(todo => {
    let info = document.createElement('div')
    info.innerHTML = `text: ${todo.title}, done: ${todo.completed}`
    // div2.append(info)
  })
}

let promise2 = fetch(`https://jsonplaceholder.typicode.com/users/1/todos`)
  .then(result => {
    return result.json()
  }).then(result => {
    showTodo(result)
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

let div3 = document.querySelector("div[id='3']")


let promise3 = fetch(`https://jsonplaceholder.typicode.com/albums/1/photos`)
  .then(result => {
    return result.json()
  }).then(result => {
    result.forEach(userPhoto => {
      let photo = document.createElement('img')
      photo.setAttribute('src', userPhoto.url)
      // div3.append(photo)
    })
  })

/**
 * Задание 4
 * Сделать запрос альбомов при помощи fetch на адрес https://jsonplaceholder.typicode.com/albums,
 * Отобразить список альбомов и сделать там, чтобы по нажатию на альбом вместа списка альбомов
 * отобразились фотографии, которые относяться к этому альбому(https://jsonplaceholder.typicode.com/photos).
 * В списке альбомов добавить кнопку Назад, по нажатию на которую переходим обратно на список альбомов.
 */

// let div4 = document.querySelector("div[id='4']")
let div41 = document.createElement('div')
let back = document.createElement('button')
back.innerHTML = 'Go Back'

function createAlbum(elems) {
  elems.forEach(elem => {
    let alb = document.createElement('div')
    alb.setAttribute('idValue', elem.id)
    alb.innerHTML = `id: ${elem.id}, userId: ${elem.userId}, title: ${elem.title}`
    div4.append(alb)
  })
}


let promise4 = fetch(`https://jsonplaceholder.typicode.com/albums`)
  .then(result => {
    return result.json()
  }).then(result => {
    createAlbum(result)

    div4.addEventListener('click', event => {
      console.log(event.target.getAttribute('idValue'))
      let id = event.target.getAttribute('idValue')

      fetch(`https://jsonplaceholder.typicode.com/albums/${id}/photos`)
        .then(result => {
          return result.json()
        }).then(result => {
          result.forEach((result => {
            let photo = document.createElement('img')
            photo.setAttribute('src', result.url)
            div41.append(photo)
          }))
        }).then(() => {
          document.body.append(div41)
          div41.append(back)
          div4.classList.add('hidden')
          back.addEventListener('click', event => {
            div4.classList.remove('hidden')
            while (div41.firstChild) {
              div41.removeChild(div41.firstChild);
            }
            div41.remove()
          })
        })
    })
  })

/**
 * Задание 5
 *
 * Создать 2 инпута(1 - заголовок, 2 - текст поста) и кнопку.
 * По нажатию на кнопку сделать POST запрос для добавления нового поста(https://jsonplaceholder.typicode.com/posts).
 * Сделать так, чтобы если в инпутах ничего не введено кнопка должна некликабельна(атрибут disabled).
 */


let inputHeader = document.createElement('input')
let inputPostText = document.createElement('input')
let btn = document.createElement('button')
btn.innerText = 'Add Post'

btn.setAttribute('disabled', true)

inputHeader.oninput = () => {
  if (inputPostText.value.trim() === '') {

  }
  else {
    btn.removeAttribute('disabled', true)
  }
}

inputPostText.oninput = () => {
  if (inputHeader.value.trim() === '') {

  }
  else {
    btn.removeAttribute('disabled', true)
  }
}

btn.onclick = () => {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: inputHeader.value,
      body: inputPostText.value,
      userId: 1,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json))


}
document.body.append(inputHeader, inputPostText, btn)

