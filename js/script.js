/*
Consegna
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si 
colora di azzurro ed emetto un messaggio in console con il numero 
della cella cliccata.
*/


let gridContainerEl = document.getElementById("grid-container");

let playButtonEl = document.getElementById("play-button")

let cellNumber = 100;

playButtonEl.addEventListener("click", function() {

    for (let i = 0; i < cellNumber; i++) {
    
        let newSquareEl = createSquare(i + 1);

        // appendiamolo al genitore
        gridContainerEl.append(newSquareEl);
    }


})












// funzione che genera un elemento, gli assegna una classe "square"
function createSquare(text) {

    // creare un elemento
    let newEl = document.createElement("div");
    // dargli una classe
    newEl.classList.add("square");

    newEl.innerText = text ;

    return newEl;

}