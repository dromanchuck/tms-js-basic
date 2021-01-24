/**
 * Домашнее задание к занятию 4
 * Каждому нужно создать новую ветку от ветки master. Название ветки должно содержать имя + первая буква фамилии + /lesson04.
 * Например: dmitryR/lesson04. Выполнение задания производится в свое ветке и в этом файле.
 * После выполнения задания делаете пулл реквест и сообщаете о том, что задание выполнено:)
 * В случае неполодок с гитом, присылаете папку с проектом мне в личные сообщения
 * Код решения должен быть сразу же после самого задания
 */

/**
 * Задание 1
 * Напишите код, который преобразовывает и объединяет все элементы массива в одно строковое значение.
 * Элементы массива будут разделены запятой. Получите результат двумя разными способами.
 */
let arr = ['яблоко', 'груша', 'апельсин', 'ананас'];
let str1 = arr.join(', '); // 1 способ
console.log(str1);
console.log(String(arr)); // 2 способ
let str2 = `${arr[0]}, ${arr[1]}, ${arr[2]}, ${arr[3]}`; // 3 способ
console.log(str2);

/**
 * Задание 2
 * Необходимо создать массив из 15 элементов. В массиве обязательно должны быть одинаковые значения.
 * Напишите код, который уберет эти дубликаты из созданного массива.
 */

let arr1 = [1, 3, 5, 6, 6, 8, 9, 23, 5, 12, 67, 8, 3, 20, 10];

for (let i = 0; i < arr1.length; i++) {
    for (let j = i; j < arr1.length; j++) {
        if (arr1[i] === arr1[j + 1]) {
            arr1.splice(j + 1, 1);
        }
    }
};

console.log(arr1);

/**
 * Задание 3
 * Создайте 2 массива с разной длинной.
 * Необходимо написать код,который создаёт массив элементов представляющих собой сумму
 * соответствующих элементов заданных массивов.
 */
let arr2 = [1, 4, 6, 2, 8];
let arr3 = [2, 4, 9, 0];

let sumOfArrays = arr2.map(function(num, index) {
    if (arr3[index]) {
        return num + arr3[index];
    } else {
        return num;
    }
});
console.log(sumOfArrays);

/**
 * Задание 4
 * Напишите код, который подсчитает количество повторяющихся элементов в массиве.
 * И вывести это количество в консоль.
 */
let arr4 = [1, 3, 5, 6, 6, 8, 9, 23, 5, 12, 67, 8, 3, 20, 10];

function numOfRepeats(array) {
    return array.reduce(function(stack, value) {
        return stack[value] ? stack[value]++ : stack[value] = 1, stack;
    }, {})
}

console.log(numOfRepeats(arr4));

/**
 * Задание 5
 * Напишите код, который разворачивает исходный массив и сохраняет это в новую переменную.
 * Например: исходный массив - [1, 2, 3], результирующий массив - [3, 2, 1]
 */

let arr5 = [1, 2, 3, 4];
let reverseArr5 = arr5.reverse();
console.log(reverseArr5);

/**
 * Задание 6
 * Напишите код, который проверит является строка полиндромом(слово, которое с обеих сторон читается одинаково,
 * например РЕПЕР, ШАЛАШ)
 */

function isPolindrom(word) {
    for (let i = 0; i < word.length; i++) {
        if (word[i] === word[word.length - 1 - i]) {
            console.log(`Слово ${word} является полиндромом`);
        } else {
            console.log(`Слово ${word} не является полиндромом`);
        }
    }
};
isPolindrom('шалаш');


function isPolindrom2(word) {
    let wordReverse = word.split('').reverse().join('');
    if (wordReverse === word) {
        console.log(`Слово ${word} является полиндромом`);
    } else {
        console.log(`Слово ${word} не является полиндромом`);
    }
};

isPolindrom('репер');
isPolindrom2('рокер');

/**
 * Задание 7
 * Написать код, который заменит регистр каждого символа на противоположный.
 * Например 'Hello world' -> 'hELLO WORLD'
 */

let string = 'Hello word';
let upperCaseString = string.toUpperCase();
console.log(upperCaseString);

/**
 * Задание 8
 * Создайте 2 массива с разной длинной.
 * Необходимо написать код,который создаёт массив элементов представляющих собой разность
 * соответствующих элементов заданных массивов.
 */

let array1 = [1, 4, 9, 2, 8];
let array2 = [2, 4, 6, 0];

let difOfArrays = array1.map(function(num, index) {
    if (array2[index]) {
        return num - array2[index];
    } else {
        return num;
    }
});
console.log(difOfArrays);

/**
 * Задание 9
 * Напишите код, который добавит символ двоеточие(':') между нечетными числами.
 * Например, число 556 результат должен быть '5:56', 566 -> 566, 655 -> 65:5
 */

function addSymbol(number) {
    let array = number.toString().split('');
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 1 && array[i + 1] % 2 === 1) {
            array[i] += ':';
        };
    }
    return array.join('');
};

console.log(addSymbol(655));

/**
 * Задание 10
 * Создать массив из 20 чисел. Необходимо высчитать сумму всех элементов.(Используем reduce)
 */
let array = [1, 1, 2, 3, 5, 8, 13, 21, 0, 4, 7, 65, 87, 32, 9, 23, 56, 76, 3, 1];
let sumOfElements = array.reduce((sum, current) => sum + current, 0);
console.log(sumOfElements);