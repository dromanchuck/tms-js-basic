/*  задание 0  */
let array = [23, 22, 63, 46, 69];


array.forEach(function(elem){
   console.log(elem);
});

/* задание 1 */
let arr=[5,7,23,69,0,1,-9,-23,6,-6];
let newArr = arr.map(function(elem) { 
    return Math.pow(elem,2);
});
console.log(newArr);

/*задание 2 */

let array=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14];
let newArray= array.filter(function(elem){
    return elem % 2 != 0;
});
console.log(newArray);

/*задание 3 */

let array = [0,1 ,2 ,3 ,4 ,5 ,6 ,7 ,8 ,9 ,10 ,11 ,12 ,13 ,14 ,15 ,16 ,17 ,18 ,19];
result = array.reduce(function(sum, current) {
    return sum + current;
  }, 0);
  
  console.log(result);
  


  /* функции задание 1 */

function sum(a, b){
    console.log(a + b);
};
sum(0, 23);

/*Задание 2 */

let array = [23, 4, 0, 3, 7, 5, -23, 60, 1, 23,17,23,7,4];
function result(array)  {
    newArray=array.sort((a, b) => a - b );
    console.log(newArray);
}
result(array);



  /* задание 0 */
  let array = [23, 4, 0, 3, 7, 5, -23, 60, 1, 23,17,23,7,4];
  function task(arr, number){
      for(let i=0 ; i<array.length; i++){
          if (array[i] === number){
              return alert(i);
          }
          else return alert(-1);
      }    
};
task(array,0);