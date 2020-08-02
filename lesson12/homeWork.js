/**
 * Решить задания
 * https://learn.javascript.ru/task/async-from-regular
  https://learn.javascript.ru/task/rewrite-async
  http://new.code.mu/ru/javascript/book/promise/resolve-reject/
 */

/**
 * Задание со зведочкой
 *
 * Переписать дз к уроку 11 используя async/await вместо промисов
 *
 */
//1
async function wait() {
 await new Promise(resolve => setTimeout(resolve, 1000));
 return 10;
}

function f() {
 wait().then(resolve => console.log(resolve));
}
f();
//2
async function loadJson(url) {
 response = await fetch(url);
 if (response.status == 200) {
  let value = await response.json();
  return value;
 } else {
  throw new Error(response.status);
 }
};
loadJson('https://jsonplaceholder.typicode.com/posts')
 .catch(alert);

//first 3 task сode
let promise = new Promise((resolve, reject) => {
 let timeout = Math.ceil(Math.random() * 10);
 setTimeout(() => {
  resolve('hello')
  if (timeout <= 5 && timeout >= 1) {
   resolve(timeout);
  } else {
   reject(new Error("время вышло!"));
  }
 }, timeout);

});

promise
 .then(
  result => alert("Fulfilled: " + result),
  error => alert("Rejected: " + error.message) // Rejected: время вышло!
 );

//second
let timeout = Math.ceil(Math.random() * 10);
const delay = ms => new Promise(resolve => setTimeout(resolve, ms * 1000));

async function something() {
 await delay(timeout);
 try {
  if (timeout <= 5 && timeout >= 1) {
   console.log(timeout);
   return timeout;
  } else {
   console.log(timeout);
   throw new Error("Ошибка");
  }
 } catch (e) {
  return e;
 }
}
something();