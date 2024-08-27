const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");


// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
    habilitarCopiar();
}

function btnDesencriptar(){
    const textoDesEncriptado = desencriptar(textArea.value);
    mensaje.value = textoDesEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
    habilitarCopiar();
}


function btnCopiar(){
    navigator.clipboard.writeText(mensaje.value);
    return;
}

function habilitarCopiar(){
    if (mensaje.value !== ""){
        document.getElementById('btnCopiar').removeAttribute('hidden');
        document.getElementById('btnCopiar').removeAttribute('disabled');
    } else{
        document.getElementById('btnCopiar').setAttribute("hidden", "");
        document.getElementById('btnCopiar').setAttribute("disabled", "");
        mensaje.style.backgroundImage = 'url("/imagenes/Muñeco.png")';
    }
    return;
}

function encriptar(stringEncriptada) {
    let matrizCodigo = [["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]];
    console.log(typeof(stringEncriptada));
    stringEncriptada = stringEncriptada.toLowerCase()

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptada;

}


function desencriptar(stringDesencriptada) {
    let matrizCodigo = [["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]];

    stringDesencriptada = stringDesencriptada.toLowerCase()

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDesencriptada;

}