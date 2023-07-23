const prompt = require('prompt-sync')();

let numero1 = parseInt(prompt('Digite o primeiro número: '));
let numero2 = parseInt(prompt('Digite o segundo número: '));
let operacaoSelecionada = 0;
console.log("==================================================")

function mostrarMenu(operacaoSelecionada) {
   console.log("===OPÇÕES DE OPERAÇÕES===")
    console.log("[1] - Adição")
    console.log("[2] - Subratração")
    console.log("[3] - Multiplicação")
    console.log("[4] - Divisão")  
    operacaoSelecionada = parseInt(prompt('Qual operação desejada?  '));
}


mostrarMenu(operacaoSelecionada)