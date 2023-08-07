
var botonAgregarPalabra = document.querySelector("#boton-agregar-palabra");
var ingresarNuevaPalabra = document.querySelector("#ingresar-nueva-palabra");
var textoBoton = document.querySelector("#texto-boton");
var click = -1;
var entrada = "";
var palabrasInvalidas = [];
var palabrasValidas = [];
var listaDepalabras = [ ];
    for (var i = 0; i < listaDepalabras.length; i++){
        listaDepalabras[i] = listaDepalabras[i].toUpperCase();
    }

botonAgregarPalabra.addEventListener("click", function (event) {
    event.preventDefault();
    inputInvisible.blur();

    click *= (-1);
    if (click > 0) {
        entrada = "";
        
    
    } else {
        entrada = captureInput();
        if (!validarEntrada(entrada)) { //Valida que la palabras ingresadas cumplan con los requisitos
            agregarPalabra(entrada, listaDepalabras);
            ingresarNuevaPalabra.value = "";
           

        } else {
            click = 1;
            errorEntrada();


        }
    }
});
ingresarNuevaPalabra.addEventListener("click", function (event) {
    event.preventDefault();
    inputInvisible.blur();
});

function captureInput() {
    return (document.querySelector("#ingresar-nueva-palabra").value.toUpperCase());
}

function validarEntrada(entradas) {
    var palabraInvalida = false;
    if (entrada.length != 0) {
        entrada = entradas.split(" ");
        for (var i = 0; i < entrada.length; i++) {
            if (entrada[i].length < 3 || entrada[i] > 15) {
                palabraInvalida = true;
                break;
            } else {
                for (var j = 0; j < entrada[i].length; j++) {
                    if ((entrada[i].charCodeAt(j) < 65 || entrada[i].charCodeAt(j) > 90) && entrada[i].charCodeAt(j) != 209) {
                        palabraInvalida = true;
                        break;
                    }
                }
            }
        }
    }
    return palabraInvalida;
}

//verificar que la palabra ingresada no esté repetida
function agregarPalabra(entrada, listaDepalabras) {
    if (entrada.length != 0) {
        entrada.forEach(function (palabra) {
            if (!contiene(palabra, listaDepalabras)) {
                listaDepalabras.push(palabra);
            }
        });
    }
}
