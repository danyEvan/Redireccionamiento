/*let mes = new Date().getMonth();
let diaNumero = new Date().getDate();
let diaSemana = new Date().getDay(); 
let anio = new Date().getFullYear();*/

let hora = document.getElementById("hora"),
    minuto = document.getElementById("minuto"),
    segundo = document.getElementById("segundo");


function agregaCero(valor){
    if ( valor < 10 ) {
        
        toString(valor);
        valor = "0" + valor;
        return valor;
    }else{
        return valor;
    }
    
}
function retornaSegundos(){
    let seg = new Date().getSeconds();
        seg = agregaCero(seg);
    return seg;
}
function retornaMinutos(){
    let min = new Date().getMinutes();
        min = agregaCero(min);
    return min;
}
function retornaHoras(){
    let hora = new Date().getHours();
        hora = agregaCero(hora);
    return hora;
}

setInterval(() => {
    
    hora.innerHTML = retornaHoras();
    minuto.innerHTML = retornaMinutos();
    segundo.innerHTML  = retornaSegundos();
        
    }, 1000);

