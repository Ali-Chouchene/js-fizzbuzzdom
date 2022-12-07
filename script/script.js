/*
 Consegna:
 Scrivi un programma che stampi in console i numeri da 1 a 100, ma che
. per i multipli di 3 stampi “Fizz” al posto del numero
. per i multipli di 5 stampi “Buzz” al posto del numero.
. Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz” al posto del numero.
*/

//1 aggancio gli elementi




//2 ciclo che stampa i numeri

for (var i = 1; i <= 100; i++) {
    if (i % 15 === 0) {
        console.log("FizzBuzz");

    } else if (i % 3 === 0) {
        console.log("Fizz");

    } else if (i % 5 === 0) {
        console.log("Buzz");

    } else console.log(i);
}