let num1 = 13;
num1 = 16;

const num2 = 16;

//Comment

/*
Comment

*/

//Типы данных

let num = 1; //number

let str = "String 123"; //string
let str1 = "String 2345"; //string
let str2 = `String 2345`; //string

let positive = true; //boolean
let negative = false; //boolean

let variable; //undefined

console.log(str, str1, str2);

//+

let sum1 = num1 + num2; //32
let sum2 = num1 + num2 + num; //33
console.log("Operator +: ", sum1);
console.log("Operator +: ", sum2);

let hello = "Hello";
let name = "Vasya";

let result = hello + " " + name;

console.log("Str + str: ", result);

let result1 = result + sum1;

console.log("Str + number:", result1);

//-

let sub = num1 - num2 - num; // -1

let negativeNum = -num1;

console.log(sub);

//*

let dev = num1 * num2;

// '/'

let res = num1 / num2;

// **

let num4 = 2 ** 167;
console.log("quad num:", num4);

// %

let rest1 = 8 % 2;
let rest2 = 17 % 2;

console.log(rest1);
console.log(rest2);

///////////////////////////////Задачи
//Создайте переменную num и присвойте ей значение 3. Выведите значение этой переменной на экран с помощью метода alert.

let num8 = 3;
alert(num8);

//Создайте переменные a=10 и b=2. Выведите на экран их сумму, разность, произведение и частное (результат деления).

let a = 10;
let b = 2;

let sumAB = a + b;
let subAB = a - b;
let divAB = a * b;
let delAB = a / b;

let resultAB = sumAB + "," + subAB + "," + divAB + "," + delAB;

alert(resultAB);

//Создайте переменные c=15 и d=2. Просуммируйте их, а результат присвойте переменной result. Выведите на экран значение переменной result.

let c = 15;
let d = 2;

let resultCD = c + d;

alert(resultCD);

//Создайте переменные a=10, b=2 и c=5. Выведите на экран их сумму.

let a1 = 10;
let b1 = 2;
let c1 = 5;

let sumABC = a + b + c;
alert(sumABC);

//Создать 3 любые переменные и высчитать их среднее орифметическое
let a2 = 5;
let b2 = 10;
let c2 = 15;
let resultSum = a + b + c;
let res1 = resultSum / 3;
alert(res);

//Создайте переменные a=17 и b=10. Отнимите от a переменную b и результат присвойте переменной c.
//Затем создайте переменную d, присвойте ей значение 7. Сложите переменные c и d, а результат запишите в переменную result.
//Выведите на экран значение переменной result.

let a3 = 17;
let b3 = 10;

let c3 = a3 - b3;
let d3 = 7;

let resultABCD = c3 + d3;

alert(resultABCD);

//Создайте переменную name и присвойте ей ваше имя. Выведите на экран фразу 'Привет, %Имя%!'.

let name123 = "Дима";

alert("Привет, " + name123);

// Создайте переменную age и присвойте ей ваш возраст. Выведите на экран 'Мне %Возраст% лет!'.

let age = 25;

alert("Мне " + age + " лет");
