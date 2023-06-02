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

    //Rimuovo class active all'img con l'indice corrente
    imges[nowIndex].classList.remove('active');

    //Incremento l'indice corrente
    nowIndex++;

    //Aggiungo class active all'img con l'indice corrispondente
    imges[nowIndex].classList.add('active');
});

// ASCOLTO sul left-button:
leftBtn.addEventListener('click', function() {

    //Rimuovo class active all'img con l'indice corrente
    imges[nowIndex].classList.remove('active');

    //Decremento l'indice corrente
    nowIndex--;

    //Aggiungo class active all'img con l'indice corrispondente
    imges[nowIndex].classList.add('active');
});