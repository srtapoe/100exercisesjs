const prompt = require('prompt-sync')();

let valorA = parseInt(prompt("Valor a: "));
let valorB = parseInt(prompt("Valor b: "));
let valorC = parseInt(prompt("Valor c: "));


let delta;
let xLinhaUm, xLinhadois;

function calculaEquacaoSegundoGrau(valorA, valorB, valorC) {
    delta = Math.pow(valorB, 2) - 4 * valorA * valorC;

    if(delta >= 0){
        xLinhaUm = (-valorB + Math.sqrt(delta)) / (2 * valorA);
        xLinhadois = (-valorB - Math.sqrt(delta)) / (2 * valorA);        
        console.log("xLinhaUm: " + xLinhaUm
        + "\n" +  "xLinhadois: " + xLinhadois);
    }else{
        console.log("A equação não possui raízes!")
    }

    console.log("Delta = " + delta)
}

calculaEquacaoSegundoGrau(valorA, valorB, valorC);