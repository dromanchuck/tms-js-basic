/**
 * Задание 2
 * Дописать задание 4 из занятия 11. Нужно сделать так, чтобы по нажатию на фотку она должна
 * отобразиться поверх всех фоток как модальное окно (пример здесь https://itchief.ru/javascript/modal-window).
 * У модального окна должна быть кнопка, по нажатию на который модальное окно закрывается.
 *  Код разместить в отдельном файле с названием task2.js. Результат нужно разместить в div c id = result
 */

function makeAlbums() {

    let albumsContainer = document.createElement("div");
    let photosContainer = document.createElement("div");
    let backButton = document.createElement("button");

    backButton.innerText = "Go back";
    backButton.addEventListener("click", () => {
        photosContainer.innerHTML = "";

        photosContainer.replaceWith(albumsContainer);
        backButton.remove();
    });

    let task2Block = document.createElement('div');
    task2Block.classList.add('task2Block');

    task2Block.append(albumsContainer);



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
                        img.style = `width: 100px; height: 100px`;
                        return img;

                    });
                    photosContainer.append(backButton, ...photosElems);
                    albumsContainer.replaceWith(photosContainer);
                });
        }

    });

    let modal = $modal({
        title: 'Photo',
        content: '',
        footerButtons: [
            { class: 'btn btn__cancel', text: 'Close', handler: 'modalHandlerCancel' }
        ]
    });

    photosContainer.addEventListener('click', (event) => {

        if (event.target.tagName === "IMG") {
            modal.show();

            modal.setContent(`<img src='${event.target.src}' width='300' height='300'>`)
        }

    });

    let closeModalBtn = document.querySelector('.btn__cancel');
    closeModalBtn.addEventListener('click', () => {
        modal.hide();
    })

    divResult.append(task2Block);
}

makeAlbums();