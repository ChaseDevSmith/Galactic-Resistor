let form = document.querySelector('form')
let nameInput = document.getElementById('name_input')
const playerDisplay = document.getElementById('player_display')
const scoreDisplay = document.getElementById('score_display')

form.addEventListener('submit', function (e) {
    e.preventDefault()
    document.querySelector('.login-page').style.display = 'none';
    document.querySelector('.level-1-page').style.display = 'block';

    console.log("submitting")
    fetch('http://localhost:3000/make-user', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: nameInput.value
        })
    })
        .then(function (response) {
            return response.json()
        })
        .then(function (user) {
            console.log("the user is:", user)
            playerDisplay.innerText = `Player: ${user.username}`
            scoreDisplay.innerText = `Score: ${user.score}`
            //user.id //get user id to load correct page 
        })
})

// <!-- javascript find datalist tag,
//     make fetch rq to database to get all users localhost/all-users,
//     use foreach:
// make element: option tag, append option tag, 
// set value to each user name in database
// -->

const datalist = document.querySelector("datalist")

fetch('http://localhost:3000/all-users')
    .then(function (response) {
        return response.json()
    })
    .then(function (users) {
        console.log(users)
        users.forEach(function(user){
            const userOption = document.createElement('option')
            userOption.setAttribute("value", user.username)
            datalist.append(userOption)
        })
        console.log(datalist)


    })

           
