
function turnera() {


    let turno = 0;

    while (turno < 16) {

        //pido los datos del usuario
        let nombre = prompt("Dejanos tu nombre");
        let apellido = prompt("Y ahora tu apellido");

        //defino la espera de cada turno
        let espera = (turno) * 30;

        //devuelvo al usuario sus datos, el numero de turno y la espera estimada
        alert("Turno " + (turno + 1) + " de 16 para el Sr/a " + nombre + " " + apellido + " Con un tiempo de espera estimado de ≈" + espera + " minutos.");

        //sumo 1 al numero de turno para la siguiente iteracion.
        turno += 1;
    }
}


//Llamamos a la funcion 
turnera();

