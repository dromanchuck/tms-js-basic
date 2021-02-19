/**
 * Задание 1
 * Перепишите задание 1 из урока 11 используя async/await.
 * Код разместить в отдельном файле с названием task1.js. Результат нужно разместить в div c id = result
 */

/**
 * Задание 1
 * Сделать запрос при помощи fetch на адрес https://jsonplaceholder.typicode.com/users,
 * вывести список пользователей, отобразить имя, телефон каждого пользователя.
 * Вывести в html внутри div с id = 1
 */

const container = document.querySelector('#result');
container.style = `border-bottom : 3px solid red`;

async function getUser() {
    try {
        const users = await fetch('https://jsonplaceholder.typicode.com/users');
        const result = await users.json();

    result.forEach((user) => {
      const nameOfUser = document.createElement('p');
      nameOfUser.innerText = user.name;

      const phoneOfUser = document.createElement('p');
      phoneOfUser.innerText = user.phone;
      phoneOfUser.style = `
        border-bottom : 3px solid darkgray`

      container.append(nameOfUser, phoneOfUser);
    });
  } catch (error) {
      console.log(error);
  }
};

getUser();