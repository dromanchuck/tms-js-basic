//атрибуты
let input = document.querySelector("input");

input.setAttribute("name", "Name of input");
input.setAttribute("style", "width: 300px;");

console.log(input.name);

//обработчики

let button = document.querySelector("button");
let div = document.querySelector("#div-button");

button.addEventListener("click", function () {
  alert("Hello");
});

button.addEventListener("click", function (event) {
  console.log(event);
  event.stopPropagation();

  alert("World");
});

div.addEventListener(
  "click",
  function () {
    alert("div");
  },
  true
);
