// Validacion que no haya campos vacios
function validarCamposObligatorios(){
    var bandera= true
        for (var i = 0; i < document.forms[0].elements.length; i++){
            var elemento = document.forms[0].elements[i]
            if (elemento.value == '' && elemento.type == 'text' ){
                
                if (elemento.id == 'cedula'){
                    document.getElementById('mensajeCedula').innerHTML= 'La cédula esta vacia<br>'						
    			}
                elemento.style.border  = '2px red solid'

                elemento.className = 'note'
                bandera=false
            }
        }

        if (!bandera)
        {
            alert('Hay campos que están vacios, revise por favor.')
        }
        return bandera
}


// Validacion de la cedula 
function validarcedu() {

    var cad = document.getElementById("cedula").value.trim();
    var total = 0;
    var longitud = cad.length;
    var longcheck = longitud - 1;

    if (cad !== "" && longitud === 10) {
        for (i = 0; i < longcheck; i++) {
            if (i % 2 === 0) {
                var aux = cad.charAt(i) * 2;
                if (aux > 9) aux -= 9;
                total += aux;
            } else {
                total += parseInt(cad.charAt(i)); 
            }
        }

        total = total % 10 ? 10 - total % 10 : 0;
		if (cad.charAt(longitud - 1) == total) {
            //Mensaje de aviso
            document.getElementById("mensajeCedula").innerHTML = ("Su cédula es válida");

        } else {
            //Mensaje de aviso
            document.getElementById("mensajeCedula").innerHTML = ("Su cédula es invalida");
        }
    }
	if ( cad.length<10){
	    document.getElementById("mensajeCedula").innerHTML = ("La cédula debe tener 10 digitos ");
   }
}


//Validacion de letras
function soloLetras(e) {
    key = e.keyCode || e.which;
    tecla = String.fromCharCode(key).toString();
    //aqui se ponen las letras q estaran permitidas
    letras = " áéíóúabcdefghijklmnñopqrstuvwxyzÁÉÍÓÚABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
    
    //A continuacion se hara la  validación del KeyCodes, que teclas recibe el campo de texto.
    especiales = [8, 37, 39, 46, 6]; 

    tecla_especial = false
    for(var i in especiales) {
        if(key == especiales[i]) {
            tecla_especial = true;
            break;
        }
    }
    if(letras.indexOf(tecla) == -1 && !tecla_especial){
        // alert('Este campo solo admite letras');
        document.getElementById("mensajeNombre").innerHTML = ("Este campo solo admite letras");
        document.getElementById("mensajeApellido").innerHTML = ("Este campo solo admite letras");
        return false;
    
      }
}

//esta fucnion permitira validar solo datos numericos en el formulario
function validaNumericos(event) {
    if(event.charCode >= 48 && event.charCode <= 57){
        return true;
     }else{
		alert('Este campo solo admite números');
	 }
     
     return false;

}
