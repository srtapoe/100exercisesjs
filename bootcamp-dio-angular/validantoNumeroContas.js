const prompt = require('prompt-sync')();

let numeroConta = prompt("Número da conta: ");

function validandoConta(numeroConta){
    if(numeroConta.length <= 6){
        const numContaArray = numeroConta.split('').map(Number);
        const sum = numContaArray.reduce((a, b) => a + b, 0);

        if(numContaArray[0] > 0 && sum <= 30){
            console.log("Numero de conta valido.");
        }else if(numContaArray[0] ===0){
            console.log("Numero de conta invalido: O primeiro digito deve ser maior que zero.");
        }else if(sum > 30){
            console.log("Numero de conta invalido: A soma dos digitos e maior que 30.");
        }

    }
}


validandoConta(numeroConta);

