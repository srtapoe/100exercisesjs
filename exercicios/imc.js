const prompt = require('prompt-sync')();

let nome = prompt('Qual seu nome? ');
let peso = parseFloat(prompt('Qual seu peso? ').replace(',', '.'));
let altura = parseFloat(prompt('Qual sua altura? ').replace(',', '.'));

let imc = peso / Math.pow(altura, 2);


function verificarStatusImc(imc) {
    if(imc < 18.5){
        console.log(nome + ' seu IMC é ' + imc.toFixed(2));
        console.log('Magreza')
    }else if(imc > 18.5 && imc <= 24.9){
        console.log(nome + ' seu IMC é ' + imc.toFixed(2));
        console.log('Normal')
    }else if(imc > 24.9 && imc <= 29.9){
        console.log(nome + ' seu IMC é ' + imc.toFixed(2));
        console.log('Sobrepeso')
    }else if(imc > 29.9 && imc <= 39.9){
        console.log(nome + ' seu IMC é ' + imc.toFixed(2));
        console.log('Obesidade')
    }else{
        console.log(nome + ' seu IMC é ' + imc.toFixed(2));
        console.log('Obesidade Grave')
    }
}

verificarStatusImc(imc);