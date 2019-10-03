
function createShip(x, y, color){
    
    const ASSET_ROOT = `./assets/${color}-ship`
    // const divLevel1 = document.querySelector(".level-1-page")
    const ship = document.createElement('img')
    ship.style.width = '75px'
    ship.style.position = 'absolute'
    ship.style.left = `${x}px`
    ship.style.top = `${y}px`
    ship.src = `${ASSET_ROOT}/static.gif`
    // divLevel1.append(ship)

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
        
        //detectCollision()

    }, 60 / 1000)

    // this.crashWith = function(otherobj) {
    //     var myleft = this.x;
    //     var myright = this.x + (this.width);
    //     var mytop = this.y;
    //     var mybottom = this.y + (this.height);
    //     var otherleft = otherobj.x;
    //     var otherright = otherobj.x + (otherobj.width);
    //     var othertop = otherobj.y;
    //     var otherbottom = otherobj.y + (otherobj.height);
    //     var crash = true;
    //     if ((mybottom < othertop) || (mytop > otherbottom) || (myright < otherleft) || (myleft > otherright)) {
    //         crash = false;
    //     }
    //     return crash;
    // }

    return {

        body: ship,

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