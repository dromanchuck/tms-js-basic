const containerUsersTask1 = document.getElementById('result')

async function getUsers(url) {
  let response = await fetch(url)
  let usersData = await response.json()

  let createUserList = await usersData.forEach((elem) => {
    containerUsersTask1.append(`Name: ${elem.name}, phone: ${elem.phone}; `)
  })
  return createUserList
}

getUsers('https://jsonplaceholder.typicode.com/users')
