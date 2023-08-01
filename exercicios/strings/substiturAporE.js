const prompt = require('prompt-sync')();

let frase = prompt("Digite sua frase: ");


function trocarAporE(frase){
    let fraseModificada = frase.replace('a', 'e');
    console.log(fraseModificada);
}


trocarAporE(frase)