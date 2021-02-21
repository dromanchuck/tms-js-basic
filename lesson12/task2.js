const URL4 = 'https://jsonplaceholder.typicode.com/albums'
const div4 = document.getElementById('result')
const btn = document.createElement('button')
const closeBtn = document.querySelector('.closeButton')
const div4_1 = document.createElement('div')
const modalWrapper = document.querySelector('.modalWrapper')
const modalBody = document.querySelector('.modalBody')

closeBtn.addEventListener('click', (event) => {
  modalWrapper.classList.add('h')
})

btn.innerHTML = 'Back'

const getAlbums = (albums1) => {
  albums1.forEach((elem) => {
    let alb = document.createElement('div')
    alb.setAttribute('idValue', elem.id)
    alb.innerHTML = `id: ${elem.id}, userId: ${elem.userId}, title: ${elem.title}`
    div4.append(alb)
  })
}

function fullScreenPhoto(src) {
  let photo = document.createElement('img')
  photo.setAttribute('src', src)

  modalWrapper.classList.remove('h')
  modalBody.append(photo)
}

function getAtr(event) {
  console.log(event.target)
  let src = event.target.getAttribute('src')
  fullScreenPhoto(src)
}

const albums = fetch(URL4)
  .then((responce) => responce.json())
  .then((responce) => {
    getAlbums(responce)

    div4.addEventListener('click', (event) => {
      console.log(event.target.getAttribute('idValue'))
      let id = event.target.getAttribute('idValue')

      fetch(`https://jsonplaceholder.typicode.com/albums/${id}/photos`)
        .then((result) => {
          return result.json()
        })
        .then((result) => {
          result.forEach((result) => {
            let photo = document.createElement('img')
            photo.setAttribute('src', result.url)
            div4_1.append(photo)
            photo.addEventListener('click', getAtr)
          })
        })
        .then(() => {
          document.body.append(div4_1)
          div4_1.append(btn)
          div4.classList.add('hide')
          btn.addEventListener('click', (event) => {
            div4.classList.remove('hide')
            while (div4_1.firstChild) {
              div4_1.removeChild(div4_1.firstChild)
            }
            div4_1.remove()
          })
        })
    })
  })
