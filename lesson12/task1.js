let container = document.querySelector(`div[id = "result"]`);
document.body.style = `
background-color: #abede5;
`
container.style = `
  display: flex;
  flex-direction: column;
`
async function showUsers(user){
let result = await fetch(`https://jsonplaceholder.typicode.com/users`);
let users = await result.json();
  users = users.forEach(user => {
    let p = document.createElement('p');
    p.style = `
  color: #6c18a1;
  border-bottom: 3px #d10486 solid;
  `
    p.innerText = `UserId: ${user.id}; User Name: ${user.name}; User Phone: ${user.phone}.`
    container.append(p);
  })
}
console.log(showUsers());
