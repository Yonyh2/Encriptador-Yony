// Función para encriptar el texto
function encriptar() {
    const inputText = document.querySelector('.text-area').value;
    const outputText = document.querySelector('.mensaje');
    
    // Reemplazo de vocales con las secuencias especificadas
    const encriptado = inputText
        .replace(/e/igm, 'enter')
        .replace(/i/igm, 'imes')
        .replace(/a/igm, 'ai')
        .replace(/o/igm, 'ober')
        .replace(/u/igm, 'ufat');
    
    outputText.value = encriptado;
}

// Función para desencriptar el texto
function desencriptar() {
    const inputText = document.querySelector('.text-area').value;
    const outputText = document.querySelector('.mensaje');
    
    // Reemplazo inverso para recuperar las vocales originales
    const desencriptado = inputText
        .replace(/ufat/igm, 'u')
        .replace(/ober/igm, 'o')
        .replace(/ai/igm, 'a')
        .replace(/imes/igm, 'i')
        .replace(/enter/igm, 'e');
    
    outputText.value = desencriptado;
}

// Función para copiar el texto encriptado al portapapeles
function copiar() {
    const outputText = document.querySelector('.mensaje');
    outputText.select();
    document.execCommand('cut');
    alert('Texto copiado al portapapeles!');
}

// Añadir event listeners a los botones
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.btn-encriptar').addEventListener('click', encriptar);
    document.querySelector('.btn-desencriptar').addEventListener('click', desencriptar);
    document.querySelector('.btn-copiar').addEventListener('click', copiar);
});