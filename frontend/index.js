
document.querySelector('.level-1-page').style.display = 'none';
document.querySelector('.game-over-page').style.display = 'none';

let moveableShip
const divLevel1 = document.querySelector(".level-1-page")

async function fetchUser(id) {
    let response = await fetch(`http://localhost:3000/users/${id}`) //interpolate id from login 
    let position = await response.json()
    moveableShip = createShip(position.x, position.y, 'red')
    console.log(moveableShip)
    divLevel1.append(moveableShip.body)

    document.addEventListener('keydown', function (e) {
        if (e.repeat == false) {
            if (e.key == "ArrowLeft") {
                moveableShip.flyLeft()
            }
            if (e.key == "ArrowRight") {
                moveableShip.flyRight()
            }
            if (e.key == "ArrowUp") {
                moveableShip.flyUp()
            }
            if (e.key == "ArrowDown") {
                moveableShip.flyDown()
            }
        }
    })
    
    document.addEventListener('keyup', function () {
        if (moveableShip) {
            moveableShip.stop()
            fetch(`http://localhost:3000/users/${id}`, {    
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "x": parseFloat(moveableShip.body.style.left),
                    "y": parseFloat(moveableShip.body.style.top)
                })
            })
        }
    })
    
    
    function sleep(duration) {
        return new Promise(function (resolve) {
            setTimeout(resolve, duration)
        })
    }
}


