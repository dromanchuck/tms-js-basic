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