// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati
// In seguito deve chiedere all’utente(100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.





var computerNumbersList = [];

var newNumber = false;


for (var i = 1; computerNumbersList.length < 16; i++) {

    var computerNumber = Math.floor(Math.random() * 100) + 1;

    if (computerNumbersList.indexOf(computerNumber) == -1) {

        computerNumbersList.push(computerNumber);
    }
    
}

console.log(computerNumbersList);


var userNumbersList = [];


for (var i = 1; i <= 4; i++) {
    
    var userNumber = parseInt(prompt("Inserisci un numero tra 1 e 100"));

    if (isNaN(userNumber) || (userNumber == 0) || (userNumber == "") || (userNumber == "undefined")) {

        alert("Attenzione ! Devi inserire un numero compreso tra 1 e 100.")

        break;

    } 

    else if (computerNumbersList.includes(userNumber)) {

        alert("Partita terminata ! Numero già generato dal Computer.");

        break;
    }

    else {

        if (userNumbersList.indexOf(userNumber) == -1) {

            userNumbersList.push(userNumber);

        }

        else if (userNumbersList.indexOf(userNumber) != -1) {

            alert("Partita terminata !...L' utente non può inserire più volte lo stesso numero.");

            break;
        }

    }

}


console.log(userNumbersList);

document.write("User Numbers: " + userNumbersList + "<br>");

document.write("Il tuo punteggio: " + userNumbersList.length);





















































     

