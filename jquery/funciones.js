let x = $(document);
x.ready(inicializarEventos);

function inicializarEventos() {
    let x = $("tr");
    x.click(presionClick);
}

function presionClick() {
    let x = $(this);
    x.css("background-color", "#0000ff")
}