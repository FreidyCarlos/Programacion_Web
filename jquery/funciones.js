let x = $(document);
x.ready(inicializarEventos);

function inicializarEventos() {
    let x = $("tr");
    x.click(presionClick);

    let a = $("#boton1");
    a.click(boton);

    let b = $("#titulo1");
    b.click(ptitulo1);

    let c = $("#titulo2");
    c.click(ptitulo2);
}

function presionClick() {
    let x = $(this);
    x.css("background-color", "#0000ff")
}

function boton() {
    alert("se presiono este boton");
}

function ptitulo1() {
    let t = $("#titulo1");
    t.css("color", "#ffff00");
    t.css("background-color", "#ff0000");
    t.css("font-family", "Arial");
}

function ptitulo2() {
    let t = $("#titulo2");
    t.css("color", "blue");
    t.css("background-color", "orange");
    t.css("font-family", "TimesNewRomance");
}