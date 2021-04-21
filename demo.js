//Palabras que estaran en el juego
const palabras = ['hoja', 'casa', 'lago', 'caballo', 'corral'];

//nos da una palabra aleatoria
const palabra = palabras[Math.floor(Math.random() * palabras.length)]

//cambia las palabras por guiones bajos
const palabraGuiones = palabra.replace(/./g, "_ ");


//funcion anonima para calcular palabra aleatoria
document.querySelector('#evaluar').addEventListener('click', () => {

    
});