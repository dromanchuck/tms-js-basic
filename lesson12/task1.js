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


async function showUsers() {
    let response = await fetch(`https://jsonplaceholder.typicode.com/users`);
    let users = await response.json();
    let task1Block = document.createElement('div');
    task1Block.classList.add('usersInfo');
    users.forEach(user => {
        let name = user.name;
        let phone = user.phone;
        let userInfo = document.createElement('p');


        task1Block.append(userInfo);

        userInfo.innerHTML = `name: ${name}, phone: ${phone};`
    });
    divResult.append(task1Block);
}

showUsers();