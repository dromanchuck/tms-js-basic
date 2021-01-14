alert("Внимание! Необходимо заполнить все поля!");

let name;
let age;
let englishLevel;
let likeCats;

console.log(name, age, englishLevel, likeCats);

name = prompt("Введите ваше имя: ", "Вася");
age = prompt("Введите полное количество лет: ", 100);
englishLevel = prompt("Какой у Вас уровень английского?");
likeCats = confirm("Любите ли вы кошек?");

console.log(name, age, englishLevel, likeCats);

let result =
  "Здравствуй, " +
  name +
  "! Поздравляем, Вам -" +
  age +
  " лет! Вы молодец! Ваш уровень английского - " +
  englishLevel +
  ". Любите ли вы кошек: " +
  likeCats;

let trueResult = `Здравствуй, ${name}! Поздравляем, Вам - ${age} лет! Вы молодец! Ваш уровень английского - ${englishLevel}. Любите ли вы кошек: ${likeCats}`;

alert(trueResult);
