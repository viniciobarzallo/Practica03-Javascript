window.addEventListener("load", function() {
    miformulario.codigo.addEventListener("keypress", function(){ 
        return soloNumeros(event);
        }, false);
    });

    //Solo permite introducir números.
    function soloNumeros(e){
    var key = window.event ? e.which : e.keyCode;
    if (key < 48 || key > 57) {
        //Usando la definición del DOM level 2, "return" NO funciona.
        e.preventDefault();
    }
}