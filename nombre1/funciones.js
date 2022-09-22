function fecha() {
    let fecha;
    fecha = new Date();
    let cadena = fecha.getHours() + ":" + fecha.getMinutes() + ":" + fecha.getSeconds();
    return cadena;
}

function hora() {
    let fecha;
    fecha = new Date();
    let cadena = fecha.getHours + "/" + (fecha.getMonth + 1) + "/" + fecha.getDay();
    return cadena;
}