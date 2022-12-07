/*
 Consegna:
 Scrivi un programma che stampi in console i numeri da 1 a 100, ma che
. per i multipli di 3 stampi “Fizz” al posto del numero
. per i multipli di 5 stampi “Buzz” al posto del numero.
. Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz” al posto del numero.
*/

//1 aggancio gli elementi
const containerElement = document.getElementById("container");
const btnElement = document.getElementById("btn")


//2 quando clicco il pulsante parte tutto

btnElement.addEventListener("click", function () {

    let result = `<div class="row row-cols-3 row-cols-md-7 gap-3 justify-content-center">`

    // ciclo che stampa i numeri
    for (var i = 1; i <= 100; i++) {


        if (i % (5 * 3) === 0) {
            result += `<div class="col fizzbuzz">${"FizzBuzz"}</div>`;

        } else if (i % 3 === 0) {
            result += `<div class="col fizz" >${"Fizz"}</div>`;

        } else if (i % 5 === 0) {
            result += `<div class="col buzz">${"Buzz"}</div>`;

        } else
            result += `<div class="col number">${i}</div>`;
    }

    result += "</div>"

    containerElement.innerHTML = result;


})

