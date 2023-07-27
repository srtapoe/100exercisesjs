const prompt = require('prompt-sync')();

let perimetro = 0;
let opcaoSelecionada;
let ladoA, ladoB;
let lado, qtdeLados, raio;

console.log("==================================================")
console.log("===OPÇÕES DE POLIGNOS===")
console.log("[1] - POLIGNO QUALQUER")
console.log("[2] - POLIGNO REGULAR")
console.log("[3] - POLIGNO DE UMA CIRCUNFERÊNCIA")
console.log("==================================================")
opcaoSelecionada = parseInt(prompt('Qual o tipo de poligno você deseja calcular o perímetro? '));


function mostrarResultado(opcaoSelecionada) {
    if(opcaoSelecionada === 1){
        calculaPerimetroQualquer(ladoA, ladoB,);
    }else if(opcaoSelecionada === 2){
        calculaPerimetroRegular(lado, qtdeLados);
    }else if(opcaoSelecionada === 3){
        calculaPerimetroCircunferencia(raio)
    }else{
        console.log("Opção desconhecida - Até mais :)")
    }
}

function calculaPerimetroQualquer(ladoA, ladoB) {
   ladoA = parseInt(prompt("Lado A: "));
   ladoB = parseInt(prompt("Lado B: "));

    perimetro = (ladoA + ladoA) + (ladoB + ladoB);

    console.log("Perímetro do poligno qualquer é " + perimetro);
}

function calculaPerimetroRegular(lado, qtdeLados){
    lado = parseInt(prompt("Lado: "));
    qtdeLados = parseInt(prompt("Quantidade de lados: "));

    perimetro = (lado * qtdeLados);

    console.log("Perímetro do poligno regular é " + perimetro);
}

function calculaPerimetroCircunferencia(raio){
    raio = parseInt(prompt("Qual o valor do raio? "))
    perimetro = 2 * Math.PI * raio;

    console.log("Perímetro do poligno qualquer é " + perimetro.toFixed(2));
}

mostrarResultado(opcaoSelecionada);