shipSubmit = document.getElementById("submit_ship")
document.querySelector('.level-1-page').style.visibility = 'hidden';
shipSubmit.addEventListener("click", function(e){
    e.preventDefault()
    
    document.querySelector('.login-page').style.visibility = 'hidden';
    document.querySelector('.level-1-page').style.visibility = 'visible';

})