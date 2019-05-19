document.addEventListener("DOMContentLoaded", function () {

    var tela = document.getElementById("tela");

    //Array de elementos que reciben un listener
    var listenerBtn = [];

    //teclas adicionales del teclado
    var btnResultado = document.getElementById("igual");
    var btnLimpiarPantalla = document.getElementById("limpiarPantalla");
    var btnBorrarAnterior = document.getElementById("borrarAnterior");

    listenerBtn.push(document.getElementById("punto"));

    //teclas de las operaciones
    listenerBtn.push(document.getElementById("suma"));
    listenerBtn.push(document.getElementById("resta"));
    listenerBtn.push(document.getElementById("division"));
    listenerBtn.push(document.getElementById("multiplicacion"));

    //teclas númericas de la calculadora
    listenerBtn.push(document.getElementById("num0"));
    listenerBtn.push(document.getElementById("num1"));
    listenerBtn.push(document.getElementById("num2"));
    listenerBtn.push(document.getElementById("num3"));
    listenerBtn.push(document.getElementById("num4"));
    listenerBtn.push(document.getElementById("num5"));
    listenerBtn.push(document.getElementById("num6"));
    listenerBtn.push(document.getElementById("num7"));
    listenerBtn.push(document.getElementById("num8"));
    listenerBtn.push(document.getElementById("num9"));

    //Adicionando evento del click
    for (var i = 0; i < listenerBtn.length; i++) {
        listenerBtn[i].addEventListener("click", passarValorTela);
    }

    btnResultado.onclick = function () {
        verificarResulatado();
    }

    function verificarResulatado() {
        try {
            var aux = tela.value.substring(tela.value.length - 1, tela.value.length);
            if (verificarOperador(aux)) {
                apagarAnterior();
            }

            var valorCalculado = eval(tela.value); //calcular el contenido del string
            if (valorCalculado || valorCalculado == "0") {
                tela.value = valorCalculado;
            } else {
                throw "erro";
            }
        } catch (e) {
            console.error(e);
        }
    }

    function passarValorTela() {

        if (verificarOperador(this.value)) {
            var aux = tela.value.substring(tela.value.length - 1, tela.value.length);
            //sustituir el valor del operador por el actual
            if (verificarOperador(aux)) {
                borrarAnterior();
            }
        }
        if (this.value) {
            tela.value += this.value;
        }

    }

    btnBorrarAnterior.onclick = function () {
        borrarAnterior();
    }

    //Funcion borrar caracteres de la pantalla
    function borrarAnterior() {
        if (tela.value.length > 0) {
            var aux = tela.value.substring(0, tela.value.length - 1);
            tela.value = aux;
        }
    }

    btnLimpiarPantalla.onclick = function () {
        tela.value = "";
    }

    //Funcion para verificar el operador
    function verificarOperador(valor) {
        switch (valor) {
            case "+":
                return true;
            case "-":
                return true;
            case "*":
                return true;
            case "/":
                return true;

            default:
                return false;
        }
    }

});
