const task1 = document.getElementById("result");
async function getUsers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();
  showUsers(users);
}

function showUsers(users) {
  users.forEach((user) => {
    const userContainer = document.createElement("div");
    userContainer.classList.add("user-container");

    const name = document.createElement("p");
    name.innerText = user.name;

    const phone = document.createElement("p");
    phone.innerText = user.phone;

    userContainer.append(name, phone);
    task1.append(userContainer);
  });
}

getUsers();