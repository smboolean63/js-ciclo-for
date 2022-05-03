// Consegna:
// Scrivi un programma che stampi in console i numeri da 1 a 100.
// MILESTONE 1
// Per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
// MILESTONE 2
// Dato un container nel DOM, appendi un elemento html con il numero o la stringa corretta.
// MILESTONE 3
// Applica uno stile differente a seconda del valore dell'indice per i multipli di 3, per i multipli di 5 e per i valori che sono sia multipli di 3 che di 5.
// Prima di partire a scrivere codice poniamoci qualche domanda:
// Come faccio a sapere se un numero è divisibile per un altro? Abbiamo visto qualcosa di particolare che possiamo usare? Come creare nuovi elementi html e appenderli al container?

// Dato un container nel DOM, appendi un elemento html con il numero o la stringa corretta.
const list = document.querySelector(".list");
// 1. Scrivi un programma che stampi in console i numeri da 1 a 100.
for( let i = 1; i <= 100; i++ ) {
    const item = document.createElement("li"); // creo l'elemento <li></li>
    item.classList.add("item");  // aggiungo la classe .item
    // Per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
    // Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
    // assegnare un contenuto ad mio <li class="item"></li>
    if( i % 3 === 0 && i % 5 === 0 ) {
        console.log("fizzbuzz");
        item.innerText = "fizzbuzz";
        item.classList.add("fizzbuzz");
    } else if( i % 3 === 0 ) {
        console.log("fizz");
        item.innerText = "fizz";
        item.classList.add("fizz");
    } else if ( i % 5 === 0 ) {
        console.log("buzz");
        item.innerText = "buzz";
        item.classList.add("buzz");
    } else {
        console.log(i);
        item.innerText = i;
    }
    // inserire il <li class="item">[1, fizz, buzz, fizzbuzz]</li> nella lista
    list.append(item);
}