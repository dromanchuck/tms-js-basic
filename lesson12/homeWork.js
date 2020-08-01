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

/* async function wait() {
 await new Promise(resolve => setTimeout(resolve, 1000));
 return 10;
}

function f() {
 wait().then(resolve => console.log(resolve));
}
f(); */

/* async function loadJson(url) {
 response = await fetch(url);
 if (response.status == 200) {
  let value = await response.json();
  return value;
 } else {
  throw new Error(response.status);
 }
};
loadJson('https://jsonplaceholder.typicode.com/posts')
 .catch(alert); */

let getRandomNumber = () => {
 return Math.ceil(Math.random() * 10);
};