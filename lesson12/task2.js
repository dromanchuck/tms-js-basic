const resulrContainer = document.getElementById("result");
const task2 = document.createElement('div');
const backBtn = document.createElement('button');
backBtn.innerText = 'назад';
backBtn.classList.add('.back')
const ul = document.createElement("ul");
const photosContainer = document.createElement("div");
photosContainer.classList.add("photos-contsiner");

function getAlbums() {
  fetch("https://jsonplaceholder.typicode.com/albums")
    .then((response) => {
      return response.json();
    })
    .then((albums) => {
      showAlbums(albums);
    });
}

function showAlbums(albums) {
  albums.forEach((albumItem) => {
    const li = document.createElement("li");
    li.dataset.id = albumItem.id;
    li.innerText = albumItem.title;
    ul.append(li);
  });
  task2.append(ul);
}

getAlbums();

task2.addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {
    ul.classList.add("hidden");
    showPhotosByAlbum(event.target.dataset.id);
  } else if (event.target.tagName === "IMG") {
    openModal(event.target.dataset.id)
  }
});

backBtn.addEventListener("click", () => {
  photosContainer.innerHTML = "";
  ul.classList.remove("hidden");
});

function openModal(id) {
  const modal = document.createElement('div');
  modal.classList.add('modal');

  const closeBtn = document.createElement('button');
  closeBtn.classList.add('close-btn');
  closeBtn.innerText = 'X';
  
  const modalWrapper = document.createElement('div');
  modalWrapper.classList.add('modal-wrapper');

  const modalImg = document.createElement('img');
  modalImg.classList.add('modal-img');
  
  const modalBody = document.createElement('div');
  modalBody.classList.add('modal-body');

  fetch(`https://jsonplaceholder.typicode.com/photos?id=${id}`)
  .then((response) => {
    return response.json()
  }).then((data) => {
    modalImg.src = data[0].url;
  })
  modalBody.append(modalImg,closeBtn)
  modalWrapper.append(modalBody)
  modal.append(modalWrapper);
  resulrContainer.append(modal);

  closeBtn.addEventListener('click', () => {
    modal.remove()
  })
}

function showPhotosByAlbum(id) {
  fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${id}`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      data.forEach((item) => {
        const img = document.createElement("img");
        img.classList.add("photo");
        img.src = item.url;
        img.dataset.id = item.id;
        photosContainer.append(img);
      });

      task2.append(photosContainer);
    });
}

resulrContainer.append(backBtn, task2);