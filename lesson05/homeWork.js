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
<<<<<<< HEAD
function bubbleSort(arr) {
    let swapped;
  
    do {
      swapped = false;
      console.log(arr);
      arr.forEach((item, index) => {
        if (item > arr[index + 1]) {
          let temp = item;
          arr[index] = arr[index + 1];
          arr[index + 1] = temp;
          swapped = true;
        }
      })
    } while (swapped);
  }
  
  console.log(bubbleSort([5, 3, 7, 10, -10, 89, 87]))
=======

let arr = [4, 7, -3, 10, -2, 5, 13];
let temp = "";

let counter = 0;

function bubbleSort(arr) {
  let bubble;

  do {
    bubble = false;

    arr.forEach((item, index) => {
      if (item < arr[index + 1]) {
        let temp = item;
        arr[index] = arr[index + 1];
        arr[index + 1] = temp;
        bubble = true;
      }

      counter++;
    });
  } while (bubble);

  return arr;
}

let result = bubbleSort(arr);

console.log(result);

>>>>>>> aab8f1db24dc5800635e963aca2856313a8476e3
/**
 * Задание 2
 * Создать массив из 10 чисел. Необходимо создать новый массив, в котором числа будут возведены в квадрат.
 * Например: [1,2,3] -> [1,4,9].
 */

let arr = [1,2,3,4,5,6,7,8,9,10];

let arrSquared = arr.map(item => item ** 2);

console.log(arrSquared); 

/**
 * Задание 3
 * Создать массив объектов с полями: имя, пол. Разделить этот массив на 2 массива (женский и мужской).
 * Использовать reduce.
 */

<<<<<<< HEAD
let people = [
    {name: 'Anton',
     gender: 'male'},
     
     {name: 'Semen',
     gender: 'male'},
     
     {name: 'Slavuana',
     gender: 'female'},

    {name: 'Lena', 
     gender: 'female'}];
     
let maleArr = ['Male:'], femaleArr = ['Female:'];
    
let genderSegregation = people.reduce((arr, item, i) => {
    if(people[i].gender === 'male') {
        let male = Object.assign({}, people[i]);
        let {name} = male;
    return maleArr.push(name);
        }         
    else {         
        let female = Object.assign({}, people[i]);
        let {name} = female;
    return femaleArr.push(name);}
        },[]);
        
        console.log(maleArr,femaleArr);
=======
const people = [
  {
    name: "Anya",
    sex: "female",
  },
  {
    name: "Anton",
    sex: "male",
  },
  {
    name: "Zhenya",
    sex: "male",
  },
  {
    name: "Julia",
    sex: "female",
  },
  {
    name: "Sergey",
    sex: "male",
  },
  {
    name: "Ilia",
    sex: "male",
  },
  {
    name: "Dasha",
    sex: "female",
  },
];

const result3 = people.reduce(
  (acc, current) => {
    console.log(acc);

    if (current.sex === "male") {
      return { ...acc, male: [...acc.male, current] };
    } else if (current.sex === "female") {
      return { ...acc, female: [...acc.female, current] };
    }

    return acc;
  },
  { male: [], female: [] }
);
>>>>>>> aab8f1db24dc5800635e963aca2856313a8476e3

/**
 * Задание 4
 *
 * Написать функцию, которая принимает первым аргументом массив,
 * а вторым любое значение, функция должна вернуть индекс если такое значение есть в массиве и -1 если его нет.
 * (indexOf, findIndex не использовать)
 */

<<<<<<< HEAD
let indOfArr = (arr, value) => { 
    
    for(let i = 0; i < arr.length; i++) {
      
        if(arr[i] === value) {return i;} 

        else if(arr[i] === arr.length) {return -1}
    }};

    console.log(indOfArr([1,2,3,4], 3)); 
=======
//findIndex, find

let arr = [1, 2, 3, 4, 5];

function findIndex(array, value) {
  let i = 0;

  while (i < array.length) {
    if (array[i] === value) {
      return i;
    }

    i++;
  }

  return -1;
}

let index = findIndex(arr, 1);
>>>>>>> aab8f1db24dc5800635e963aca2856313a8476e3

/**
 * Задание 5
 * Написать функцию, которая принимает массив из чисел, а возвращает отсортированный массив.
 * Для сортировки можно использовать метод sort, но еще лучше будет если попробовать написать свою сортировку.
 */

let merge = (arr1, arr2) => {
    let sorted = [];
  
    while (arr1.length && arr2.length) {
      if (arr1[0] < arr2[0]) sorted.push(arr1.shift());
      else sorted.push(arr2.shift());
    };
  
    return sorted.concat(arr1.slice().concat(arr2.slice()));
  };
  
  console.log(merge([2, 5, 10, 57], [9, 12, 13]));

/**
 * Задание 6
 *
 * Написать функцию, которая принимает любое количество чисел(не массив)и возвращает их сумму.
 */

let sum = (number) => {
    let numberStr = String(number);
    let numberArr = numberStr.split('');
      let newNArr = numberArr.map(i => +i);
      return newNArr.reduce((total,item) => total + item,0)} 
   
  console.log(sum(123456789));
