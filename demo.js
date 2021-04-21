//función que reemplza la letra
String.prototype.replaceAt=function(index, character) { 

    return this.substr(0, index) + character + this.substr(index+character.length); 
    //uso: palabraGuiones = palabraGuiones.replaceAt(i*2, letra);
} 

//Palabras que estaran en el juego
const palabras = ['hoja', 'casa', 'lago', 'caballo', 'corral'];

//nos da una palabra aleatoria
const palabra = palabras[Math.floor(Math.random() * palabras.length)]

//cambia las palabras por guiones bajos
let palabraGuiones = palabra.replace(/./g, "_ ");

//se recibe el parrafo que pintara las letras
document.querySelector('#salida').innerHTML = palabraGuiones;

//funcion anonima para calcular palabra aleatoria
document.querySelector('#evaluar').addEventListener('click', () => {

    const letra = document.querySelector('#letra').value;

    let fallo = true;
    let contadorFallos = 0;

    for(const i in palabra){

        if(letra == palabra[i]){

            palabraGuiones = palabraGuiones.replaceAt(i*2, letra);
            fallo = false;
        }
    }

    if(fallo){

        contadorFallos++;
        document.querySelector('#ahorcado').style.backgroundPosition = -(201 * contadorFallos) + 'px 0';
    }

    document.querySelector('#salida').innerHTML = palabraGuiones;
});