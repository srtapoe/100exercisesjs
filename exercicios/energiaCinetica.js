const prompt = require('prompt-sync')();

let massa = parseFloat(prompt("Massa: "));
let velocidade = parseFloat(prompt("Velocidade: "));
let energiaCinetica;

function calculaEnergiaCinetica(massa, velocidade){
    energiaCinetica = massa * (Math.pow(velocidade,2) / 2)

    console.log("EC: " + energiaCinetica + " j");
}

calculaEnergiaCinetica(massa, velocidade);