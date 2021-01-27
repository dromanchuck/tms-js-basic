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


array = [2, 12, 0, -3, 5, 1, 20, 7, 21];

function bubbleSort(array) {
    let swapped;

    do {
        swapped = false;
        array.forEach((element, index) => {
            if (element < array[index + 1]) {
                let temp = element;
                array[index] = array[index + 1];
                array[index + 1] = temp;
                swapped = true;
            }
        })
    } while (swapped);
    return array
}

bubbleSort(array); // сама не придумала, слегка измененный вариант из интернета 

/**
 * Задание 2
 * Создать массив из 10 чисел. Необходимо создать новый массив, в котором числа будут возведены в квадрат.
 * Например: [1,2,3] -> [1,4,9].
 */

let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function getSquare(array) {
    return array.map(el => el ** 2);
}

getSquare(array1);

/**
 * Задание 3
 * Создать массив объектов с полями: имя, пол. Разделить этот массив на 2 массива (женский и мужской).
 * Использовать reduce.
 */

let array2 = [
    { name: "Pasha", gender: "male" },
    { name: "Dasha", gender: "female" },
    { name: "Masha", gender: "female" },
    { name: "Gosha", gender: "male" },
    { name: "Igor", gender: "male" }
];

function spliteGender(array) {
    let maleGender = [];
    let femaleGender = [];

    array.reduce((acc, element) => {
        if (element.gender === "male") {
            maleGender.push(element)
        } else if (element.gender === "female") {
            femaleGender.push(element)
        }
    }, []);

    return [maleGender, femaleGender];
}

spliteGender(array2);
console.log(spliteGender(array2)[0], spliteGender(array2)[1])

/**
 * Задание 4
 *
 * Написать функцию, которая принимает первым аргументом массив,
 * а вторым любое значение, функция должна вернуть индекс если такое значение есть в массиве и -1 если его нет.
 * (indexOf не использовать)
 */

let array3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function getIndex(array, a) {
    return array.findIndex(element => element === a)
}

getIndex(array3, 5)

/**
 * Задание 5
 * Написать функцию, которая принимает массив из чисел, а возвращает отсортированный массив.
 * Для сортировки можно использовать метод sort, но еще лучше будет если попробовать написать свою соритировку.
 */

let array4 = [6, -9, 0, 15, 65, -23, 30, 21, 1];

function sortNumbers(array) {
    return array.sort((a, b) => a - b);
}

sortNumbers(array4)

/**
 * Задание 6
 *
 * Написать функцию, которая принимает любое количество чисел(не массив)и возвращает их сумму.
 */

function sumOfNumbers(...numbers) {
    return numbers.reduce((acc, el) => acc + el, 0)
}

sumOfNumbers(3, 6, 2, 9, 0, -12, 7, 3);