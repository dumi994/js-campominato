//Istuzioni:
//Il computer deve generare 16 numeri casuali tra 1 e 100.
//I numeri non possono essere duplicati.
//In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
//L’utente non può inserire più volte lo stesso numero.
//Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
//La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
//Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.



/* BONUS: (da fare solo se funziona tutto il resto)
all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
con difficoltà 0 => tra 1 e 100
con difficoltà 1 => tra 1 e 80
con difficoltà 2 => tra 1 e 50 */

function randomBombe(min, max){
    return Math.floor(Math.random()*(max - min + 1) + min);
}


var difficolta = Number(prompt('scegli livello di difficoltà [0/1/2]'))
var lista_bombe = [];
var bomba;
var num_massimo;


if(difficolta == 0){
    num_massimo = 100;
}else if (difficolta == 1){
    num_massimo = 80;
}else if ( difficolta == 2){
    num_massimo = 50;
}
var possibilita = num_massimo - 16;

while (lista_bombe.length < 16){
    numero = randomBombe (1, num_massimo);

    if(!lista_bombe.includes(numero)){
        lista_bombe.push(numero)
    }
}
console.log(lista_bombe);


var i = 0;

var lista = [];

var punteggio = 0;
do {
    var user_num = Number(prompt('inserisci un numero'));
    if (lista_bombe.includes(user_num)){
        alert('hai beccato una bomba, hai perso un arto, il tuo punteggio è :' + punteggio );
    } else if (lista.includes(user_num)){
        alert('numero già inserito');
    } else if (user_num < 1 || user_num > num_massimo ){
        alert('numero già inserito');
    } else {
        lista.push(user_num);
        punteggio = punteggio + 1
    }

}while (lista.length <= possibilita && !lista_bombe.includes(user_num));


if (lista.length == possibilita){
        alert('hai vinto la coppa del nonno')
}
console.log(lista);

