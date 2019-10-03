let form = document.querySelector('form')
let nameInput = document.getElementById('name_input')
const playerDisplay = document.querySelectorAll('.player_display')
const scoreDisplay = document.querySelectorAll('.score_display')


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
            for (i = 0; i < playerDisplay.length; i++) {
                playerDisplay[i].innerText = `Player: ${user.username}`
                }
            for (i = 0; i < scoreDisplay.length; i++) {
                scoreDisplay[i].innerText = `Score: ${user.score}`
              }
            fetchUser(user.id)
            
        })
})