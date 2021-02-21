// Задание 1

function task() {
  const firstTaskResult = document.createElement('div');
  div.append(firstTaskResult);

  async function showUsers() {
    let response = await fetch('https://jsonplaceholder.typicode.com/users');
    let users = await response.json();
    users.forEach((user) => {
      let p = document.createElement('p');
      p.innerText = `Name: ${user.name} --- Tel: ${user.phone}`;
      firstTaskResult.append(p);
    });
  }

  showUsers();
}
