//Arrays

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let array1 = ["1", "123", "hello", "world"];
let array2 = [1, 2, "123"];
let array3 = [{ a: "Test", b: "test" }, [1, 2, 3, 4, 5, 6, 7], "123", 123];

//${array_name}.length - узнать длинну массива

//${array_name}[index] - обратиться к элементу массива

let array = [19, 87, 765, 459, 12, -123];

for (let i = 0; i <= array.length - 1; i++) {
  if (array[i] < 0) {
    console.log(`${array[i]} - < 0`);
  } else {
    console.log(`${array[i]} - > 0`);
  }
}

//сортировка пузырьком
let array = [19, 87, 765, 459, 12, -123];

//1: [19, 87, 459, 12, -123, 765];
//2: [19, 87, 12,-123,459, 765]

for (let i = 0; i <= array.length - 1; i++) {
  for (let j = 0; j <= array.length - 1; j++) {
    if (array[j] > array[j + 1]) {
      // j === 0 array[0] - 19 vs array[1] - 87

      let temp = array[j + 1];
      array[j + 1] = array[j];
      array[j] = temp;
    }

    console.log(array);
  }
}

//array.push(element) - добавляет элемент в конец массива
let arr = [1, 2, 3];
console.log(arr); //[1,2,3]

arr.push(4);

console.log(arr); //[1,2,3,4]

//array.unshift(element) - добавляет элемент в начало массива
let arr = [1, 2, 3];
console.log(arr); //[1,2,3]

arr.unshift(4);

console.log(arr); //[4,1,2,3]

//array.pop() - убирает последний элемент массива

let arr = [1, 2, 3];
console.log(arr); //[1,2,3]

arr.pop();

console.log(arr); //[1,2]

//array.shift() - убирает нулевой элемент массива

let arr = [1, 2, 3];
console.log(arr); //[1,2,3]

arr.shift();

console.log(arr); //[2,3]

//array.splice(${индекс}, ${количество элементов}) - используется для удаления части массива

let arr = [1, 2, 3];

let newArr = arr.splice(0, 2); // вызов splice "вырежет" из исходного массива arr [1,2] и вернет эту часть, что в свою очередь сохранится в newArr

console.log(arr); //[3]
console.log(newArr); //[1,2]

//array.slice(${начальный индекс}, ${конечный индекс}) - скопирует часть массива, при этом не модифицируя исходный массив,
//начиная от начального индекса
//не включая конечный индекс
let arr = [1, 2, 3, 4, 5];

let secondArr = arr.slice(); //скопирует массив полностью
let thirdArr = arr.slice(1); // скопирует массив начинания с первого элемента
console.log(thirdArr); // [2,3]

let fourthArr = arr.slice(1, 4); // скопирует массив начинания с первого элемента заканчивая 3м

console.log(fourthArr); //[2, 3, 4]

//string.split(разделитель) - разделяет строку и возвращает массив и символов

let str = "Hello World";

let arr = str.split("");
console.log(arr); // ["H", "e", "l", "l", "o", " ", "W", "o", "r", "l", "d"]

let arr1 = str.split(" ");
console.log(arr1); //["Hello", "World"]

//arr.join(разделитель) - объединит массив в строку

let arr = [1, 2, 3, 4, 5];

let str = arr.join();
console.log(str); // '1,2,3,4,5'

let str1 = arr.join("");
console.log(str1); // '12345'

let str2 = arr.join(" ");
console.log(str2); // '1 2 3 4 5'

//indexOf

let array = [1, 2, 3, 4, 5, 6];

let indexOfThree = array.indexOf(3);

console.log(indexOfThree);

//includes
