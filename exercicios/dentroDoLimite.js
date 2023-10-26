const prompt = require('prompt-sync')();

let number = parseInt(prompt('Number: '));
let minimum = parseInt(prompt('Minimum: '));
let maximum = parseInt(prompt('Maximum: '));
console.log("==================================================")

function verifyNumber(number, minimum, maximum) {
    if(typeof number === 'number' && typeof minimum === 'number' && typeof maximum === 'number'){
        verifyInterval(number, minimum, maximum);
    }else{
        console.log("================================================");
        console.log("Your input should be a number");
    }
}

function verifyInterval(number, minimum, maximum){
    if(number >= minimum && number <= maximum){
        console.log("Within the range");
    }else{
        console.log("Out the range");
    }
}

verifyNumber(number, minimum, maximum);