
let allAsteroids = []
async function astroidLogic(track) {
    const level_1 = document.querySelector(".level-1-page")

    const astroid = document.createElement('img')
    allAsteroids.push(astroid)
    astroid.style.width = '75px'
    astroid.style.position = 'absolute'
    astroid.style.left = '0px'
    astroid.style.top = '200px'
    astroid.src = `./assets/Astroid.gif`
    level_1.append(astroid)
    let direction = null
    let speed = .42
    function sleep(duration) {
        return new Promise(function (resolve) {
            setTimeout(resolve, duration)
        })
    }


    setInterval(function () {
        const left = parseFloat(astroid.style.left)
        const top = parseFloat(astroid.style.top)

        if (direction == 'right') {
            astroid.style.left = `${left + speed}px`
        }

        if (direction == 'left') {
            astroid.style.left = `${left - speed}px`
        }

        if (direction == 'up') {
            astroid.style.top = `${top - speed}px`
        }

        if (direction == 'down') {
            astroid.style.top = `${top + speed}px`
        }
        

    }, 60 / 1000)

    let driftRight = function () {
        direction = 'right'

    }
    let driftLeft = function () {
        direction = "left"
    }
    let driftDown = function () {
        direction = "down"
    }
    let driftUp = function () {
        direction = 'up'
    }


    switch(track){
        case 1: 
            while (true) {
                driftRight()
                await sleep(4000)
                driftDown()
                await sleep(4000)
                driftLeft()
                await sleep(4000)
                driftUp()
                await sleep(4000)
            }
        break;
        case 2: 
            while (true) {
                driftRight()
                await sleep(3000)
                driftDown()
                await sleep(3000)
                driftLeft()
                await sleep(3000)
                driftUp()
                await sleep(3000)
            }
        break;
        case 3: 
            while (true) {
                driftRight()
                await sleep(6000)
                driftDown()
                await sleep(2000)
                driftLeft()
                await sleep(6000)
                driftUp()
                await sleep(2000)
            }
        break;

    }
}

astroidLogic(1) // <-- use track 1

astroidLogic(2)
astroidLogic(3)
function collision(){
    console.log('an astroid was found')
}
allAsteroids.forEach(collision);





function detectCollision(objectA){
    if (objectA.x > window.innerWidth ) {
         // collision detected!
     }
}

