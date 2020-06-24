'use strict'
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

let storeUser = {
    name: 'Mike',
    email: 'mike@yandex.ru',
    likesFruits: true,
    IQ: 120,
};

console.log(storeUser);

/**
 * Задание 1
 * Создать объекты трех солдат,
 * объект должен содержать следущие поля: имя, фамилия, звание, рост, вес.
 * Сравнить их по росту и весу. Результаты сохранить в переменные и вывести в консоль.
 */

let soldier1 = {
    name: 'Pasha',
    surname: 'Antonov',
    rank: 'soldier',
    growth: 180,
    weight: 78,
};

let soldier2 = {
    name: 'Vasia',
    surname: 'Popov',
    rank: 'soldier',
    growth: 180,
    weight: 85,
};

let soldier3 = {
    name: 'Toxa',
    surname: 'Jackson',
    rank: 'soldier',
    growth: 180,
    weight: 92,
};

let comparison = {
    compareGrowth: soldier1.growth === soldier2.growth || soldier1.growth === soldier3.growth || soldier2.growth === soldier3.growth,
    compareWeigth: soldier1.weight === soldier2.weight || soldier1.weight === soldier3.weight || soldier2.weight === soldier3.weight,
};

console.log(comparison);
/**
 * Задание 2
 * Подсчитайте следующие выражения:
 * (10 + 20*3)/(4*134),
 * (1000/3 + 130/(12*36))
 *
 * Сравните результаты и выведите результаты сравнения в консоль
 */

let a = (10 + 20 * 3) / (4 * 134),
    b = (1000 / 3 + 130 / (12 * 36)),
    c = a === b;

//console.log('Результаты: ${a}, ${b}. Результат сравнения - ${c}'); не заработала. Выводит просто текстом результат , а не переменными!!!
console.log(a, b, c);

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

let tree = {
    name: 'Klen',
    height: 15,
    listCount: 1500,
    type: 'tralala'
};

console.log(tree.height, tree.listCount);

tree.height -=3;
tree.listCount -=500;

console.log(tree.height, tree.listCount);

/**
 * Задание 4
 * Создать объект родитель у которого есть следующие поля:
 * имя, фамилия, сколько лет, дети(что является объектом с полями первый ребенок , второй ребенок. третий ребенок)
 *
 *Вывести данный объект в консоль
 */

let parent = {
    name: 'John',
    surname: 'Smith',
    years: 35,
    children: {
        firstChild: 'Antony',
        secondChild: 'Mike',
        thirdChild: 'Nike',
    }
};

console.log(parent);
