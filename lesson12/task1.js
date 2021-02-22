let UserInfo = document.querySelector('div[id=result]');

async function ShowNames() {
    try{
        let result = await fetch('https://jsonplaceholder.typicode.com/users')
        let ShowResult = await result.json();

        ShowResult.forEach((item) => {
        let name = document.createElement('p');
        let phone = document.createElement('p');

        name.innerText = 'Name:' + ' ' + item.name;
        phone.innerText = 'Phone:' + ' ' + item.phone;

        UserInfo.style = `
        display: flex;
        flex-direction: column;
        border-bottom: 1px black solid;
        `;
        
        UserInfo.append(name,phone);
        });
    
    }catch(err){
        console.log(err)
    }
}
ShowNames()