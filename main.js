const usersDiv = document.querySelector('.users')
const usersDivTwo = document.querySelector('.usersTwo')
const btn = document.querySelector('.btn')


btn.addEventListener('click', getUsers)

async function getUsers(){
    const response = await fetch('https://63c682584ebaa802854750c5.mockapi.io/test1')
    const data = await response.json()
    console.log(data)
    // usersDiv.innerHTML = "Имя:" + " " + (data[0].name) + "   " + `<br>` + "id: " + (data[0].id)
    for (let item of data){
        let div = document.createElement('div');
        usersDiv.appendChild(div)
        div.innerHTML = item.name + "id: " + item.id
    }
}
