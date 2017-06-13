
var navi = document.getElementById("navegadorId");
window.addEventListener("scroll", function(){
    
    if (document.body.scrollTop > 80) {
        navi.classList.add('cambiaNav');
    } else {
        navi.classList.remove('cambiaNav');
    }
});

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

		if(nombre.value.charAt(0) == nombre.value.charAt(0).toUpperCase() && nombre.value != ""
			&& email.value.indexOf("@") != -1 && mensaje.value != ""){
			nombre.value = "";
			email.value = "";
			mensaje.value = "";
		}

});

