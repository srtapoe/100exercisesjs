const prompt = require('prompt-sync')();

let pontoX1 = parseFloat(prompt("X1: "));
let pontoX2 = parseFloat(prompt("X2: "));

let pontoY1 = parseFloat(prompt("Y1: "));
let pontoY2 = parseFloat(prompt("Y2: "));

let dAbQuadratico;
let calculoXs = Math.pow((pontoX2 - pontoX1), 2);
let calculoYs = Math.pow((pontoY2 - pontoY1), 2);


function calculaDistanciaCartesiano(pontoX1, pontoX2, pontoY1, pontoY2) {
    dAbQuadratico = Math.sqrt(calculoXs + calculoYs);

    console.log("Resultado da aplicação do teorema de Pitágoras: " + dAbQuadratico);
}


calculaDistanciaCartesiano(pontoX1, pontoX2, pontoY1, pontoY2);



