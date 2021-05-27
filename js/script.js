// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole: il prezzo del biglietto è definito in base ai km (0.21 € al km) va applicato uno sconto del 20% per i minorenni va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).


var km = prompt('Inserisci il numero di chilometri che vuoi percorrere');
var eta = prompt('iserisci la tua età');
eta = parseInt(eta);

var prezzo = km * 0.21;

if (eta < 18) {
    prezzo = prezzo * 0.8;  //sconto 20% under 18
} else if (eta > 65){
    prezzo = prezzo * 0.6;  //sconto 40% over 65
} 

prezzo = prezzo.toFixed(2);

document.getElementById('km').innerHTML += km;
document.getElementById('eta').innerHTML += eta;
document.getElementById('prezzo').innerHTML += prezzo;


//-------------------------------------------------------------

// calcolo risparmio
var prezzoPieno = km * 0.21;
    
if (eta < 18) {
    var scU18 = prezzoPieno * 0.2;  //sconto 20% under 18
    document.getElementById('risparmio').innerHTML += scU18;
} else if (eta > 65){
    var scO65 = prezzoPieno * 0.4;  //sconto 40% over 65
    document.getElementById('risparmio').innerHTML += scO65;
} else {
    document.getElementById('risparmio').innerHTML += '0';
}


