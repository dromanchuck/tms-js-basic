let arr1 = [12, 2, 3];
let arr2 = [1, 2, 3, 4, 5];
let result = [];

let currentArr = arr1.length > arr2.length ? arr1 : arr2;

for (let i = 0; i <= currentArr.length - 1; i++) {
  result[i] = makeSum(arr1[i], arr2[i]);
}

console.log(result);

function makeSum(num1, num2) {
  let a = Boolean(num1) ? num1 : typeof num1 === "string" ? "" : 0;
  let b = Boolean(num2) ? num2 : typeof num2 === "string" ? "" : 0;

  let result = a + b;

  return result;
}

//array.forEach(function() {});

let array = [1, 2, 3, 4, 5, 6];

let newArray = array.forEach(function (elem, index, arr) {
  console.log(elem, index, arr);
});

console.log(newArray); //undefined

for (let i = 0; i <= array.length - 1; i++) {
  console.log(array);
}

//array.map(function() {});

let newArray = array.map(function (elem, index, arr) {
  console.log(elem, index, arr);
  return elem + 1;
});

console.log(newArray);

//array.filter(function() {})

let newArray = array.filter(function (elem, index, arr) {
  return elem % 2 === 0 ? true : false;
});

//array.reduce(function() {})

let result = array.reduce(function (accumulator, elem, index, arr) {
  console.log(`acc: ${accumulator}, index: ${index}, elem: ${elem}`);
  return accumulator + elem;
}, 0);

//...

let a = [1, 2, 3, 4];
let b = [5, 6, 7, 8, 9];

let c = a.concat(b); //[1, 2, 3, 4, 5, 6, 7, 8, 9]
let d = [a, b]; //[[1, 2, 3, 4], [5, 6, 7, 8, 9]]
let e = [...a, ...b]; //[1, 2, 3, 4, 5, 6, 7, 8, 9]

//clone
let cloneA = [...a]; // === a.slice()

//... object

let a = { name: "Frodo" };
let b = { secondName: "Baggins" };
let c = { ...a, ...b }; // {secondName: "Baggins", name: "Frodo"}
let d = Object.assign(a, b);

//
let obj = { obj1: { name: "Test", secondName: "Test" } };

let obj1 = { ...obj.obj1 };
