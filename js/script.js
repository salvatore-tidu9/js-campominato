// All’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
// con difficoltà 0 => tra 1 e 100
// con difficoltà 1 => tra 1 e 80
// con difficoltà 2 => tra 1 e 50

var max;

var gameMode = prompt("Quale livello di difficoltà preferisci: Facile, Normale o Difficile?").toLowerCase();


if (gameMode == "facile") {

    max = 100;
}

else if (gameMode == "normale") {

    max = 80;
}

else if (gameMode == "difficile") {

    max = 50;
}

else if ((gameMode == "") || (gameMode != "facile") || (gameMode != "normale") || (gameMode != "difficile")) {

    alert("Attenzione ! Inserire prima un livello di difficoltà.")

    location.reload();
}


// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati

var computerNumbersList = [];

for (var i = 0; computerNumbersList.length < 16; i++) {

    var computerNumber = Math.floor(Math.random() * max) + 1;

    if (computerNumbersList.indexOf(computerNumber) == -1) {

        computerNumbersList.push(computerNumber);
    }
}

console.log(computerNumbersList);


// In seguito deve chiedere all’utente(100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.

var userNumbersList = [];

for (var i = 1; i <= 84; i++) {

    var userNumber = parseInt(prompt("Inserisci un numero da 1 a " + max));

    if (isNaN(userNumber) || (userNumber < 1) || (userNumber > max) || (userNumber == "") || (userNumber == "undefined")) {

        alert("Hai perso ! Dovevi inserire un numero compreso tra 1 e " + max);

        location.reload();

    } 

    else if (computerNumbersList.includes(userNumber)) {

        alert("Hai perso ! Il numero che hai scelto è stato già generato dal Computer.");

        location.reload();
    }

    else {

        if (userNumbersList.indexOf(userNumber) == -1) {

            userNumbersList.push(userNumber);

        }

        else if (userNumbersList.indexOf(userNumber) != -1) {

            alert("Hai perso ! L' utente non può inserire più volte lo stesso numero.");

            location.reload();
        }

    }

}

console.log(userNumber);

console.log(userNumbersList);

document.write("User Numbers: " + userNumbersList + "<br>");


// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.

document.write("Numero tentativi: " + userNumbersList.length);  

if (userNumbersList.length <= 84) {

    alert("Hai vinto");

    location.reload();
}
