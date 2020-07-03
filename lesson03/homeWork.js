/**
 * Домашнее задание к занятию 3
 * Каждому нужно создать новую ветку от ветки master. Название ветки должно содержать имя + первая буква фамилии + /lesson03.
 * Например: dmitryR/lesson03. Выполнение задания производится в свое ветке и в этом файле.
 * После выполнения задания делаете пулл реквест и сообщаете о том, что задание выполнено:)
 * В случае неполодок с гитом, присылаете папку с проектом мне в личные сообщения
 * Код решения должен быть сразу же после самого задания
 */

/**
 * Задание 0
 * Напишите программу, которая сравнит 2 числа и выведет в алерт наибольшее.
 */

<<<<<<< HEAD
let numberOne = +prompt('Число 1: '),
    numberTwo = +prompt('Число 2: ');
if(numberOne != null && numberOne != '' && numberTwo != null && numberTwo != '' && numberOne > numberTwo){
 alert(`Больше Число 1: ${numberOne}`)
}
else if (numberTwo > numberOne){
 alert(`Больше Число 2: ${numberTwo}`);
} 
else{
 console.log('error');
}
=======
let a1 = 12;
let a2 = 24;

if (a1 > a2) {
  alert(a1);
} else if (a1 < a2) {
  alert(a2);
} else {
  alert("Equal");
}

>>>>>>> 4259c836ece3269968d793af3cda3333f66d3b1b
/**
 * Задание 1
 * Создайте три переменные a1, a2, a3 и положите в них числа (желательно использовать
 * как положительные так и отрицательные числа). Используя условные операторы
 найдите знаки этих чисел (это может быть - или ничего).
 * Результат должен быть выведен через alert, который содержит сообщение
 * следующего вида: Знаки чисел a1, a2, a3: -, ,- (например a1 = -14, a2 = 10, a3 = -12);
 */
let a1 = -14,
    a2 = 10,
    a3 = -12;
if (a1 < 0){a1 = '-'} else {a1 = " ";};
if (a2 < 0){a2 = '-'} else {a2 = " ";};
if (a3 < 0){a3 = '-'} else {a3 = " ";};

console.log(`Знаки чисел: ${a1} , ${a2}, ${a3}`);

let a1 = -100;
let a2 = 12;
let a3 = 14;

let result;

if (a1 < 0) {
  result = result + "-,";
} else {
  result = result + ",";
}

if (a2 < 0) {
  result = result + "-,";
} else {
  result = result + ",";
}

if (a3 < 0) {
  result = result + "-";
} else {
  result = result + "";
}

alert(result);

/**
 * Задание 2
 * Создайте 5 чисел и найдите наибольшее при помощи условий
 * Создайте 5 чисел и найдите наибольшее при помощи условий.
 */
let a = +prompt("Число 1"," "),
    b = +prompt("Число 2"," "),
    c = +prompt("Число 3"," "),
    d = +prompt("Число 4"," "),
    e = +prompt("Число 5"," "),
    numbers = [a,b,c,d,e],
    max = 0,
    i = 0;
    while(i < 5){
       if (numbers[i] > max){
           max = numbers[i];
       }
       i++;
    };
    console.log(max);

let a = +prompt("Число 1"," "),
    b = +prompt("Число 2"," "),
    c = +prompt("Число 3"," "),
    d = +prompt("Число 4"," "),
    e = +prompt("Число 5"," ");
if (a >= b && a >= c && a >= d && d >= e){
    console.log(a);
} else if (b >= c && b >= d && b >= e){
    console.log(b);
} else if (c >= d && c >= e){
    console.log(b);
} else if (d >= e) {
    console.log(d);
} else {
    console.log(e);
}

let a1 = 10;
let a2 = -19;
let a3 = 45;
let a4 = 45.57;
let a5 = 23;

if (a1 >= a2) {
  if (a1 >= a3) {
    if (a1 >= a4) {
      if (a1 >= a5) {
        alert(a1);
      }
    }
  }
}

//&&

if (a1 >= a2 && a1 >= a3 && a1 >= a4 && a1 >= a5) {
  alert(a1);
}

if (a2 >= a3) {
  if (a2 >= a4) {
    if (a2 >= a5) {
      alert(a2);
    }
  }
}

//&&

if (a2 >= a3 && a2 >= a4 && a2 >= a5) {
  alert(a1);
}

/**
 * Задание 3
 * Напишите цикл от 0 до 15. И в каждой итерации цикла нужно проверить четное число или нечетное.
 * И вывести в консоли, результат будет выглядеть примерно так:
 * 0 это четное
 * 1 это нечетное
 * ...
 */
let i = 0;
do {
    if (i % 2 == 0){
        console.log(`${i} - четное`);
    } else {
        console.log(`${i} - нечетное`);
    }
    i++;
} while(i <= 15);

for (let i = 0; i <= 15; i++) {
  if (i % 2 === 0) {
    console.log(`${i} это число четное`);
  } else {
    console.log(`${i} это число нечетное`);
  }
}

let i = 0;

while (i <= 15) {
  if (i % 2 === 0) {
    console.log(`${i} это число четное`);
  } else {
    console.log(`${i} это число нечетное`);
  }

  i++;
}

/**
 * Задание 4
 * У нас есть студентов: Вася, Зина, Катя, Петя, Вова. Они решали финальный тест
 * и процент выполнения теста таков: Вася - 80, Зина - 77, Катя - 88, Петя - 95, Вова - 57.
 * Оценки рассчитываются следующим образом:
 *
 * если процент > 90 - 5
 * если процент > 80 - 4
 * если процент > 70 - 3
 * если процент > 60 - 2
 *
 * Ответ вывести следующим образом:
 * Вася - 2,
 * Зина - 3
 * ...
 */
