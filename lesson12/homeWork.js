/**
 * Решить задания
/* https://learn.javascript.ru/task/async-from-regular */




/* https://learn.javascript.ru/task/rewrite-async */

/* http://new.code.mu/ru/javascript/book/promise/resolve-reject/ */
/* let getRandomNumber = function  */

/**
 * Задание со зведочкой
 *
 * Переписать дз к уроку 11 используя async/await вместо промисов
 *
 */


let user = {
    name: "Andrue",
    secondName: "Pupkin",
    email: "mail.@mail.ru",
 
    sayHello() {
 console.log(`Hello, my name is ${this.getFullName()}`);
    },
    
    setName(name) {
    this.name = name;
    },
    
    getFullName() {
      return `${this.name} ${this.secondName}`;
    }
 };
 
 user.sayHello();
 user.setName('Antony');
 user.sayHello();


 function User(name,secondName,email) {
    this.name = name;
    this.secondName = secondName;
    this.email = email;
    
    this.sayHello = function() {
  console.log(`Hello, my name is ${this.getFullName()}`);
     }
     
     this.setName = function(name) {
     this.name = name;
     }
     
     this.getFullName = function() {
       return `${this.name} ${this.secondName}`;
     }
  }
  
  let vasya = new User('Vasia', 'Dupkin', 'tetet@google.com');
  let maria = new User('Maria', 'Dupkin', 'tetet2@google.com');
  
  
  vasya.sayHello();