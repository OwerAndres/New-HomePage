/*cuando se hace CLICK en .button, .menu togle 'activo' */

const button = document.querySelector('.button')
const nav = document.querySelector('.menu')


button.addEventListener('click', () => {
    nav.classList.toggle('activo')
})

/*Cuando se hace click en .button, togle cambiara su valor, donde se pregunta si togle es distinto y cambiara la imagen de .icon */

let click = document.getElementById("icon");
let togle = false

button.addEventListener("click", function(){
    togle = !togle;
    if(togle){
        document.getElementById("icon").src="images/icon-menu-close.svg"
    }else{
        document.getElementById("icon").src="images/icon-menu.svg"
    }
})


