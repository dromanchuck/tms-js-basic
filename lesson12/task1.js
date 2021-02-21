/**
 * Задание 1
 * Перепишите задание 1 из урока 11 используя async/await.
 * Код разместить в отдельном файле с названием task1.js. Результат нужно разместить в div c id = result
 */

let div1 = document.getElementById('task1');

async function showUsers() {
    let response = await fetch ('https://jsonplaceholder.typicode.com/users');
    let user = await response.json();

    user.forEach((person) => {
        let name = document.createElement('p');
        name.innerText = person.name;

        let phoneNumber = document.createElement('p');
        phoneNumber.innerText = person.phone;

        phoneNumber.style = `border-bottom : 1px solid black`;

        div1.append(name, phoneNumber);
    })
}

showUsers();