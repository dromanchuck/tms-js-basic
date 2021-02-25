import { showImage } from './showImage.js';
import { showInModal } from './showInModal.js';

try {
  let container = document.querySelector('#result');
  let albumsContainer = document.createElement('div');
  let photosContainer = document.createElement('div');
  let backButton = document.createElement('button');

  const IMAGE_SIZE = 300;

  backButton.innerText = 'Go back';

  backButton.addEventListener('click', () => {
    photosContainer.innerHTML = '';

    photosContainer.replaceWith(albumsContainer);
    backButton.remove();
  });

  container.append(albumsContainer);

  fetch('https://jsonplaceholder.typicode.com/albums')
    .then((res) => {
      return res.json();
    })
    .then((albums) => {
      let albumsElements = albums.map((item) => {
        let p = document.createElement('p');
        p.innerText = item.title;
        p.id = item.id;

        p.style = `
          border: 1px solid white;
        `;

        return p;
      });

      albumsContainer.append(...albumsElements);
    });

  albumsContainer.addEventListener('click', (event) => {
    if (event.target.tagName === 'P') {
      console.log(event.target);
      let albumId = event.target.id;

      fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
        .then((res) => res.json())
        .then(renderSlider);
    }
  });

  photosContainer.addEventListener('click', (event) => {
    if (event.target.tagName === 'IMG') {
      let content = showImage(event.target.src);
      showInModal(content);
    }
  });

  function renderSlider(photos) {
    let photosElems = photos.map((item) => {
      let img = document.createElement('img');
      img.src = item.url;

      img.style = `
        width: ${IMAGE_SIZE}px;
        height: ${IMAGE_SIZE}px;
        margin-right: 10px;
      `;
      return img;
    });

    let offset = 0;
    let container = document.createElement('div');

    container.style = `
      width: ${IMAGE_SIZE * 3 + 20}px;
      overflow: hidden;
    `;

    let innerContainer = document.createElement('div');

    innerContainer.style = `
      display: flex;
      flex-direction: row;
      transition: all 1s linear;
    `;

    let mainContainer = document.createElement('div');

    mainContainer.style = `
      display: flex;
    `;

    let leftButton = document.createElement('button');
    leftButton.innerText = '<';

    leftButton.onclick = function () {
      if (offset === 0) {
        leftButton.disabled = true;
      } else {
        offset = offset - IMAGE_SIZE - 10;
        innerContainer.style.transform = `translateX(${-offset}px)`;
        rightButton.disabled = false;
      }
    };

    let rightButton = document.createElement('button');
    rightButton.innerText = '>';

    rightButton.onclick = function () {
      if (offset === (IMAGE_SIZE + 10) * photosElems.length - (IMAGE_SIZE + 10) * 3) {
        rightButton.disabled = true;
      } else {
        offset = offset + IMAGE_SIZE + 10;
        innerContainer.style.transform = `translateX(${-offset}px)`;
        leftButton.disabled = false;
      }
    };

    innerContainer.append(...photosElems);
    container.append(innerContainer);
    mainContainer.append(leftButton, container, rightButton);
    photosContainer.append(backButton, mainContainer);
    albumsContainer.replaceWith(photosContainer);
  }
} catch (error) {
  console.log(error);
}
