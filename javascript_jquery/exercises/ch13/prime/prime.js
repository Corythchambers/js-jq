"use strict";

const isPrimeNumber = (number) => {
    let isPrime = (number < 2) ? false: true;  // set default return value
    for (let i = 2; i < number; i++) {
        if ( number % i === 0 ) {
            isPrime = false;
            break;
        }
    }
    return isPrime;
};


const getPrimeNumbers = (number) => {
    const primeNumbers = [];
    for (let i = 1; i <= number; i++) {  
        if (isPrimeNumber(i)) {
            primeNumbers.push(i);
        }
    }
    return primeNumbers.length > 0 ? primeNumbers.join(" ") : `${number} is NOT a prime number.`;
};
 
$(document).ready( () => {
    
    $("#calculate").click( () => {
        const number = parseInt( $("#number").val() );
        if ( isNaN(number) ) {
            $("#message").text( "Please enter a number." );
        } else {
            $("#message").text( getPrimeNumbers(number) );
        }
        $("#number").focus();
        $("#number").select();
    });
    
    $("#number").focus();
});