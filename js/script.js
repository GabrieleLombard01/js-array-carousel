//JS RESET
console.log('JS OK')

//RECUPERO le immagini
const imges = document.querySelectorAll('#carousel img');

//Preparo la gestione dell'indice delle immagini
let nowIndex = 0;

//IMG 1 - come attiva
imges[1].classList.add('active');