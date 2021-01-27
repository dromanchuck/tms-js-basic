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
function calcBubbleSort(array) {
    let change;
    do {
      change = false;
      console.log(array);
      array.forEach((item, index) => {
        if (item > array[index - 1]) {
          let temp = item;
          array[index] = array[index - 1];
          array[index - 1] = temp;
          change = true;
        }
      })
    } while (change);
  }

  console.log(calcBubbleSort([2,20,50,1,-5,-3]))
/**
 * Задание 2
 * Создать массив из 10 чисел. Необходимо создать новый массив, в котором числа будут возведены в квадрат.
 * Например: [1,2,3] -> [1,4,9].
 */
function calcSquare(){
    let array = [2,3,8,10,12,16,20,22,26,28].map(function(a){
      return a * a;
      })
    console.log(array);
}
calcSquare();

/**
 * Задание 3
 * Создать массив объектов с полями: имя, пол. Разделить этот массив на 2 массива (женский и мужской).
 * Использовать reduce.
 */
function createUser(){
    let array = [{name:'Petr', gender:'male'},{name:'Elena', gender:'female'},{name:'Darya', gender:'female'},{name:'Andry', gender:'male'}];
    let male = ['male:'];
    let female = ['female:'];
    array.reduce(function(prev){
      if(prev.gender === 'male'){
            male.push(prev.name);
        }
    },[])
    console.log(male);
     let array2 = array.reduce(function(prev){
       if(prev.gender === 'female'){
            female.push(prev.name);
        }
    },[])
    console.log(female);
}
createUser()
/**
 * Задание 4
 *
 * Написать функцию, которая принимает первым аргументом массив,
 * а вторым любое значение, функция должна вернуть индекс если такое значение есть в массиве и -1 если его нет.
 * (indexOf не использовать)
 */
function checkArr(array,number){
    for(let i = 0; i<array.length;i++){
        if(array[i] === number){
            return i;
        }
    }
    return -1;
}
console.log(checkArr([1,3,5,2,4],5));
/**
 * Задание 5
 * Написать функцию, которая принимает массив из чисел, а возвращает отсортированный массив.
 * Для сортировки можно использовать метод sort, но еще лучше будет если попробовать написать свою соритировку.
 */
let array = [1,10,2,4,8,6];
array.sort(function(a, b) {
  return a - b;
  })
console.log(array);
/**
 * Задание 6
 *
 * Написать функцию, которая принимает любое количество чисел(не массив)и возвращает их сумму.
 */
let func = (...number) => number.reduce((sum, num) => sum + num, 0);
console.log(func(5, 8, 20, 40, 3, 1));
