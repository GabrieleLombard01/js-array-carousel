//! OPERAZIONI INIZIALI:

//JS RESET
console.log('JS OK')

//RECUPERO i bottoni
const rightBtn = document.getElementById('right-btn');
const leftBtn = document.getElementById('left-btn');

//RECUPERO le immagini
const imges = document.querySelectorAll('#carousel img');

//Preparo la gestione dell'indice delle immagini
let nowIndex = 0;

//IMG 1 - come attiva
imges[1].classList.add('active');

//! OPERAZIONI LOGICHE:

// ASCOLTO sul right-button:
rightBtn.addEventListener('click', function() {
    
});