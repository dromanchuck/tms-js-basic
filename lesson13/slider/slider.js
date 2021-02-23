import { toJSON, ALBUMS } from './consts.js';

export function slider() {
  let secondTaskResult = document.createElement('div');
  let temp = undefined;
  result.append(secondTaskResult);

  fetch(ALBUMS)
    .then(toJSON)
    .then((albums) => {
      secondTaskResult.innerHTML = albums.reduce(
        (acc, album) =>
          acc + `<p data-id='${album.id}'>Album: ${album.title}</p>`,
        ''
      );

      secondTaskResult.addEventListener('click', (event) => {
        if (!event.target.getAttribute('data-id')) return;

        fetch(
          `https://jsonplaceholder.typicode.com/albums/${event.target.getAttribute(
            'data-id'
          )}/photos`
        )
          .then(toJSON)
          .then((photos) => {
            temp = secondTaskResult.innerHTML;
            let all = photos.reduce(
              (acc, photo) =>
                acc + `<img src='${photo.url}' width='150' height='150' />`,
              ''
            );
            secondTaskResult.classList.add('slider');
            secondTaskResult.innerHTML = `<button id='back-button' style="margin-right: 20px">Назад</button><br><button class='button-left'>&lt;</button><div class='slider__photos'>${all}</div><button class='button-right'>&gt;</button>`;
            let backButton = document.querySelector('#back-button');
            backButton.addEventListener('click', () => {
              secondTaskResult.innerHTML = temp;
              secondTaskResult.classList.remove('slider');
            });
            let buttonLeft = document.querySelector('.button-left');
            let buttonRight = document.querySelector('.button-right');
            let sliderPhotos = document.querySelector('.slider__photos');
            let translate = 0;
            let imagesLength =
              sliderPhotos.children.length * 160 -
              10 -
              parseInt(
                getComputedStyle(sliderPhotos).getPropertyValue('width')
              );
            buttonLeft.disabled = true;

            buttonRight.addEventListener('click', () => {
              translate += 160;
              sliderPhotos.style.transform = `translateX(-${translate}px)`;
              if (translate >= imagesLength) {
                buttonRight.setAttribute('disabled', '');
              }
              buttonLeft.removeAttribute('disabled');
            });

            buttonLeft.addEventListener('click', () => {
              translate -= 160;
              if (translate <= 0) {
                buttonLeft.setAttribute('disabled', '');
              }
              sliderPhotos.style.transform = `translateX(-${translate}px)`;
              buttonRight.removeAttribute('disabled');
            });
          });
      });
      secondTaskResult.addEventListener('click', (event) => {
        if (event.target.tagName !== 'IMG') return;
        let imageContainer = document.createElement('div');
        imageContainer.classList.add('modal-wrapper');
        let bigImage = document.createElement('img');
        bigImage.classList.add('big-image');
        let src = event.target.src;
        bigImage.src = src;
        let closeButton = document.createElement('button');
        closeButton.innerText = 'X';
        closeButton.classList.add('close-button');
        closeButton.addEventListener('click', () => {
          imageContainer.remove();
        });
        imageContainer.append(bigImage, closeButton);
        document.body.append(imageContainer);
      });
    });
}
