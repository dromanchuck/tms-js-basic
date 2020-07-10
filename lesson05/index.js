/** задание 0
 * первый вариант


let arr=[10,6,7,8,10,23,46,23,69,87,65,69,23,10,1];

let array=[...new Set (arr)];
console.log(arr);
console.log(array);
*/

/** задание 0
 * второй вариант

let arr=[10,6,7,8,10,23,46,23,69,87,65,69,23,10,1];
let newArr=arr.filter((item,index)=> {
  return index===arr.indexOf(item);
});
console.log(arr);
console.log(newArr);
*/

/** задание 1
let arr=[1,3,4,9,8];
let arr1=[1,4,23];
let newArr=[];

console.log(arr);
console.log(arr1);
console.log(newArr);




.*Задание 2

function compareNumber(a, b) {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
}
let arr = [23, 4, 7, 3, 7, 5, 23, 60, 1, 23,17,23,7,4];
    arr1 =[];
    count = 0;
    i=0;
    arr.sort(compareNumber);
    console.log(arr);
    arr.forEach(function(item, i, arr) {
      if ( arr[i]===arr[i+1]){
        arr1.push(arr[i])
        count=count+1;
        i++;
    }
      
    });
    console.log(count);
    */
let arr=[322,556,666,778,998];




console.log(arr);







/*Задание 4

let arr=[1,3,76,9,8];

let max = arr.reduce(function(a, b) {
  return Math.max(a, b);
});
console.log(max);
*/
