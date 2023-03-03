/*
Consegna
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si 
colora di azzurro ed emetto un messaggio in console con il numero 
della cella cliccata.
*/


// inizializzo il contenitore degli square e il bottone che lo andrà a generare
let gridContainerEl = document.getElementById("grid-container");
let playButtonEl = document.getElementById("play-button");
let clearButtonEl = document.getElementById("clear-button");


// aggiungo funzione al click del bottone che genera la grigli in base al livello di difficoltà scelto
playButtonEl.addEventListener("click", function() {

    // inizializzo il controllo della difficoltà all'interno della funzione CLICK così da non stamparla immediatamente al lancio del programma
    let chooseDifficultInputEl = document.getElementById("choose-difficult").value;
    // inizializzo un contatore vuoto
    let cellNumber;

    // difficoltà facile
    if (chooseDifficultInputEl === "0") {

        // in facile gli square devono essere 100
        cellNumber = 100;

        // funzione bella
        howManySquare(cellNumber);

    // difficoltà normale
    } else if (chooseDifficultInputEl === "1") {

        gridContainerEl.style.width = "calc(70px * 9)";

        // in normale gli square devono essere 81
        cellNumber = 81;

        // funzione bella
        howManySquare(cellNumber);

    // difficoltà difficile
    } else if (chooseDifficultInputEl === "2") {

        gridContainerEl.style.width = "calc(70px * 7)";

        // in difficile gli square devono essere 49
        cellNumber = 49;

        // funzione bella
        howManySquare(cellNumber);

    }

    // disabilito il pulsante
    playButtonEl.disabled = true;

});


// aggiungo funzione al click del bottone che svuota la griglia
clearButtonEl.addEventListener("click", function() {

    // svuoto il contenuto in pagina
    gridContainerEl.innerHTML = "";

    // riabilito il pulsante
    playButtonEl.disabled = false;

});




// FUNCTION //

// funzione per capire quanti square generare in base alla difficoltà, e come dividere le righe.
function howManySquare(cellNumber) {

    for (let i = 0; i < cellNumber; i++) {
    
        let newSquareEl = createSquare(i + 1);


        newSquareEl.addEventListener("click", function() {

            newSquareEl.classList.toggle("light-blue");
            console.log(i + 1);
        })

        // appendiamolo al genitore
        gridContainerEl.append(newSquareEl);
    }

}


// funzione che genera un elemento, gli assegna una classe "square"
function createSquare(text) {

    // creare un elemento
    let newEl = document.createElement("div");
    // dargli una classe
    newEl.classList.add("square");

    newEl.innerText = text ;

    return newEl;

}

// /FUNCTION //