

function programa() {
    let nombre=prompt("ingrese el nombre");
    let ciudad=prompt("ingrese la ciudad");
    let edad

    do {
        edad=prompt("ingrese la edad");
        if (edad>=18) {
            document.write("Hola "+nombre+", eres bienvenido desde "+ ciudad);
            edad=0;
        }else{
            document.write("Hola "+nombre+", como eres menor de edad, no puedes acceder a este sitio.");
            edad=0;
        }

    } while (edad!=0);


}


