const prompt = require('prompt-sync')();

let numero1 = parseInt(prompt('Digite o primeiro número: '));
let numero2 = parseInt(prompt('Digite o segundo número: '));
let operacaoSelecionada;
let resultado;
console.log("==================================================")


   console.log("===OPÇÕES DE OPERAÇÕES===")
    console.log("[1] - Adição")
    console.log("[2] - Subratração")
    console.log("[3] - Multiplicação")
    console.log("[4] - Divisão")  
    operacaoSelecionada = parseInt(prompt('Qual operação desejada?  '));



function mostrarResultado(operacaoSelecionada, numero1, numero2, resultado) {
  
    if(operacaoSelecionada === 1){
        resultado = numero1 + numero2
    }else if(operacaoSelecionada === 2){
        resultado = numero1 - numero2
    }else if(operacaoSelecionada === 3){
        resultado = numero1 * numero2
    }else if(operacaoSelecionada === 4){
        resultado = numero1 / numero2
    }

    console.log("Resultado: " +  resultado);
}


mostrarResultado(operacaoSelecionada, numero1, numero2);
