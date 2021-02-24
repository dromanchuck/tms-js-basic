let container = document.querySelector("#result");
export let albumsContainer = document.createElement("div");
export let photosContainer = document.createElement("div");
export let backButton = document.createElement("button");

export const IMAGE_SIZE = 300;

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
import { renderSlider } from './slider.js'; //

albumsContainer.addEventListener("click", (event) => {
    if (event.target.tagName === "P") {
        console.log(event.target);
        let albumId = event.target.id;

        fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
            .then((res) => res.json())
            .then(renderSlider);
    }
});

import { showInModal } from './modalWindow.js';
import { showImage } from './modalWindow.js';


photosContainer.addEventListener("click", (event) => {
    if (event.target.tagName === "IMG") {
        let content = showImage(event.target.src);

        showInModal(content);
    }
});