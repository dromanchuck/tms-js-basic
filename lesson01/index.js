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

("use strict");

//однострочный комментарий

/*
Многострочный 
комментарий
*/

//alert(сообщение) - вывод модального окна с сообщением
//console.log(сообщение) - вывод сообщения в консоли браузера

//Переменная – это «именованное хранилище» для данных.
//Для создания переменных используем var, let, const

var count = 10; //изменяемая переменная (не забываем что это устаревший способ создания переменных, вместо него используем let)
let count1 = 11; // создание изменяемой переменной

count1 = "Hello world"; // изменили значение переменной count1 было 11 стало Hello world

const count2 = 12; //создание неизменяемой переменной, попытка изменения приведет к ошибке

//Типы данных

let num = 123; //число
let str = "Hi world"; //строка
let bool = true; //булевое или логическое значение (может быть true или false)
bool = false;

let empty = null; //cпециальное значение, означает "значение неизвестно"
let unDevined = undefined; //специальное значение, означает "значение не было присвоено"
let obj = { str: "String", num: 10 }; //объект, сложный тип данных, который представляет собой коллекцию данных

//typeof
//используется для определения типа данных

const type1 = typeof "Its string"; //string
const type2 = typeof 123; //number
const type3 = typeof true; //boolean

//Строка

//создание строки при помощи одинарных и двойных ковычек
let str = "Hello";
let str1 = "Hello";

//создание строки при помощи обратных ковычек

let str2 = `Hello`;

//отличие обратных ковычек состоит в том, что с их помощью можно создавать шаблоны строк используя ${}

let amount = 1000000;

let str3 = `I have ${amount} dollars`;

//Преобразование типов
//String(переменная) - преобразует переменную в строку
let str = String(123); // получим '123'
let str1 = String(true); //получим 'true'

//Number(переменная) - преобразует переменную в число

let num = Number("123"); // получим число 123
let num1 = Number(true); // 1
let num2 = Number(false); //0
let num3 = Number("Test"); // NaN (not a number) значит преобразование не удалось

//Boolean(переменная) - преобразует переменную в булевое значение

let bool = Boolean(123); //true
let bool1 = Boolean(0); //false
let bool3 = Boolean("0"); //true
let bool2 = Boolean(""); //false
let bool3 = Boolean("Test"); //true

//Еще пару слов о преобразовании

//преобразование к числу происходит при использовании математических операций

let result = "6" / 2; //3
let result1 = 10 / "2"; //5

//при использовании +, если одно из двух значений будет строкой то оба значения переведутся к строке и произойдет сложение строк

let str = "6" + 2; //62

//Основные операторы

//+ - сложение чисел и сложение строк

let result = 12 + 12; //24
let str = "Hello" + "World"; //HelloWorld

// -, *, /
//соответственно отнимание, умножение, деление

let sub = 12 - 24; // -12
let del = 12 / 12; //1
let umn = 12 * 12; //144

//% - остаток от деления

let ostatok = 10 % 3; //1 - 3*3 + 1

//** - возведение в степень

let result = 2 ** 5; //2 в степени 5 = 32

//инкремент и декремент

let i = 1;

let newI = i++; // в newI 1, а в i 2

let i = 1;

let newI = ++i; // в newI 2 и в i 2
