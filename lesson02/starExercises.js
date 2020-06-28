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
 let internetShop = {
  name : "Yury",
  email : "jasper.hale@gmail.ru",
  "Do you like fruit?" : true,
  iq : 180
 }
 console.log(internetShop);
/**
 * Задание 1
 * Создать объекты трех солдат,
 * объект должен содержать следущие поля: имя, фамилия, звание, рост, вес.
 * Сравнить их по росту и весу. Результаты сохранить в переменные и вывести в консоль.
 */
let soldierOne = {
 name: 'Pete',
 surname: 'Maikovski',
 rank: 'captain',
 weight: 70,
 height: 180
},
soldierTwo = {
 name: 'Micke',
 surname: 'Levin',
 rank: 'sergent',
 weight: 60,
 height: 194
},
soldierThree = {
 name: 'Leonid',
 surname: 'Antonov',
 rank: 'general',
 weight: 75,
 height: 175
};

(soldierOne['weight'] >= soldierTwo['weight'] && soldierOne['weight'] >= soldierThree['weight']) ? console.log("Найбольший вес солдата : " + soldierOne['weight'] + '  см') :
(soldierTwo['weight'] >= soldierOne['weight'] && soldierTwo['weight'] >= soldierThree['weight']) ? console.log("Найбольший вес солдата : " + soldierTwo['weight'] + '  см') : console.log("Найбольший вес солдата : " + soldierThree['weight'] + '  см');
(soldierOne['height'] >= soldierTwo['height'] && soldierOne['height'] >= soldierThree['height']) ? console.log("Найбольший рост солдата : " + soldierOne['height'] + '  см') :
(soldierTwo['height'] >= soldierOne['height'] && soldierTwo['height'] >= soldierThree['height']) ? console.log("Найбольший рост солдата : " + soldierTwo['height'] + '  см') : console.log("Найбольший рост солдата : " + soldierThree['height'] + '  см');
/**
 * Задание 2
 * Подсчитайте следующие выражения:
 * (10 + 20*3)/(4*134),
 * (1000/3 + 130/(12*36))
 *
 * Сравните результаты и выведите результаты сравнения в консоль
 */
let result1 = (10 + 20 * 3) / (4 * 134),
    result2 = (1000 / 3 + 130 / (12 * 36));
(result1 !== result2) ? console.log('Неравны') : console.log('Равны');

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
 name : 'Ольха',
 height : 150,
 numberMint : 120,
 family : "Not inform"
};
console.log(tree);
tree.height -= 15;
console.log(tree);
/**
 * Задание 4
 * Создать объект родитель у которого есть следующие поля:
 * имя, фамилия, сколько лет, дети(что является объектом с полями первый ребенок , второй ребенок. третий ребенок)
 *
 *Вывести данный объект в консоль
 */
let objParent = {
 name : "Саша",
 surname : "Детков",
 age : 40,
 children : {
  firstChild : "Михаил",
  secondChild : "Арсений",
  thirdChild : "Егор"
 }
}
console.log(objParent);