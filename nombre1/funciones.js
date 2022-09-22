function fecha() {
    let fecha;
    fecha = new Date();
    let cadena = fecha.getDate() + "/" + fecha.getMonth() + "/" + fecha.getFullYear();
    return cadena;
}

function hora() {
    let hora;
    hora = new Date();
    let cadena = hora.getHours() + ":" + hora.getMinutes() + ":" + hora.getSeconds();
    return cadena;
}