let names = ['Вася','Зина','Катя','Петя','Вова'],
    percent = [80, 77, 88, 95, 57],
    name,
    a;
for (i = 0; i < 5; i++){
    a = percent[i];
    name = names[i];
    switch (true){
        case a > 90:
            alert(`${name}, оценка: 5`);
            break;
        case a > 80 && a <= 90:
            alert(`${name}, оценка: 4`);
            break;
        case a > 70 && a <= 80:
            alert(`${name}, оценка: 3`);
            break;
        case a <= 70:
            alert(`${name}, оценка: 2`);
            break;
        default:
            alert('not');
    }    
};

const students = {
  Вася: 80,
  Зина: 77,
  Катя: 88,
  Петя: 95,
  Вова: 57,
};

for (let key in students) {
  let percent = students[key];

  if (percent > 90) {
    console.log(`${key} - 5`);
    continue;
  }

  if (percent > 80) {
    console.log(`${key} - 4`);
    continue;
  }

  if (percent > 70) {
    console.log(`${key} - 3`);
    continue;
  }

  if (percent > 60) {
    console.log(`${key} - 2`);
    continue;
  }
}

/**
 * Задание 5
 * Написать цикл, который будет итерироватся от 1 до 100.
 * На каждой итерации цикла нужно проверить:
 * если число кратное 3 - то вывести в консоль строку Fizz,
 * если число кратное 5 - то вывести в консоль строку Buzz,
 * если число кратное и 3 и 5 - то вывести FizzBuzz
 */
<<<<<<< HEAD
for (i = 1; i <= 100; i++){
    if (i % 3 == 0 && i % 5 == 0){
        console.log('FizzBuzz')
    } else if (i % 5 == 0){
        console.log('Buzz');
    } else if (i % 3 == 0){
        console.log('Fizz')
    } else {
        console.log(i);
    }
};
=======
let i = 1;

while (i <= 15) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log(`Fizz`);
  } else if (i % 5 === 0) {
    console.log(`Buzz`);
  }

  i++;
}
>>>>>>> 4259c836ece3269968d793af3cda3333f66d3b1b

/**
 * Задание 6
 *
 * Нарисовать прямоугольный треугольник с длинной катетов i (любое число больше 1).
 * Для рисования использовать символ *(звездочка) или %(знак процента) и консоль.
 *
 */
<<<<<<< HEAD
let i = 0, 
    j = 0,
    max = 5;
while (i < max) {
    let star = "*";
    for (j = 0; j < i; j++) {star += '*'};
    console.log(star);
    i++;
}
=======

//*
//**
//***
//****

let i = 0;
let length = 15;

while (i <= length) {
  let str = "";

  for (let j = 0; j <= i; j++) {
    str += "*";
  }

  console.log(str);

  i++;
}

>>>>>>> 4259c836ece3269968d793af3cda3333f66d3b1b
/**
 * Задание 7
 * Написать цикл от 0 до 1000. Высчитать сумму всех чисел кратных 4 и сумму всех чисел кратных 3.
 *
 */
let sum4 = 0,
    sum3 = 0;
for (i = 0; i <= 1000; i++){
    if (i % 4 === 0){
     sum4 += i;
    }
    else if (i % 3 === 0){
     sum3 += i;
    }
}
console.log(sum4,sum3);
/**
 * Задание 8
 * Написать программу, которая найдет наибольший общий делитель двух целых чисел и вывести это число в alert.
 *
 */
<<<<<<< HEAD
let a = +prompt('Число 1: ',''),
    b = +prompt('Число 2: ','');
while (a!=0 && b!=0){
    if (a > b) {
        (a = a % b)}
    else {
        b = b % a;
    }
}
alert(a + b);
=======

let a = 1234;
let b = 43221;

while (a !== b) {
  if (a > b) {
    a = a - b;
  }

  if (b > a) {
    b = b - a;
  }
}

console.log(a);

>>>>>>> 4259c836ece3269968d793af3cda3333f66d3b1b
/**
 * Задание 9
 * Напишите программу сортировки трех чисел. Результат сортировки вывести в консоль.
 * При сортировке не использовать циклы, можно использовать только if else.
 *
 */
<<<<<<< HEAD
let numberOne = +prompt('Число 1: ',''),
    numberTwo = +prompt('Число 2: ',''),
    numberThree = +prompt('Число 3: ','');
if (numberOne <= numberTwo && numberTwo <= numberThree){
    console.log(numberOne,numberTwo,numberThree);
} else if (numberTwo <= numberOne && numberOne <= numberThree){
    console.log(numberTwo,numberOne,numberThree);
} else if (numberThree <= numberOne && numberOne <= numberTwo){
    console.log(numberThree,numberOne,numberTwo);
} else if (numberThree <= numberTwo && numberTwo <= numberOne){
    console.log(numberThree,numberTwo,numberOne);
} else if (numberOne <= numberThree && numberThree <= numberTwo){
    console.log(numberOne,numberThree,numberTwo);
} else {
    console.log(numberTwo,numberThree,numberOne);
};

=======

let a1 = 10;
let a2 = 45;
let a3 = 90;

if (a1 >= a2 && a2 >= a3) {
  console.log(a1, a2, s3);
}
>>>>>>> 4259c836ece3269968d793af3cda3333f66d3b1b
