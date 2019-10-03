function createShip(color){
    const ASSET_ROOT = `./assets/${color}-ship`
    const level_1 = document.querySelector(".level-1-page")
    const ship = document.createElement('img')
    ship.style.width = '75px'
    ship.style.position = 'absolute'
    ship.style.left = '100px'
    ship.style.top = '150px'
    ship.src = `${ASSET_ROOT}/static.gif`
    level_1.append(ship)
   let last_direction = null
   let ship_point = null
    
    let direction = null
    let speed = 0.5
    function someFunction(){
        ship.style.left = '100px'
        ship.style.top = '150px'
        direction = null
        ship.src = `${ASSET_ROOT}/static.gif`

    }

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
        
        if(ship.x > window.innerWidth ){
               alert('GAME OVER')
            console.log("outOfBoundsX")
            someFunction()
         
        }
        if(ship.y > window.innerHeight){
               alert('GAME OVER')
            console.log("outOfBoundsY")
            someFunction()

           
        }
        if(ship.y < 0 ){
               alert('GAME OVER')
            console.log("outOfBoundsY")
            someFunction()

        
        }
        if(ship.x < 0 ){
               alert('GAME OVER')
            console.log("outOfBoundsX")
            someFunction()

           
        }else{
            console.log("shipX:", ship.x)
            console.log("shipY:", ship.y)
        }
            
    }, 60 / 1000)

    return {

        flyRight: function(){
            ship.setAttribute("class","")
            ship.src = `${ASSET_ROOT}/flyRight.gif`
            direction = 'right'
            last_direction = direction
            ship_point = ship.src
        },

        flyLeft: function(){
            ship.setAttribute("class","")
            ship.src = `${ASSET_ROOT}/flyLeft.gif`
            direction = 'left'
            last_direction = direction
            ship_point = ship.src

        },

        flyUp: function(){
            ship.setAttribute("class","")
            ship.src = `${ASSET_ROOT}/flyUp.gif`
            direction = 'up'
            last_direction = direction
            ship_point = ship.src

        },

        flyDown: function(){
            ship.setAttribute("class","")
            ship.src = `${ASSET_ROOT}/flyDown.gif`

            direction = 'down'
            last_direction = direction
            ship_point = ship.src

        },

        stop: function(){
            ship.src = `${ASSET_ROOT}/static.gif`
            
            direction = last_direction
            console.log(direction)
            if(direction === "down"){
                ship.setAttribute("class","rotate180")
            }
            
            if(direction === "right"){
                ship.setAttribute("class","rotate90")
            }
            if(direction === "left"){
                ship.setAttribute("class","rotate270")
            }
            if(direction === "up"){
                ship.setAttribute("class","rotate360")
            }

            

        },

        setSpeed(value){
            speed = value
        }
    }
}