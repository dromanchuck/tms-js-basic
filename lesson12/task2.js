// Задание 2

var secondTaskResult = document.createElement('div');
var temp;

function task() {
  div.append(secondTaskResult);

  fetch('https://jsonplaceholder.typicode.com/albums')
    .then((response) => response.json())
    .then((albums) => {
      secondTaskResult.innerHTML = albums.reduce(
        (acc, album) => acc + `<div data-id='${album.id}'>${album.title}</div>`,
        ''
      );

      secondTaskResult.addEventListener('click', (event) => {
        if (!event.target.getAttribute('data-id')) return;

        fetch(
          `https://jsonplaceholder.typicode.com/albums/${event.target.getAttribute(
            'data-id'
          )}/photos`
        )
          .then((response) => response.json())
          .then((photos) => {
            temp = secondTaskResult.innerHTML;
            secondTaskResult.innerHTML = photos.reduce(
              (acc, photo) =>
                acc + `<img src='${photo.url}' width='20' height='20' />`,
              `<button onclick="secondTaskResult.innerHTML = temp" style="margin-right: 20px">Назад</button><br>`
            );
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
