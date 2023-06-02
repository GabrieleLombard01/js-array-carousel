**Carosello Mono Array**
<br>
Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato. Potete anche usare immagini diverse e variare leggermente lo stile, l'importante è la logica!
<br>

**MILESTONE 1**<br>
Per prima cosa, creiamo il markup statico: costruiamo il container e inseriamo un'immagine grande al centro: avremo così la struttura base e gli stili pronti per poterci poi concentrare solamente sull'aspetto logico.

**MILESTONE 2**<br>
Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell'array fornito e un semplice ciclo for che concatena un template literal.
Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile.
Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript.

**MILESTONE 3**<br>
Al click dell'utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.

**BONUS 1**<br>
Aggiungere il ciclo infinito del carosello. Ovvero se è attiva la prima immagine e l'utente clicca la freccia per andare all’immagine precedente, dovrà comparre l'ultima e viceversa!

**BONUS 2**<br>
Aggiungere la visualizzazione di tutte le thumbnails in basso o sulla destra dell’immagine grande attiva, (usate lo screen in allegato come ispirazione). Tutte le miniature avranno un layer di opacità scura, tranne quella corrispondente all’immagine attiva, che invece avrà un bordo colorato.
Al click delle frecce, oltre al cambio di immagine attiva, gestire il cambio di miniatura attiva.
<hr>

**OPERAZIONI INIZIALI:**
- Recupero prev e next
- RECUPERIAMO TUTTE LE IMMAGINI
- Preparo la gestione dell'indice dell'immagine
- Impostiamo la prima immagine come quella attiva (di partenza)

**LOGICA DINAMICA:**
- Metto in ascolto il next
	- Se sono all'ultima immagine interrompo la funzione
	- Rimuovo la classe active dell'immagine corrispondente al currentIndex
	- Incremento il current index
	- Aggiungo la classe active all'immagine corrispondente al nuovo currentIndex

- Metto in ascolto il prev
	- Se sono all'ultima immagine interrompo la funzione
	- Rimuovo la classe active dell'immagine corrispondente al currentIndex
	- Incremento il current index
	- Controllo se il currentIndex è uguale a 0

<hr>