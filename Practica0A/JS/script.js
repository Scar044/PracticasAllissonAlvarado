function revisar(){
    let caja = document.getElementById("mensaje");
    //obtenemos el parrafo donde ira el mensaje

    caja.innerHTML = "Respuesta correcta!";
    caja.classList.remove(incorrecto);
    caja.classList.add("correcto");
}
function revisarmal(){
    let caja = document.getElementById("mensaje");
    //obtenemos el parrafo donde ira el mensaje

    caja.innerHTML = "Respuesta incorrectas, try again";
    caja.classList.remove(correcto);
    caja.classList.add("incorrecto");
}