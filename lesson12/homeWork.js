/**
 * Решить задания
 * https://learn.javascript.ru/task/async-from-regular
  https://learn.javascript.ru/task/rewrite-async
  http://new.code.mu/ru/javascript/book/promise/resolve-reject/
 */

function loadJson(url) {
  return fetch(url).then((response) => {
    if (response.status == 200) {
      return response.json();
    } else {
      throw new Error(response.status);
    }
  });
}

async function loadJson(url) {
  let response = await fetch(url);

  if (response.status === 200) {
    return response.json();
  } else {
    throw new Error(response.status);
  }
}

loadJson("some-url.com")
  .then((response) => console.log(response))
  .catch((e) => console.log(e));

/**
 * Сделайте промис, внутри которого будет задержка setTimeout в 3
 * секунды, после которой промис должен зарезолвится (то есть выполнится успешно).
 *
 * */

let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve();
  }, 3000);
});

/**
 * Сделайте промис, внутри которого будет задержка setTimeout в 3 секунды,
 * после которой промис должен зареджектится (то есть выполнится с ошибкой).
 */

let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject();
  }, 3000);
});

/**
 * Сделайте функцию, которая будет генерировать случайные числа от 1 до 10. Сделайте так,
 * чтобы сгенерированное число было задержкой функции setTimeout в секундах. Оберните все это в промис.
 * Пусть промис выполнится успешно, если сгенерировано число от 1 до 5, и с ошибкой - если от 6 до 10.
 */

let getRandomNumber = () => {
  return Math.ceil(Math.random() * 10);
};

let promise = new Promise((resolve, reject) => {
  let randomNumber = getRandomNumber();

  setTimeout(() => {
    if (randomNumber >= 1 && randomNumber <= 5) {
      resolve(randomNumber);
    }

    if (randomNumber >= 6 && randomNumber <= 10) {
      reject(new Error("Error " + randomNumber));
    }
  }, randomNumber * 1000);
});

promise.then((response) => console.log(response)).catch((e) => console.log(e));

let showRandomNumber = async () => {
  let randomNumber = getRandomNumber();

  setTimeout(() => {
    try {
      if (randomNumber >= 1 && randomNumber <= 5) {
        console.log(randomNumber);
      }

      if (randomNumber >= 6 && randomNumber <= 10) {
        throw new Error("Error " + randomNumber);
      }
    } catch (e) {
      console.log(e);
    }
  }, randomNumber * 1000);
};

showRandomNumber()
  .then((response) => console.log(response))
  .catch((e) => console.log(e));

/**
 * Задание со зведочкой
 *
 * Переписать дз к уроку 11 используя async/await вместо промисов
 *
 */

<<<<<<< HEAD
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
=======
async function getUsers() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let users = response.json();

    users.forEach((user) => {
      console.log(user);
    });
  } catch (e) {
    console.log(e);
  }
}

getUsers();
>>>>>>> 20e734d2b64146a26d398c8fae0ad3e98e5d7461
