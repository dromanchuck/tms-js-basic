//find

const people = [
  {
    name: "Anya",
    sex: "female",
  },
  {
    name: "Anton",
    sex: "male",
  },
  {
    name: "Zhenya",
    sex: "male",
  },
  {
    name: "Julia",
    sex: "female",
  },
  {
    name: "Sergey",
    sex: "male",
  },
  {
    name: "Ilia",
    sex: "male",
  },
  {
    name: "Dasha",
    sex: "female",
  },
];

function getUser(array, name) {
  return array.find((user) => user.name === name);
}

let user = getUser(people, "Anton");

//every -> &&
//some -> ||

let arr = [1, 2, 3, -1, -9, 10];

let filteredArray = arr.filter((value) => value >= 0);
let isAllPositive = arr.every((value) => value >= 0);
let isSomePositive = arr.some((value) => value >= 0);

//function

let name = "Petr";

function showName(name = "John", secondName = "Doe") {
  console.log(name + " " + secondName);
}

showName("Jack", "Sparrow");

let defaultStyle = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
};

function changeCss(style = defaultStyle, flag) {
  if (flag) {
    //код который добавляет css к элементу в верстке :)
  }
}

changeCss({ display: "block" });

//замыкание

let name = "Vlad";

function showName() {
  let name = "Dracula";
  console.log(name);
}

showName();

function setCount() {
  let count = 0;
  let name;
  let user;

  return function () {
    count++;

    console.log(count);
    return count;
  };
}

let counter = setCount();

console.log(counter);

counter();
counter();
counter();
counter();
counter();
counter();

/**
 *  Пусть теперь в переменной lang хранится язык (она принимает одно из значений или 'ru', или 'en' - либо то, либо то),
 * а в переменной day - номер дня. Выведите словом день недели, соответствующий переменным lang и day.
 * То есть: если, к примеру, lang = 'ru' и day = 3 - то выведем 'среда'.
 */

let lang = prompt("Введите язык(ru, en ,de)");
let day = new Date().getDay();

let daysMap = {
  ru: [
    "Воскресенье",
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
  ],
  en: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ],
};

alert(daysMap[lang][day]);

/**
 * Строка. Найти и подсчитать количество гласных и вернуть
 */

function getVowelsCount(str = "") {
  let vowels = new Set(["a", "e", "u", "o", "i"]);
  let strArr = str.split("");
  let filterdStrArr = strArr.filter((value) => vowels.has(value));

  return filterdStrArr.length;
}

getVowelsCount("aaasdfaaa"); // -> 6

/**
 *Fill array
 */

function fillArray(count, value) {
  return new Array(count).fill(value);
}

function createRandomArray(count) {
  let array = fillArray(count, 0);

  return array.map(() => {
    return Math.ceil(Math.random() * 10);
  });
}

let randomArray = createRandomArray(100);
