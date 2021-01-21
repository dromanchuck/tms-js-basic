//function
function nod(a, b) {
  while (a != 0 && b != 0) {
    if (a > b) {
      a = a % b;
    } else {
      b = b % a;
    }
  }

  return a + b;
}

let nod1 = function (a, b) {
  nod(a, b);
};

let nod2 = (a, b) => {
  node(a, b);
};

console.log(nod(24, 12));
let result = nod(24, 13);

//array

let array = [1, 2, 3, 4, 5];

//concat

let a1 = [1, 2, 3, 4];
let a2 = [5, 6, 7, 8];

let a3 = a1.concat(a2);

//push
array.push(10); //[1, 2, 3, 4, 5, 10]

//pop
array.pop(); //[1, 2, 3, 4, 5]

//unshift
array.unshift(0); //[0, 1, 2, 3, 4, 5]

//shift
array.shift(); //[1, 2, 3, 4, 5]

//sort

let unsortedArray = [5, 3, 7, 10, -10, 89, 87];

let sortedArray1 = unsortedArray.sort(function (a, b) {
  // от меньшего к большему
  return a - b;
});

let sortedArray2 = unsortedArray.sort(function (a, b) {
  // от большего к меньшему
  return b - a;
});

//bubble sort

let array1 = [5, 3, 7, 10, -10, 89, 87];
let temp;

for (let i = 0; i < array1.length; i++) {
  for (let j = 0; j < array1.length; j++) {
    if (!array1[j + 1]) {
      continue;
    }
    console.log(array1[j], array1[j + 1]);
    if (array1[j] > array1[j + 1]) {
      temp = array1[j + 1];
      array1[j + 1] = array1[j];
      array1[j] = temp;
    }
  }
}

//for ... of

for (let value of array1) {
  console.log(value);
}

//forEach

let array1 = [5, 3, 7, 10, -10, 89, 87];
let a1 = [];
let a2 = [];

array1.forEach(function (value) {
  if (value % 2 === 0) {
    a1.push(value);
  } else {
    a2.push(value);
  }
});

//forEach bubble sort

let temp;

array1.forEach(function () {
  array1.forEach(function (innerValue, index, arr) {
    if (arr[index] > arr[index + 1]) {
      temp = arr[j + 1];
      arr[j + 1] = arr[j];
      arr[j] = temp;
    }
  });
});

//map

let array1 = [5, 3, 7, 10, -10, 89, 87];
let array2 = [1, 2, 3, 4, 5, 6, 7];

let a = array1.map(function (value, index) {
  return value + array2[index];
});

//filter

let array1 = [5, 3, -7, 10, -10, 89, -87];

let filteredArray = array1.filter((value) => {
  return value > 0;
});

//reduce

let food = [
  { name: "Gamburger", id: 0, servingSize: 100, price: 10 },
  { name: "Cheeseburger", id: 1, servingSize: 120, price: 15 },
  { name: "Kartoha", id: 2, servingSize: 100, price: 5 },
  { name: "Pizza", id: 3, servingSize: 100, price: 90 },
];

let result = food.reduce(
  (acc, value, index) => {
    acc.total += value.price;
    acc.receipt += `${value.name} - ${value.servingSize}g - ${value.price}$ \n`;

    if (index === food.length - 1) {
      acc.receipt += `*****Total: ${acc.total}$*****`;
    }

    return acc;
  },
  { receipt: "", total: 0 }
);

console.log(result.receipt);

//slice
console.log("asd" === "asd");
let testString = "Hello JS";

let str = testString.slice(1, 10);

//split

console.log("asd" === "asd");

let testString = "hello";
let array = testString.split("");

let newArray = array.map((value, index) =>
  index === 0 ? value.toUpperCase() : value
);

let resultString = newArray.join("");
