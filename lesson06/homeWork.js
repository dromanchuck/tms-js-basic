/**
 * Задания на методы массивов
 */

/**
 * Задание 0
 * Создать массив из 5 чисел. Необходимо вывести числа через консолью(Используем forEach)
 */

let arrat = [1,2,3,4,5];
arrat.forEach(function(item,index,arr){
    console.log(arr[index]);
});

/**
 * Задание 1
 * Создать массив из 10 чисел. Необходимо создать новый массив, в котором числа будут возведены в квадрат.
 * Например: [1,2,3] -> [1,4,9]. (Используем map).
 */

let arrab = [1,2,3,4,5,6,7,8,9,10];
let result =  arrab.map(function(element,index,arr){
    return element*=element;
});
console.log(result);

/**
 * Задание 2
 * Создать массив из 15 чисел. Необходимо создать новый массив, в котором будут убраны все четные числа.
 * Например: [1,2,3] -> [1,3]. (Используем filter).
 */

let arrac = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
let result1 = arrac.filter((element,index,arr) => arr[index] % 2 !== 0 );
console.log(result1);

/**
 * Задание 3
 * Создать массив из 20 чисел. Необходимо высчитать сумму всех элементов.(Используем reduce)
 */

let  arraq = [1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,0,0];
let result2 = arraq.reduceRight(function(total,element,index,arr){
    total += arr[index];

    return total
} ,0);
console.log(`Сумма = ${result2}`);

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

let arram = [1,2,3];
function getIndex(arr,value){
    let index = arr.findIndex(el => el === value);

    if (arr[index] === value){
        return console.log(`Индекс равен ${index}`);
    }
    else 
    return console.log(`Такого значения нет ${-1}`);
};

getIndex(arram,123);

/**
 * Задание 1
 *
 * Написать функцию, которая принимает 2 числа и возвращает их сумму.
 */

function getSumOfElements(firstNumber,secondNumber){

    console.log(firstNumber + secondNumber);
};

getSumOfElements(15,23);

/**
 * Задание 2
 * Написать функцию, которая принимает массив из чисел, а возвращает отсортированный массив.
 * Для сортировки можно использовать метод sort.
 */

let arrap = [15,20,35,42,22,14,18,53];

function getSortedArray(arr){
    arr.sort(function(firstel,secondel){
        return firstel - secondel
    });
    return arr
};
getSortedArray(arrap);

let arrap = [15,20,35,42,22,14,18,53];
function getSortedArray1(arr){
    arr.forEach(function(outerEl,outerIndex,outerArr){
        arr.forEach(function(innerEl,innerIndex,innerArr){
            if(innerArr[innerIndex] > innerArr[innerIndex + 1]){
                
                let temp = innerArr[innerIndex + 1];
                innerArr[innerIndex + 1] = innerArr[innerIndex];
                innerArr[innerIndex] = temp;
            }
            console.log(arr)
        });
    });
    return arr
};

getSortedArray1(arrap);
