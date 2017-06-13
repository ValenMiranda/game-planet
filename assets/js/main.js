var nombre = document.getElementById("name");
var email = document.getElementById("email");
var mensaje = document.getElementById("message");

document.getElementById("btn-enviar").addEventListener("click", function(val){

		event.preventDefault()

		if(nombre.value.charAt(0) != nombre.value.charAt(0).toUpperCase() || nombre.value == ""){
			
			nombre.classList.add('showInput');
		}else{
			nombre.classList.remove('showInput');
		}

		if(email.value.indexOf("@") == -1){
			email.classList.add('showInput');
		}else{
			email.classList.remove('showInput');
		}

		if(mensaje.value == ""){
			mensaje.classList.add('showInput');
		}else{
			mensaje.classList.remove('showInput');
		}

});

/*
.showInput{
	background-image: url(../error.png);
	background-repeat: no-repeat;
	background-size: 20px 20px;
	background-position: right;
}
*/