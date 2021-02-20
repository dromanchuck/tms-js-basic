let container = document.createElement('div')
let photosContainer = document.createElement('div')
let back = document.createElement('button')
back.innerHTML = 'Go Back'

function createAlbum(elems) {
    elems.forEach(elem => {
        let alb = document.createElement('div')
        alb.setAttribute('idValue', elem.id)
        alb.innerHTML = `id: ${elem.id}, userId: ${elem.userId}, title: ${elem.title}`
        container.append(alb)
    })
}

function showFullPhoto(url) {
    url = url.replace('150', '600')
    console.log(url)
    let photo = document.createElement('img')
    photo.setAttribute('src', url)

    let modal = document.createElement('div')
    modal.classList.add('modal')

    let modalBody = document.createElement('div')
    modalBody.classList.add('modalBody')

    let modalHeader = document.createElement('div')
    modalHeader.classList.add('modalHeader')

    let modalHeaderTitle = document.createElement('p')
    modalHeaderTitle.innerHTML = 'modalHeader'

    let modalHeaderClose = document.createElement('div')
    modalHeaderClose.innerHTML = '&times;'
    modalHeader.append(modalHeaderTitle, modalHeaderClose)

    let modalContent = document.createElement('div')
    modalContent.append(photo)

    let modalFooter = document.createElement('div')

    modalBody.append(modalHeader, modalContent, modalFooter)
    modal.append(modalBody)
    document.body.append(modal)

    modalHeaderClose.onclick = (event => {
        modal.remove()
    })
}

function listener(event) {
    console.log(event.target)
    let url = event.target.getAttribute('src')
    showFullPhoto(url)
}


let photosPromise = fetch(`https://jsonplaceholder.typicode.com/albums`)
    .then(result => {
        return result.json()
    }).then(result => {
        createAlbum(result)

        container.addEventListener('click', event => {
            console.log(event.target.getAttribute('idValue'))
            let id = event.target.getAttribute('idValue')

            fetch(`https://jsonplaceholder.typicode.com/albums/${id}/photos`)
                .then(result => {
                    return result.json()
                }).then(res => {
                    res.forEach((result => {
                        let photo = document.createElement('img')
                        photo.setAttribute('src', result.thumbnailUrl)
                        photosContainer.append(photo)
                        photo.addEventListener('click', listener)
                    }))
                }).then(() => {
                    photosContainer.append(back)
                    container.replaceWith(photosContainer)
                    back.addEventListener('click', event => {
                        photosContainer.replaceWith(container)
                        while (photosContainer.firstChild) {
                            photosContainer.removeChild(photosContainer.firstChild);
                        }
                        photosContainer.remove()
                    })
                })
        })
    })

secondTaskContainer.append(container)