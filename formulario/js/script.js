// Validacion que no haya campos vacios
function validarCamposObligatorios(){
    var bandera= true
        for (var i = 0; i < document.forms[0].elements.length; i++){
            var elemento = document.forms[0].elements[i]
            if (elemento.value == '' && elemento.type == 'text' ){
                
                if (elemento.id == 'cedula'){
                    document.getElementById('mensajeCedula').innerHTML= 'La cédula esta vacia'						
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
    //Las letras que estaran permitidas
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
        alert('El campo solo puede contener letras');
        //document.getElementById("mensajeNombre").innerHTML = ("Este campo solo puede contener letras");
        return false;
      }
}

//Validacion de numeros
function validaNumericos(event) {
    if(event.charCode >= 48 && event.charCode <= 57){
        return true;
     }else{
		alert('El campo solo puede contener números');
	 }
     
     return false;
}

//Validacion de la fecha
function validarFecha(){
	
	var dtCh= "/";
	var minYear=1900;
	var maxYear=2100;
	function isInteger(s){
		var i;
		for (i = 0; i < s.length; i++){
			var c = s.charAt(i);
			if (((c < "0") || (c > "9"))) return false;
		}
		return true;
	}
	function stripCharsInBag(s, bag){
		var i;
		var returnString = "";
		for (i = 0; i < s.length; i++){
			var c = s.charAt(i);
			if (bag.indexOf(c) == -1) returnString += c;
		}
		return returnString;
	}
	function daysInFebruary (year){
		return (((year % 4 == 0) && ( (!(year % 100 == 0)) || (year % 400 == 0))) ? 29 : 28 );
	}
	function DaysArray(n) {
		for (var i = 1; i <= n; i++) {
			this[i] = 31
			if (i==4 || i==6 || i==9 || i==11) {this[i] = 30}
			if (i==2) {this[i] = 29}
		}
		return this
	}
	function isDate(dtStr){
		var daysInMonth = DaysArray(12)
		var pos1=dtStr.indexOf(dtCh)
		var pos2=dtStr.indexOf(dtCh,pos1+1)
		var strDay=dtStr.substring(0,pos1)
		var strMonth=dtStr.substring(pos1+1,pos2)
		var strYear=dtStr.substring(pos2+1)
        strYr=strYear
        
		if (strDay.charAt(0)=="0" && strDay.length>1) strDay=strDay.substring(1)
		if (strMonth.charAt(0)=="0" && strMonth.length>1) strMonth=strMonth.substring(1)
		for (var i = 1; i <= 3; i++) {
			if (strYr.charAt(0)=="0" && strYr.length>1) strYr=strYr.substring(1)
        }
        
		month=parseInt(strMonth)
		day=parseInt(strDay)
        year=parseInt(strYr)
        
		if (pos1==-1 || pos2==-1){
			return false
		}
		if (strMonth.length<1 || month<1 || month>12){
			return false
		}
		if (strDay.length<1 || day<1 || day>31 || (month==2 && day>daysInFebruary(year)) || day > daysInMonth[month]){
			return false
		}
		if (strYear.length != 4 || year==0 || year<minYear || year>maxYear){
			return false
		}
		if (dtStr.indexOf(dtCh,pos2+1)!=-1 || isInteger(stripCharsInBag(dtStr, dtCh))==false){
			return false
		}
		return true
	}
	var fecha = document.getElementById("fechaNacimiento").value.trim();
	if(isDate(fecha)){
		document.getElementById("mensajeFecha" ).innerHTML = ("La fecha de nacimiento es valida");
	}else{
		document.getElementById("mensajeFecha" ).innerHTML = ("La fecha de nacimiento es invalida");
	}
}

//Validacion de correo
function validarCorreo(){
	
	var correo = document.getElementById("correo").value.trim();
	var coValido="@est.ups.edu.ec";
	var coValido2="@ups.edu.ec";

	var corr1 = correo.substr(correo.length-15);
	var corr2 = correo.substr(correo.length-11);
	
	if(corr1 != coValido || corr2 != coValido2  ){
		document.getElementById("mensajeCorreo").innerHTML = ("La dirección de correo es invalida ");
	}
        if (corr1 ==  coValido){
                if( correo.length < 18 ){
                    document.getElementById("mensajeCorreo").innerHTML = ("La dirección de correo debe contener al menos 3 caracteres alfanumericos");
                }else{
                    document.getElementById("mensajeCorreo").innerHTML = ("La dirección de correo es valida");
                }
        }	
	
	else if (corr2 == coValido2 ){

			if( correo.length<14 ){
				document.getElementById("mensajeCorreo").innerHTML = ("La dirección de correo debe contener al menos 3 caracteres alfanumericos");
			}else{
				document.getElementById("mensajeCorreo").innerHTML = ("La dirección de correo es valida");
			}	
	}
	
	if(correo.length == 0){
	document.getElementById("mensajeCorreo").innerHTML = ("El campo de correo esta vacia");
	
		}
		if(correo.length < 10){
	document.getElementById("mensajeCorreo").innerHTML = (" ");
	
		}
}