// document.addEventListener("DOMContentLoaded", ()=>{
//     startGame()
    
// })//domcontentloaded





// let myGameArea = {
//     canvas : document.createElement("canvas"),
//     start : function() {
//         this.canvas.width = 1200;
//         this.canvas.height = 600;
//         this.context = this.canvas.getContext("2d");
//         document.body.append(this.canvas);
//     }
// }
// let mySpaceship
// let ctx = myGameArea.context;

// function startGame() {
//     myGameArea.start();
//     mySpaceship = new spaceship('red', 100, 100, 'Bob')
//     debugger
// }

// function spaceship(color, x, y, name) {
//     this.width = 50;
//     this.height = 50;
//     this.x = x;
//     this.y = y;    
//     let ctx = myGameArea.context;
//     console.log("ctx:",ctx, " MyGameArea", myGameArea)
//     this.img = document.createElement('img')
//     this.img.src = `./assets/${color}_spaceship.png`
//     ctx.drawImage(this.img, 0, 0)
//     // debugger
//     // ctx.fillStyle = color;
//     // ctx.fillRect(this.x, this.y, this.width, this.height);
// }


// // async function fetchCharacter(){
// //     console.log("fetching stuff")
// //     // let response = await fetch('http://localhost:3000/users/1')
// //     // let position = await response.json()
// //     user = createCharacter('red', 100, 100, 'Bob')

// //     console.log(user)
// //     let canvas = document.querySelector('canvas')
// //     document.body.append(user.body)
// //     debugger
// // }

// // fetchCharacter()