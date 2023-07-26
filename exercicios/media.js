const prompt = require('prompt-sync')();

let qtdeNumero = parseInt(prompt('Quantos números que tirar a média: '));
console.log("Máximo 10 valores")
let totalAcumulado = 0;
let mediaFinal = 0;

const numerosParaMedia = [];


for(let i = 1; i <= qtdeNumero; i++){
    let numero = parseInt(prompt('Digite o numero posição n° ' + i + ': '));
    numerosParaMedia.push(numero);
}


function calculaMedia(numerosParaMedia) {
    numerosParaMedia.forEach(function(valor){
        totalAcumulado += valor;
    })

    mediaFinal = totalAcumulado / qtdeNumero;
    console.log("Média: " + mediaFinal);
}

calculaMedia(numerosParaMedia);