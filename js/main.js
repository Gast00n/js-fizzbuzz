/**
 * 
 * 
 * 
 * FIZZ E BUZZ
 * Scrivi un programma che stampi i numeri da 1 a 100,
 * ma per i multipli di 3 stampi "Fizz" al posto del numero
 * e per i multipli di 5 stampi "Buzz". 
 * Per i numeri che sono sia multipli di 3 che di 5 stampi "FizzBuzz".
 * 
 * 
 * 
 */

// 1. Creo array di numeri

var numbers = [];
var a = 0;
var totale ='';

// 2. Popolo l'array

while ( a < 100 ) {

    var output = '';
    var valore = a + 1;
    if (( valore % 3 == 0 ) || ( valore % 5 == 0 )) {

        if ((valore % 3 == 0) && ( valore % 5 !== 0 )) {
            output = 'Fizz';

        } else if ((valore % 3 !== 0) && ( valore % 5 == 0 )) {
            output = 'Buzz';

        } else {
            output = 'FizzBuzz';
        }

        numbers.push(output);
        totale += '<li>' + output + '</li>';


    } else {
        numbers.push(valore);
        totale += '<li>' + valore + '</li>';
    }


    //3. Stampo l'output
    a++;

}

document.getElementById('fizz-buzz').innerHTML = totale;

