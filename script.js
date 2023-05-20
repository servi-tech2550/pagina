document.querySelector("button.button-menu-toggle")
.addEventListener("click", function() {
document.querySelector(".nav-links").
classList.toggle("nav-links-responsive")})

const form = document.getElementById('myForm');
form.addEventListener("submit", function(event){
    event.preventDefault();
    validateForm();
})

function validateEmail(email){
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,7}$/
    return regex.test(email)
}


function validateForm(){
    const input = document.getElementById('email');
    const inputValue = input.value;
    if (!validateEmail(inputValue)){
        alert('Por favor ingrese un correo válido.');
    } else{
        alert('Correo electronico enviado correctamente.');
    }
}



