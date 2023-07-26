const prompt = require('prompt-sync')();

let numerosParaMediaGeometrica = [];
let totalAcumulado = 1;
let mediaGeometrica = 0;


for(let i = 1; i <= 3; i++){
    let numero = parseInt(prompt('Digite o numero posição n° ' + i + ': '));
    numerosParaMediaGeometrica.push(numero);
}

function calcularMediaGeometrica(numerosParaMediaGeometrica){
    numerosParaMediaGeometrica.forEach(function(valor){
        totalAcumulado *= valor;
    })

    mediaGeometrica = Math.pow(totalAcumulado, 1/numerosParaMediaGeometrica.length);
    console.log("Média Geometrica: " + mediaGeometrica);
}

calcularMediaGeometrica(numerosParaMediaGeometrica)