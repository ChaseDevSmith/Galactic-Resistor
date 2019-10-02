let form = document.querySelector('form')
let nameInput = document.getElementById('name_input')
const playerDisplay = document.getElementById('player_display')
const scoreDisplay = document.getElementById('score_display')
let moveableShip = createShip('red');

form.addEventListener('submit', function (e) {
    e.preventDefault()

    // fetch('http://localhost:3000/all-users')    //iterate through all users to check if name entered is uniq
    // .then(function (response) {
    //     return response.json()
    // })
    // .then(function (users) {
    //     users.forEach(function (user) {
    //         user.username == nameInput.value
    //     })
    // })

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
            fetchUser(user.id)
            //user.id //get user id to load correct page 
        })
})