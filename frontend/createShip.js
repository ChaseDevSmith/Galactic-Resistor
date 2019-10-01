function createShip(color){
    const ASSET_ROOT = `./assets/${color}-ship`
    const level_2 = document.querySelector(".level-1-page")
    const ship = document.createElement('img')
    ship.style.width = '75px'
    ship.style.position = 'absolute'
    ship.style.left = '0px'
    ship.style.top = '150px'
    ship.src = `${ASSET_ROOT}/static.gif`
    level_2.append(ship)

    let direction = null
    let speed = 0.5

    setInterval(function(){
        const left = parseFloat(ship.style.left)
        const top = parseFloat(ship.style.top)

        if(direction == 'right'){
            ship.style.left = `${left+speed}px`
        }

        if(direction == 'left'){
            ship.style.left = `${left-speed}px`
        }

        if(direction == 'up'){
            ship.style.top = `${top-speed}px`
        }

        if(direction == 'down'){
            ship.style.top = `${top+speed}px`
        }

    }, 60 / 1000)

    return {

        flyRight: function(){
            ship.src = `${ASSET_ROOT}/flyRight.gif`
            direction = 'right'
        },

        flyLeft: function(){
            ship.src = `${ASSET_ROOT}/flyLeft.gif`
            direction = 'left'
        },

        flyUp: function(){
            ship.src = `${ASSET_ROOT}/flyUp.gif`
            direction = 'up'
        },

        flyDown: function(){
            ship.src = `${ASSET_ROOT}/flyDown.gif`
            direction = 'down'
        },

        stop: function(){
            ship.src = `${ASSET_ROOT}/static.gif`
            direction = null
        },

        setSpeed(value){
            speed = value
        }
    }
}