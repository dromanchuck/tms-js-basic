import { getRandomNumber, IMAGE_SIZE } from "./index1.js";
import userName from "./index1.js";

// alert(`IMAGE_SIZE: ${IMAGE_SIZE}, random number: ${getRandomNumber()}`);
// alert(userName);

//this

let user = {
  name: "Harry",
  email: "haha@mail.ru",
};

function showInfo1(message) {
  console.log(message + " " + this.name);
}

let showInfo2 = function () {
  console.log(this);
};

let showInfo3 = () => {
  console.log(this);
};

//bind, call, apply

showInfo1.call(user, "Hello");
showInfo2.call(user);
showInfo3.call(user);

let showInfo = showInfo1.bind(user);
showInfo("Bye bye");
