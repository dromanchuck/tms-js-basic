//условие ? true результат : false результат
let flag = true;

let num = flag ? 12 : -12;

//switch

let animal;

if (animal === "dog") {
  alert("Гав!");
} else if (animal === "cat") {
  alert("Mяу!");
} else if (animal === "cow") {
  alert("Муууу");
}

let animal = "cat";

switch (animal) {
  case "dog":
    {
      alert("Гав!");
    }

    break;
  case "cat":
    alert("Mяу!");
    break;
  case "cow":
    alert("Муууу");
    break;

  default:
    alert("!!!");
}

// object
let user = {
  name: "Vasya",
  email: "blabla@com",
  nickName: "vassss",
  age: 14,
  creditCard: {
    brand: "visa",
    number: "5555 5555 5555 5555",
  },
};

let user1 = { ...user }; // клонирование 1
let user2 = Object.assign({}, user); // клонирование 2

console.log(user, user1);
console.log(`Hello, ${user["name"]}`);

//массив

let array = [1, 2, 3, 4, 5];

let array1 = [...array]; // клонирование

array[1] = 12;

// циклы

//while
let i = 0;

while (i < 10) {
  //...
  console.log(i);
}

//do {...} while
let i = 0;

do {
  i++;
  console.log(i);
} while (i < 10);

//for

for (let i = 0; i < 10; i++) {
  console.log(i);
}

// Создать 5 чисел, найти наименьшее

let array = [123, -1145, -1231, 124, 190];

let min = array[0];

for (let i = 0; i < array.length; i++) {
  if (array[i] <= min) {
    min = array[i];
  }
}

console.log(min);

//инвертировать
let array = [123, -1145, -1231, 124, 190];
let i = 0;

while (i < array.length) {
  if (array[i] < 0) {
    array[i] = 0;
  }

  i++;
}

//написать код сравнения двух массивов состоящих из примитивов

let arr1 = [];
let arr2 = [];

if (arr1.length === arr2.length) {
  let isEqual = true;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      isEqual = false;
    }
  }

  if (isEqual) {
    console.log("Массивы одинакавые!");
  } else {
    console.log("Массивы разные!");
  }
} else {
  console.log("Длины массивов разные!");
}

//
let user1 = {
  name: "Vasya",
  email: "blabla@com",
  nickName: "vassss",
  age: 14,
};

let user2 = {
  name: "Vasya",
  email: "bla@com",
  nickName: "vassss",
  age: 14,
};

let isEgual = true;
let i = 0;

for (let key in user1) {
  if (user2.hasOwnProperty(key)) {
    if (user1[key] !== user2[key]) {
      isEgual = false;
    }
  } else {
    isEgual = false;
  }

  if (!isEgual) {
    break;
  }

  i++;
}

console.log(isEgual);
