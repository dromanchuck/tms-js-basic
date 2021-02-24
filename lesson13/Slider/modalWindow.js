export function showInModal(elem) {
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

export function showImage(src) {
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