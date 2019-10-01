shipSubmit = document.getElementById("submit_ship")
document.body.style.backgroundImage = `url(./assets/galaxy.jpg)`;
document.querySelector('.level-1-page').style.visibility = 'hidden';
shipSubmit.addEventListener("click", function(e){
    e.preventDefault()
    
    document.querySelector('.login-page').style.visibility = 'hidden';
    document.querySelector('.level-1-page').style.visibility = 'visible';

})
const moveableShip = createShip('red')

document.addEventListener('keydown', function(e){
    if(e.repeat == false){
        if(e.key == "ArrowLeft"){
            moveableShip.flyLeft()
        }
        if(e.key == "ArrowRight"){
            moveableShip.flyRight()
        }
        if(e.key == "ArrowUp"){
            moveableShip.flyUp()
        }
        if(e.key == "ArrowDown"){
            moveableShip.flyDown()
        }
    }
})

document.addEventListener('keyup', function(){
    moveableShip.stop()
})




function sleep(duration){
    return new Promise(function(resolve){
        setTimeout(resolve, duration)
    })
}