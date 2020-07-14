/*задание 0*/
function findMin(...args) {
  let min;
  for(let i=0;i<args.length;i++) {/*args.forEach((elem, i) =>  */
    min = args[i];
    if (args[i] < args[i + 1]) {
    min=args[i+1];
   } 
  }
  return console.log(min);
 }
 findMin(0, -17, 33, 23, 999, -17,56,23,-999);

 /*задание 1*/
 function summarize(...args) {
  let result = args.reduce((sum, current) => {
   sum =sum + current;
   return sum;
  }, 0);
  return result;
 }
 console.log(summarize(0, 10, 20,10,-30));
 
/*задание 2*/

 function counter() {
  let count = 1;

  return function() {
      return Math.pow(count++, 2);
  }
}

let newCounter = counter();

console.log(newCounter());
console.log(newCounter());
console.log(newCounter());




 /*задание 3* почему -то сравнивает только первые элементы массива , не понял почему*/

 function equalArr(arr1,arr2){

  for(let i=0;i<arr1.length;i++){
  for(let j=0;j<arr2.length;j++){
     
    if (arr1.length===arr2.length && arr1[i]===arr2[j]) {
    return true;
    }
    else {
    return false
    }  
}
}
}
console.log(equalArr([23, 5, 0], [23, 5, 4]));

/*задание 4* что-то я тут запутался */

let result=0;
let result1=0;
function sqr(c) {
  return result=Math.pow(c, 2);
}
console.log(sqr(3));

function multiply(a,b) {
  return result1=a * b;

}
console.log(multiply(3,5));

function equal(compare,sqr,multiply){
  if (result>result1) {
        return sqr();
    }
    return multiply ();
}

console.log(equal(compare,sqr,multiply));




/*задание 5*/

function difference(a1) {
  return function (a2) {
   return console.log(a1 - a2);
  };
 }
 difference(0)(2);