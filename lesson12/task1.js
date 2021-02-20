async function prom() {
    let result = await fetch('https://jsonplaceholder.typicode.com/users')
    let users = await result.json()
    users = users.forEach(user => {
        let info = document.createElement('div')
        info.innerHTML = `user: ${user.name}, name: ${user.name}, phone: ${user.phone}`
        firstTaskContainer.append(info)
    })
}
prom()