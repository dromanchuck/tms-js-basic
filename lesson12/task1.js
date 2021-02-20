const container = document.querySelector('#result');

async function request() {
   const response = await fetch('https://jsonplaceholder.typicode.com/users');
   const data = await response.json();
   data.map((user) => {
      let p = document.createElement('p');
      p.innerText = `name: ${user.name}, phone: ${user.phone}`;    
      container.append(p);
   })
}

request()