alert("Hello");
let answer = prompt("Вопрос?");
let result = confirm("Вопрос?");

//Условные операторы
//if
let a = Number(prompt("Введите а:", 100));
let b = Number(prompt("Введите b:", 100));

console.log(typeof a, typeof b);

if (a > b) {
  b = a;

  //...code
  alert("Boooom");
} else if (a === 0) {
  alert("A === 0");
} else if (b === 0) {
  alert("B === 0");
} else {
  alert("Fail");
}
//?
let a = Number(prompt("Введите а:", 100));
let b = Number(prompt("Введите b:", 100));

let c;

c = a === b ? b : a;

alert(c);

//switch

let animal = prompt("Введите животное", "cat");

switch (animal) {
  case "cat":
    alert("Meow");
    break;
  case "dog":
    alert("Gav");
    break;
  case "cow":
    alert("Mooooo");
    break;

  default:
    alert("RRRRRRR");
}

//циклы
//while, do...while, for

let i = 0;
//while
while (i <= 4) {
  alert(i);

  i++;
}

alert("Its over");
//do ... while
do {
  alert(i);

  i++;
} while (i === 0);

//for

for (let i = 0; i > 10; i += 2) {
  console.log(i);
}
