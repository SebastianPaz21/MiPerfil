let dia = true;
function cambiar() {
    if (dia) {
        document.body.style.background = "blue";
        document.getElementById('contenido').style.backgroundColor = "rgb(166, 216, 250)";
        document.getElementById("cambiar").innerHTML = "Dia";
        document.getElementById('encabezado').style.backgroundColor = " rgb(43, 44, 44)"; 
        document.getElementById('titulo').style.color = " white"; 
        return dia = false
    }else if(dia === false){
        document.getElementById('titulo').style.color = " black"; 
        document.body.style.background = "white";
        document.getElementById('contenido').style.backgroundColor = "white";
        document.getElementById("cambiar").innerHTML = "Noche";
        document.getElementById('encabezado').style.backgroundColor = "  rgb(101, 196, 243)"; 
        return dia = true
    }
}