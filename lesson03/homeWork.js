"use strict"
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

let firstNumber = Number(prompt('Задание 0 \nВведите первое число:')),
secondNumber = Number(prompt('Введите второе число:'));

if (firstNumber > secondNumber){
    alert(`Задание 0 \n${firstNumber}`); 
}   else if ( secondNumber > firstNumber){
    alert(`Задание 0 \n${secondNumber}`);
}   else {
    alert('Задание 0\nБыли введены не числа. \nПожалуйста обновите страницу и введите числa');
}

/**
 * Задание 1
 * Создайте три переменные a1, a2, a3 и положите в них числа (желательно использовать
 * как положительные так и отрицательные числа). Используя условные операторы
 найдите знаки этих чисел (это может быть - или ничего).
 * Результат должен быть выведен через alert, который содержит сообщение
 * следующего вида: Знаки чисел a1, a2, a3: -, ,- (например a1 = -14, a2 = 10, a3 = -12);
 */

let a1 = -5,
    a2 = 20, 
    a3 = 15,
    a1Symbol = ( a1 > 0 ) ? ' ' : '-',
    a2Symbol = ( a2 > 0 ) ? ' ' : '-',
    a3Symbol = ( a3 > 0 ) ? ' ' : '-';

alert(`Задание 1 \nЗнаки чисел a1, a2, a3: ${a1Symbol} , ${a2Symbol} , ${a3Symbol}`);

/**
 * Задание 2
 * Создайте 5 чисел и найдите наибольшее при помощи условий.
 */

let b1 = Number(prompt('Введите первое число:')),
    b2 = Number(prompt('Введите второе число:')),
    b3 = Number(prompt('Введите третье число:')),
    b4 = Number(prompt('Введите четвертое число:')),
    b5 = Number(prompt('Введите пятое число:')),
    theLargestNumber = b1 > b2 && b1 > b3 && b1 > b4 && b1 > b5 ? b1 :
    b2 > b3 && b2 > b4 && b2 > b5 && b2 > b1 ? b2 :
    b3 > b4 && b3 > b5 && b3 > b1 && b3 > b2 ? b3 :
    b4 > b5 && b4 > b1 && b4 > b2 && b4 > b3 ? b4 :
    b5 > b1 && b5 > b2 && b5 > b3 && b5 > b4 ? b5: b5;

alert (`Задание 2 \n ${theLargestNumber}`);

/**
 * Задание 3
 * Напишите цикл от 0 до 15. И в каждой итерации цикла нужно проверить четное число или нечетное.
 * И вывести в консоли, результат будет выглядеть примерно так:
 * 0 это четное
 * 1 это нечетное
 * ...
 */

console.log ('Задание 3')
for (let i = 0; i <= 15; i++) {
    if (i % 2 === 0) {
    console.log (`${i} это четное`)}
    else 
    console.log (`${i} это нечетное`);
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

let VasiaPercent = 80,
    ZinaPercent = 77,
    KatiaPercent = 88,
    PetiaPercent = 95,
    VovaPercent = 57;

let VasiaMark = VasiaPercent > 90 ? 5 :
    VasiaPercent > 80 ? 4 :
    VasiaPercent > 70 ? 3 :
    VasiaPercent > 60 ? 2 : 2;

let ZinaMark = ZinaPercent > 90 ? 5 :
    ZinaPercent > 80 ? 4 :
    ZinaPercent > 70 ? 3 :
    ZinaPercent > 60 ? 2 : 2;

let KatiaMark = KatiaPercent > 90 ? 5 :
    KatiaPercent > 80 ? 4 :
    KatiaPercent > 70 ? 3 :
    KatiaPercent > 60 ? 2 : 2;

let PetiaMark = PetiaPercent > 90 ? 5 :
    PetiaPercent > 80 ? 4 :
    PetiaPercent > 70 ? 3 :
    PetiaPercent > 60 ? 2 : 2;

let VovaMark = VovaPercent > 90 ? 5 :
    VovaPercent > 80 ? 4 :
    VovaPercent > 70 ? 3 :
    VovaPercent > 60 ? 2 : 2;

alert (`Задание 4 \nВася - ${VasiaMark} \nЗина - ${ZinaMark} \nКатя - ${KatiaMark} \nПетя - ${PetiaMark} \nВова - ${VovaMark}`);

/**
 * Задание 5
 * Написать цикл, который будет итерироватся от 1 до 100.
 * На каждой итерации цикла нужно проверить:
 * если число кратное 3 - то вывести в консоль строку Fizz,
 * если число кратное 5 - то вывести в консоль строку Buzz,
 * если число кратное и 3 и 5 - то вывести FizzBuzz
 */

for (let i = 1; i <= 100; i++) {
    (i % 5 === 0 && i % 3 === 0) ? console.log(`${i} - FizzBuzz`) : 
    (i % 3 === 0) ? console.log(`${i} - Fizz`) :
    (i % 5 === 0) ? console.log(`${i} - Buzz`) : 0;
}

/**
 * Задание 6
 *
 * Нарисовать прямоугольный треугольник с длинной катетов i (любое число больше 1).
 * Для рисования использовать символ *(звездочка) или %(знак процента) и консоль.
 *
 */

let i = 0,
    j = 0;
while (i < 10) {
    let star = "*";
    for (j = 0; j < i; j++) {star += '*'};
    console.log(star);
    i++;
}

/**
 * Задание 7
 * Написать цикл от 0 до 1000. Высчитать сумму всех чисел кратных 4 и сумму всех чисел кратных 3.
 *
 */

let sum = 0;

for (let i = 0; i <= 1000; i++) {
    if (i % 4 === 0 || i % 3 === 0) {
        sum += i;
    }
};

console.log(`Задание 7\nсумма = ${sum}`);

/**
 * Задание 8
 * Написать программу, которая найдет наибольший общий делитель двух целых чисел и вывести это число в alert.
 *
 */

let a = +prompt('Введите число 1:');
let b = +prompt('Введите число 2:'); 

while(a != b) {
    if ( a > b) {
        a = a - b;
    }
    if (b > a) {
        b =  b - a;
    }
}

console.log(a);

/**
 * Задание 9
 * Напишите программу сортировки трех чисел. Результат сортировки вывести в консоль.
 * При сортировке не использовать циклы, можно использовать только if else.
 *
 * 
 */

let nubmerOne = Number(prompt('Задание 9 \nВведите число 1:')),
    nubmerTwo = Number(prompt('Введите число 2:')),
    nubmerThree = Number(prompt('Введите число 3:'));

if (nubmerOne <= nubmerTwo && nubmerTwo <= nubmerThree){   
    console.log(nubmerOne,nubmerTwo,nubmerThree);
    } else if (nubmerThree <= nubmerTwo && nubmerTwo <= nubmerOne){   
        console.log(nubmerThree,nubmerTwo,nubmerOne);   
    } else if (nubmerThree <= nubmerOne && nubmerOne <= nubmerTwo){    
        console.log(nubmerThree,nubmerOne,nubmerTwo);    
    } else if (nubmerTwo <= nubmerOne && nubmerOne <= nubmerThree){    
        console.log(nubmerTwo,nubmerOne,nubmerThree); 
    } else if (nubmerOne <= nubmerThree && nubmerThree <= nubmerTwo){  
        console.log(nubmerOne,nubmerThree,nubmerTwo);
    } else if (nubmerTwo <= nubmerThree && nubmerThree <= nubmerOne){
        console.log(nubmerTwo,nubmerThree,nubmerOne);
    };
