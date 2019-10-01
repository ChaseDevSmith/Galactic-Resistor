function createCharacter(color, x, y, name){
  
    const character = document.createElement('div')
    const image = document.createElement('img')
    const p = document.createElement('p')
    p.append(name)
    character.append(image, p)
    character.style.width = '75px'
    character.style.position = 'absolute'
    character.style.left = `${x}px`
    character.style.top = `${y}px`
    image.style.width = '100%'
    image.src = `./assets/${color}_spaceship.png`

    let direction = null
    let speed = 0.5

    return {
        body: character

        // stop: function(){
        //     image.src = `${ASSET_ROOT}/static.gif`
        //     direction = null
        // },

        // walkDown: function(duration){
        //     image.src = `${ASSET_ROOT}/walkdown.gif`
        //     direction = 'down'
        //     return new Promise(function(resolve){
        //         setTimeout(resolve, duration)
        //     })
        // },

        // walkUp: function(duration){
        //     image.src = `${ASSET_ROOT}/walkup.gif`
        //     direction = 'up'
        //     return new Promise(function(resolve){
        //         setTimeout(resolve, duration)
        //     })
        // },

        // walkLeft: function(duration){
        //     image.src = `${ASSET_ROOT}/walkleft.gif`
        //     direction = 'left'
        //     return new Promise(function(resolve){
        //         setTimeout(resolve, duration)
        //     })
        // },

        // walkRight: function(duration){
        //     image.src = `${ASSET_ROOT}/walkright.gif`
        //     direction = 'right'
        //     return new Promise(function(resolve){
        //         setTimeout(resolve, duration)
        //     })
        // }
    }
}