/**
 * Домашнее задание к занятию 5
 * Каждому нужно создать новую ветку от ветки master. Название ветки должно содержать имя + первая буква фамилии + /lesson05.
 * Например: dmitryR/lesson05. Выполнение задания производится в свое ветке и в этом файле.
 * После выполнения задания делаете пулл реквест и сообщаете о том, что задание выполнено:)
 * В случае неполодок с гитом, присылаете папку с проектом мне в личные сообщения
 * Код решения должен быть сразу же после самого задания
 */

/**
 * Задание 1
 * Написать сортировку позырьком, от большего значения к меньшему.
 * код сортировки от меньшего к большему находится по пути lesson04/index.js (использовать любые циклы кромe for)
 */
let arr1 = [5, 46, 7, 55, -9233, 134, 2, 542, -12, 199];
arr1.sort(function(a, b){
  return (a - b);
});
console.log(arr1);
/**
 * Задание 2
 * Создать массив из 10 чисел. Необходимо создать новый массив, в котором числа будут возведены в квадрат.
 * Например: [1,2,3] -> [1,4,9].
 */
let arr1 = [5, 46, 7, 55, -9233, 134, 2, 542, -12, 199];
let arr2 = [];
arr2 = arr1.map(function(x){
return Math.pow(x, 2);
});
/**
 * Задание 3
 * Создать массив объектов с полями: имя, пол. Разделить этот массив на 2 массива (женский и мужской).
 * Использовать reduce.
 */
let arr1 = [
  {name: `Rachel Green`, sex: `female`},
  {name: `Monica Geller`, sex: `female`},
  {name: `Phoebe Buffay`, sex: `female`},
  {name: `Joey Tribbiani`, sex: `male`},
  {name: `Chandler Bing`, sex: `male`},
  {name: `Ross Geller`, sex: `male`},
];
let female = [];
let male = [];
female = arr1.reduce(function(acc, value, index){
  if (`${value.sex}` === `female`) {
    female.push(value);
    return female;
  } if (`${value.sex}` === `male`) {
    male.push(value);
    return male;
    }
}) 
/**
 * Задание 4
 *
 * Написать функцию, которая принимает первым аргументом массив,
 * а вторым любое значение, функция должна вернуть индекс если такое значение есть в массиве и -1 если его нет.
 * (indexOf не использовать)
 */
let arr1 = [5, 46, 7, 55, -9233, 134, 2, 542, -12, 199]; 
function arrayInd () {
  for (i = 0; i < arr1.length; i++) {
    let x = arr1.filter(function(value, index){
      if (value === index) {
        return index;
      } else {
        return `-1`;
      }
    })
  }
  
}

/**
 * Задание 5
 * Написать функцию, которая принимает массив из чисел, а возвращает отсортированный массив.
 * Для сортировки можно использовать метод sort, но еще лучше будет если попробовать написать свою сортировку.
 */
let arr1 = [5, 46, 7, 55, -9233, 134, 2, 542, -12, 199];
let arr2 = [];
arr1.forEach(function (value) {
  if (value  > 10 && value < 100) {
    arr2.push(value);
  } return arr2;
});
console.log(arr2);
/**
 * Задание 6
 *
 * Написать функцию, которая принимает любое количество чисел(не массив)и возвращает их сумму.
 */
function sumNumber () { 
  let x = 0;
  for (let i = 0; i < arguments.length; i++) {
    x += arguments[i];
  }
  return x;
} 
console.log(sumNumber());