/**
 * Задания на методы массивов
 */

/**
 * Задание 0
 * Создать массив из 5 чисел. Необходимо вывести числа через консолью(Используем forEach)
 */
let arr = [1, 42, 24, 4, 424];
arr.forEach((elem,index,array) => {
 console.log(array[index]); //elem
})

/**
 * Задание 1
 * Создать массив из 10 чисел. Необходимо создать новый массив, в котором числа будут возведены в квадрат.
 * Например: [1,2,3] -> [1,4,9]. (Используем map).
 */
let arrTaskOne = [1 ,2 ,3 ,4 ,5 ,6 ,7 ,8 ,9 ,10];

let arrTaskOneCopy = arrTaskOne.map((elem,index,array) =>{
 elem = elem ** 2;
 return elem;
})
console.log(arrTaskOneCopy);

/**
 * Задание 2
 * Создать массив из 15 чисел. Необходимо создать новый массив, в котором будут убраны все четные числа.
 * Например: [1,2,3] -> [1,3]. (Используем filter).
 */

let arrTaskTwo = [1 ,2 ,3 ,4 ,5 ,6 ,7 ,8 ,9 ,10 ,11 ,12 ,13 ,14 ,15];
let arrTaskTwoCopy = arrTaskTwo.filter((elem) => elem % 2 !== 0);
console.log(arrTaskTwoCopy);
/**
 * Задание 3
 * Создать массив из 20 чисел. Необходимо высчитать сумму всех элементов.(Используем reduce)
 */
let arrTaskThree = [1 ,2 ,3 ,4 ,5 ,6 ,7 ,8 ,9 ,10 ,11 ,12 ,13 ,14 ,15 ,16 ,17 ,18 ,19 ,20];
let arrTaskThreeCopy = arrTaskThree.reduce((acum, elem) => {
  acum += elem; return acum;
},0);

console.log(arrTaskThreeCopy);
/**
 * Задания на функции
 */

/**
 * Задание 0
 *
 * Написать функцию, которая принимает первым аргументом массив,
 * а вторым любое значение, функция должна вернуть индекс если такое значение есть в массиве и -1 если его нет.
 * (indexOf не использовать)
 */
let arrTaskFour = [1, 42, 24, 4, 424];
function returnIndex(array, value){
 let i = array.findIndex(elem => elem === value);
 if (array[i] === value){
 return console.log(i);
} else 
 return console.log(-1);
};
returnIndex(arrTaskFour, 41231);
/**
 * Задание 1
 *
 * Написать функцию, которая принимает 2 числа и возвращает их сумму.
 */
let newFunction = function(a,b){
 if (a !== '' && a !== null && b !== null && b!== ''){
 console.log(a + b)}
 else console.log('NaN');
};
newFunction(13,31);
/**
 * Задание 2
 * Написать функцию, которая принимает массив из чисел, а возвращает отсортированный массив.
 * Для сортировки можно использовать метод sort.
 */
let arrSort = [13 ,31 ,131 ,21];
let funct = (array) => {
 array.sort((a,b) => (b - a));
 console.log(array);
};
funct(arrSort);