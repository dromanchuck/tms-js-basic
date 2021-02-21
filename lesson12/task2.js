/**
 * Задание 2
 * Дописать задание 4 из занятия 11. Нужно сделать так, чтобы по нажатию на фотку она должна
 * отобразиться поверх всех фоток как модальное окно (пример здесь https://itchief.ru/javascript/modal-window).
 * У модального окна должна быть кнопка, по нажатию на который модальное окно закрывается.
 *  Код разместить в отдельном файле с названием task2.js. Результат нужно разместить в div c id = result
 */

 try {
    let container = document.querySelector('div[id="result"]');
    let albumsContainer = document.createElement("div");
    let photosContainer = document.createElement("div");
    let backButton = document.createElement("button");
  
    backButton.innerText = "Назад";
    backButton.addEventListener("click", () => {
      photosContainer.innerHTML = "";
  
      photosContainer.replaceWith(albumsContainer);
      backButton.remove();
      photosContainer.style = `
        background: initial;
      `;
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

              img.addEventListener('click', function(item) {

                    let imgContainer = document.createElement('div');
                    let button = document.createElement('button');
                    let div = document.createElement('div');
                    document.body.append(imgContainer);

                    button.innerText = 'Закрыть';

                    button.style = `
                    position: absolute;
                    bottom: 15px;
                    right: 15px;
                    font-size: 20px;
                    color: #000;`

                    imgContainer.style = `
                    display: flex;
                    justify-content: center;
                    width: 100%;
                    height: 100%;
                    position: absolute;
                    z-index: 1;
                    overflow: auto;
                    background-color: rgba(0,0,0,0.7);
                    left: 0;
                    top: 0;`

                    div.style = `
                    display: flex;
                    justify-content: center;
                    position: relative;
                    width: 600px;
                    height: 600px;`

                    let element = item.currentTarget;
                    let clone = element.cloneNode(true);
                    div.append(clone, button);
                    imgContainer.append(div);

                    button.addEventListener('click', function() {
                      imgContainer.remove();
                    })

                let imgButton = document.createElement('button');
                imgButton.innerText = 'Back';
                photosContainer.append(imgButton);
            
            })
  
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
