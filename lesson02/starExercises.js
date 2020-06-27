/**
 * Дополнительное домашнее задание к занятию 2
 *
 * Каждому нужно создать новую ветку от ветки master. Название ветки должно содержать имя + первая буква фамилии + /lesson02+.
 * Например: dmitryR/lesson02+. Выполнение задания производится в свое ветке и в этом файле.
 * После выполнения задания делаете пулл реквест и сообщаете о том, что задание выполнено:)
 * В случае неполодок с гитом, присылаете папку с проектом мне в личные сообщения
 * Код решения должен быть сразу же после самого задания
 */

/**
 * Задание 0
 * Создать объект пользователя интернет магазина,
 * объект должен содержать следущие поля: имя, email, нравятся ли ему фрукты, показатель IQ.
 * Созданный объект вывести в консоли.
 */
"use strict";

let user = {
    name: 'Oleg',
    email: 'oleg@mail.ru',
    'like-fruits': 'Oleg likes fruits',
    iq: 'IQ oleg = 287'
};

console.log(user);

/**
 * Задание 1
 * Создать объекты трех солдат,
 * объект должен содержать следущие поля: имя, фамилия, звание, рост, вес.
 * Сравнить их по росту и весу. Результаты сохранить в переменные и вывести в консоль.
 */

let soldierLeon = {
    name: 'Leon',
    surname: 'Scott',
    growth: 180,
    weight: 70,
}

let soldierValery = {
    name: 'Valery',
    surname: 'Albertov',
    growth: 140,
    weight: 56,
}

let soldierBigman = {
    name: 'Big-man',
    surname: 'Pappy',
    growth: 220,
    weight: 160,
}
//Единственный логический способ, который пришел мне в голову :)
if (+soldierLeon.weight > (soldierValery.weight && soldierBigman.weight)) {
    console.log('Leon the fattest');
} else {
    console.log('Leon not fattest');
}

if (+soldierValery.weight > (soldierLeon.weight && +soldierBigman.weight)) {
    console.log('Valery the fattest');
} else {
    console.log('Valery not fattest');
}

if (+soldierBigman.weight > (soldierLeon.weight && soldierValery.weight)) {
    console.log('Big-man the fattest');
} else {
    console.log('Big-man not fattest');
}

/**
 * Задание 2
 * Подсчитайте следующие выражения:
 * (10 + 20*3)/(4*134),
 * (1000/3 + 130/(12*36))
 *
 * Сравните результаты и выведите результаты сравнения в консоль
 */

let a2 = (((10 + 20 * 3) / (4 * 134) * 10) / 10).toFixed(2),
    b2 = (1000 / 3 + 130 / (12 * 36)).toFixed(1);
if (a2 < b2) {
    console.log(`Результат обработки выражения: ${a2} < ${b2}`);
} else {
    console.log(`Результат обработки выражения: ${a2} > ${b2}`);
}

/**
 * Задание 3
 * Создайте объект дерево у которого есть следующие свойства:
 * название,
 * высота,
 * количество листьев,
 * семейство.
 *
 * Необходимо вывести в консоль объект, а затем "укоротить" дерево, и вывести в консоль.
 * Подсказка: посмотреть операторы += -=
 */

const tree = {
    name: 'Oleg',
    height: 5000,
    leaves: 10000,
    family: 'trees',
}
console.log(tree);

tree.height -= 1364;
console.log(tree);

/**
 * Задание 4
 * Создать объект родитель у которого есть следующие поля:
 * имя, фамилия, сколько лет, дети(что является объектом с полями первый ребенок , второй ребенок. третий ребенок)
 *
 *Вывести данный объект в консоль
 */

let parent = {
    name: 'Max',
    surname: 'Wey',
    aga: '34',
    children: {
        firstChild: 'Ada',
        secondChild: 'Chloe',
        thirdChild: 'HelenaHarper',
    }
}

console.log(parent);