/*
	Задание 0
	Создать объект пользователя интернет магазина, объект должен содержать следущие поля: имя, email, нравятся ли ему фрукты, показатель IQ.
	Созданный объект вывести в консоли.
*/

let shopUser = {
  name: 'Evgeniy',
  email: 'k0w4lk@yandex.by',
  likesFruits: true,
  iq: 229,
};

console.log('Доп. задание 0:', shopUser);

/*
	Задание 1
	Создать объекты трех солдат, объект должен содержать следущие поля: имя, фамилия, звание, рост, вес.
	Сравнить их по росту и весу. Результаты сохранить в переменные и вывести в консоль.
*/

function soldierInfo(name, surname, rank, height, weight) {
  this.name = name;
  this.surname = surname;
  this.rank = rank;
  this.height = height;
  this.weight = weight;
}

const soldier1 = new soldierInfo('Artem', 'Kukharonak', 'Squadie', 194, 98);
const soldier2 = new soldierInfo('Pasha', 'Unknown', 'Lieutenant', 178, 81);
const soldier3 = new soldierInfo('Vlad', 'Savinov', 'Captain', 172, 85);

let compareHeight = [soldier1.height, soldier2.height, soldier3.height]
  .sort((a, b) => a - b)
  .reverse();

let compareWeight = [soldier1.weight, soldier2.weight, soldier3.weight]
  .sort((a, b) => a - b)
  .reverse();

console.log(
  `Доп. задание 1: \nВысокий солдат - ${compareHeight[0]} см.\nСолдат среднего роста - ${compareHeight[1]} см.\nНизкий солдат - ${compareHeight[2]} см.\n\nТяжелый солдат - ${compareWeight[0]} см.\nСолдат среднего веса - ${compareWeight[1]} см.\nЛегкий солдат - ${compareWeight[2]} см.`
);

/*
	Задание 2
	Подсчитайте следующие выражения:
	(10 + 20*3)/(4*134),
	(1000/3 + 130/(12*36))
	Сравните результаты и выведите результаты сравнения в консоль
*/

let expr1 = (10 + 20 * 3) / (4 * 134),
  expr2 = 1000 / 3 + 130 / (12 * 36);

let exprCompare = expr1 === expr2;

console.log('Доп. задание 2:', exprCompare);

/*
	Задание 3
	Создайте объект дерево у которого есть следующие свойства:
	название,
	высота,
	количество листьев,
	семейство.

	Необходимо вывести в консоль объект, а затем "укоротить" дерево, и вывести в консоль.
	Подсказка: посмотреть операторы += -=
*/

let tree = {
  name: 'Maple',
  height: 10,
  leavesAmount: 1429,
  family: 'Sapindaceae',
};

console.log('Доп. задание 3:', tree);

tree.height += 2;

console.log(tree);

/*
	Задание 4
	Создать объект родитель у которого есть следующие поля: имя, фамилия, сколько лет, дети(что является объектом с полями первый ребенок , второй ребенок. третий ребенок)

	Вывести данный объект в консоль
*/

let parent = {
  name: 'Veronica',
  surname: 'Donovan',
  age: 34,
  kids: {
    firstChild: {
      name: 'Jack',
    },
    secondChild: {
      name: 'Sam',
    },
    thirdChild: {
      name: 'Dean',
    },
  },
};

console.log('Доп. задание 4', parent);
