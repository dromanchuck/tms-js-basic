
/**
 Задание 0   **/

let a = prompt('Введите число a'),
    b = prompt('Введите число b');
if (a > b) {
  alert( a  );
} else if (a < b) {
  alert( b );
} else {
  alert( 'a равно b' );
}
/**
 Задание 1
 **/
let a1 = -23,
    a2 = 17,
    a3 = -14;
    if (a1> 0) {
      alert( 'Знак числа  a1  +' );
    }
     else {
      alert( 'Знак числа  a1  -');
    }
    if (a2> 0) {
      alert( 'Знак числа  a2  +' );
    }
     else {
      alert( 'Знак числа  a2  -');
    }
    if (a3> 0) {
      alert( 'Знак числа  a3  +' );
    }
     else {
      alert( 'Знак числа  a3  -');
    }
/**
Задание 2
**/
   let a = prompt("Число 1"," "),
       b = prompt("Число 2"," "),
       c = prompt("Число 3"," "),
       d = prompt("Число 4"," "),
       e = prompt("Число 5"," "),
       mas = [a,b,c,d,e],
       i = 0;
       for (i = 0; i < 6; i++){
        if (mas[i] >= mas[1] && mas[i] >= mas[2] && mas[i] >= mas[3] && mas[i] >= mas[4]){
            alert(mas[i]);
            break;
        } else {
    }
}
/**
Задание 3
**/
let i = 0;
for (i = 0; i < 16; i++){
  if (i % 2 == 0){
    console.log(`${i} - четное`);
} else {
    console.log(`${i} - нечетное`);
}
}
/**
Задание 4
**/
 let names = ["Вася", "Зина", "Катя", "Петя", "Вова"],
      results=[80, 77, 88, 95, 57];
     
  for (i = 0; i < 5; i++){
      mark = results[i];
      name = names[i];
      switch (true){
          case mark > 90:
              alert(`${name}, оценка: 5`);
              break;
          case mark > 80 && mark <= 90:
              alert(`${name}, оценка: 4`);
              break;
          case mark> 70 && mark <= 80:
              alert(`${name}, оценка: 3`);
              break;
          case mark <= 70:
              alert(`${name}, оценка: 2`);
              break;
        
      }    
  }
/**
Задание 5
**/
for (i = 1; i<= 100; i++){
  if (i % 3 == 0 && i % 5 == 0){
      console.log('FizzBuzz');
  } else if (i % 5 == 0){
      console.log('Buzz');
  } else if (i % 3 == 0){
      console.log('Fizz');
  } else {
      console.log("условие не выполняется" ,i);
  }
}
/**
Задание 6  вначале для обычного треугольника -нашел это решение на просторах интернета . второе решение для прямоугольного треугольника
**/
let i = 0,
    j = 0;
    max = 15;
    space ="",
    star = "";

while (i < max) {
    space = "";
    star = "";
    for (j = 0; j < max - i; j++) space += " ";
    for (j = 0; j < 2 * i + 1; j++) star += "*";
    console.log(space + star);
    i++;
}
  

/**
 Задание 7
 **/
let sum1=0,
    sum2=0;
    for (i = 0; i <= 1000; i++){
      if (i % 4 === 0){
       sum1 = sum1 + i;
       console.log(sum1);
      }
      else if (i % 3 === 0){
        sum2 = sum2 + i;
        console.log(sum2);
       }
  }
  /**
Задание 8
**/
 let a = prompt('Введите число a',' '),
     b = prompt('Введите число b',' ');
     while (a!=0 && b!=0)
      if(a>b){
      a = a%b;
      
      }
      else  {
      b= b%a;
      alert(a + b);
   }
   /**
   Задание 9  . не понял по какому принципу или признаку сортировать
    **/
  let w = prompt('Число w: ',''),
      y = prompt('Число y: ',''),
      z = prompt('Число z: ','');
  

 
      

   