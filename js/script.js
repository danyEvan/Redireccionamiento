
function confirmar(){
    let estado = window.confirm("¿Esta seguro que desea continuar?");
    console.log(estado);
    switch (estado) {
        case true:
            //location.href = "https://www.youtube.com/watch?v=5qap5aO4i9A";
            location.assign("reloj.html");
            break;
        case false:
            break;
        default:
            break;
    }
}

