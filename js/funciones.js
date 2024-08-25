function encriptarTexto(){
    let texto = document.getElementById("idTextoUsuario").value;
    let validador = validarMayusculasAcentos(texto);
    if(validador==0){
        let encriptado = texto
        .replace(/e/gi, "enter" )
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");
        console.log(encriptado);
        document.getElementById(`imgMuneco`).style.display = 'none';
        document.getElementById(`divTextoNoEncontrado`).style.display = 'none';
        document.getElementById(`idTextoRespuesta`).style.display = 'inline';
        document.getElementById(`idbotonCopiar`).style.display = 'inline';
        document.getElementById('idTextoRespuesta').value = encriptado;
    }
    else{
        alert("El texto no debe tener letras mayúsculas ni acentos.");
    }
}

function desencriptarTexto(){
    let texto = document.getElementById("idTextoUsuario").value;
    let validador = validarMayusculasAcentos(texto);
    if(validador==0){
        let desencriptado = texto
            .replace(/enter/gi, "e" )
            .replace(/imes/gi, "i")
            .replace(/ai/gi, "a")
            .replace(/ober/gi, "o")
            .replace(/ufat/gi, "u");
        console.log(desencriptado);
        document.getElementById(`imgMuneco`).style.display = 'none';
        document.getElementById(`divTextoNoEncontrado`).style.display = 'none';
        document.getElementById(`idTextoRespuesta`).style.display = 'inline';
        document.getElementById(`idbotonCopiar`).style.display = 'inline';
        document.getElementById('idTextoRespuesta').value = desencriptado;
    }
   else{
    alert("El texto no debe tener letras mayúsculas ni acentos.");
}
}

function copiarTexto(){
    var copyText = document.getElementById("idTextoRespuesta");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
}

function validarMayusculasAcentos(texto){
    var letras_mayusculas = "ABCDEFGHYJKLMNÑOPQRSTUVWXYZáéíóúü";
    for(let i=0; i<texto.length; i++){
        if (letras_mayusculas.indexOf(texto.charAt(i),0)!=-1){
            return 1;
        }
    }
    return 0;    
}