export  function expSlider() {
    try{
        let container = document.querySelector("#result");
        let albumsContainer = document.createElement("div");
        let photosContainer = document.createElement("div");
        let backButton = document.createElement("button");
        
        const IMAGE_SIZE = 300;
        
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
              .then(renderSlider);
          }
        });
        
        function showInModal(elem) {
          let background = document.createElement("div");
        
          background.style = `
            position: fixed;
            width: 100vw;
            height: 100vh;
            background-color: #00000066;
            top: 0;
            left: 0;
            display: flex;
            align-items: center;
            justify-content: center;
          `;
        
          background.onclick = () => {
            background.remove();
          };
        
          background.append(elem);
        
          document.body.append(background);
        }
        
        function showImage(src) {
          let image = document.createElement("img");
          let button = document.createElement("button");
          let div = document.createElement("div");
        
          div.append(image, button);
        
          image.style = `
            width: 600px;
            height: 600px;
          `;
        
          image.src = src;
          button.innerHTML = "&times;";
        
          div.addEventListener("click", (event) => {
            event.stopPropagation();
          });
        
          button.addEventListener("click", () => {
            div.parentNode.remove();
          });
        
          return div;
        }
        
        photosContainer.addEventListener("click", (event) => {
          if (event.target.tagName === "IMG") {
            let content = showImage(event.target.src);
        
            showInModal(content);
          }
        });
        
        function renderSlider(photos) {
          let photosElems = photos.map((item) => {
            let img = document.createElement("img");
            img.src = item.url;
        
            img.style = `
              width: ${IMAGE_SIZE}px;
              height: ${IMAGE_SIZE}px;
              margin-right: 10px;
            `;
        
            return img;
          });
        
          let offset = 0;
          let container = document.createElement("div");
        
          container.style = `
            width: ${IMAGE_SIZE * 3 + 20}px;
            overflow: hidden;
          `;
        
          let innerContainer = document.createElement("div");
        
          innerContainer.style = `
            display: flex;
            flex-direction: row;
            transition: all 1s linear;
          `;
        
          let mainContainer = document.createElement("div");
        
          mainContainer.style = `
            display: flex;
          `;
        
          let leftButton = document.createElement("button");
          leftButton.innerText = "<";
        
          leftButton.onclick = function () {
         
            if(offset === 0){
                leftButton.disabled = true
            }else{
                offset = offset - IMAGE_SIZE - 10;
                innerContainer.style.transform = `translateX(${-offset}px)`;
                rightButton.disabled = false;
            }
          };
        
          let rightButton = document.createElement("button");
          rightButton.innerText = ">";
          let resultLen = photosElems.length;
          rightButton.onclick = function () {
        
            if(offset === (IMAGE_SIZE + 10) * resultLen - (IMAGE_SIZE + 10) * 3){
                rightButton.disabled = true;
            }else{
                offset = offset + IMAGE_SIZE + 10;
                innerContainer.style.transform = `translateX(${-offset}px)`;
                leftButton.disabled = false;
                }   
            }
        
          innerContainer.append(...photosElems);
          container.append(innerContainer);
          mainContainer.append(leftButton, container, rightButton);
          photosContainer.append(backButton, mainContainer);
          albumsContainer.replaceWith(photosContainer);
        }
        }catch (error) {
        console.log(error);
        }
}
expSlider()

//Работает только если весь код экспортировать, по другому не получается

// try{
//     import {CreateContainer} from './createContainer';

//     import {showInModal} from './showmodal.js';

//     import {showImage} from './showImage';
    
//     import {renderSlider} from './renderSlider';
    
// }catch (error) {
// console.log(error);
// }
// }
