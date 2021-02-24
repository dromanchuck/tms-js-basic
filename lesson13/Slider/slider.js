import { IMAGE_SIZE } from './task2.js';
import { photosContainer } from './task2.js';
import { backButton } from './task2.js';
import { albumsContainer } from './task2.js';


export function renderSlider(photos) {
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
    let transform = 0;
    let slideIndex = 0;


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
      transform: translateX(0);
    `;

    let mainContainer = document.createElement("div");

    mainContainer.style = `
      display: flex;
    `;

    offset = (IMAGE_SIZE + 10) / (IMAGE_SIZE * 3 + 20) * 100;

    let leftButton = document.createElement("button");
    leftButton.innerText = "<";

    let rightButton = document.createElement("button");
    rightButton.innerText = ">";

    let slide = function() {
        leftButton.classList.toggle('disabled', slideIndex === 0);
        rightButton.classList.toggle('disabled', slideIndex === --photosElems.length);
    }
    slide();

    leftButton.onclick = function() {
        transform += offset;

        innerContainer.style.transform = `translateX(${transform}%)`;
        slideIndex--;
        slide();
    };

    rightButton.onclick = function() {
        transform -= offset;

        innerContainer.style.transform = `translateX(${transform}%)`;
        slideIndex++;
        slide();
    };

    innerContainer.append(...photosElems);
    container.append(innerContainer);
    mainContainer.append(leftButton, container, rightButton);
    photosContainer.append(backButton, mainContainer);
    albumsContainer.replaceWith(photosContainer);
}