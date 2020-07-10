


    /** задание 0 */
    let arr=[23,17,69,46,92];
    let secondArr = arr.slice(); 
    console.log(secondArr);

    /** задание 1*/

    let arr = [17, 23, 33, 44, 55];
    let str = arr.join();
    console.log(str); 

/** задание 2 */

let arr=[10,6,7,8,10,23,46,23,69,87,65,69,23,10,1];
    for (var i = 0; i < arr.length; i++)
	for (var j = i + 1; j < arr.length;)
	if (arr[i] == arr[j]) arr.splice(j, 1)
	else j++;
    alert(arr);

/** задание 3 */
  
    let arr=[1,3,4,7,9,8],
        arr1=[1,4,23];
        arr2=[];

for (i = 0; i < arr.length; i++) {
    if (arr.length==arr1.length) {
    arr2[i]=arr[i]+arr1[i];
    }
    else if(arr.length>arr1.length){
      arr1.push(0);  
    arr2[i]=arr[i]+arr1[i];
    }
    else{
        arr.push(0);  
    arr2[i]=arr[i]+arr1[i];
    }
    }
    console.log(arr2);
/** задание 4 
вывел повторяющиеся элементы в новый массив и счетчик . Но наверное надо было по-другому сделать */
let arr = [23, 4, 7, 3, 7, 5, 23, 60, 1, 23];
    arr1 =[];
count = 0;
arr.sort();
for(i=0;i<arr.length;i++){
    if ( arr[i]===arr[i+1]){
        arr1.push(arr[i])
        count=count+1;
    }
}
alert(arr1);
alert(count) ;

/** задание 5 */

   let  arr=[1, 2, 3];
        arr1=arr.reverse();

    alert(arr1);
    
/** задание 6 */

    let str = prompt('Введите слово'),
    strReverse = str.split('').reverse().join('');
  if (strReverse === str) {
      console.log(`Введённое слово является полиндромом`);
      } else {
      console.log(`Введённое слов не является полиндромом`);
  }


