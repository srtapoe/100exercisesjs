const prompt = require('prompt-sync')();

let palavraRecebida = prompt('Digite sua palavra: ');

const arrayPalavraRecebida = palavraRecebida.split('');


arrayPalavraRecebida.forEach((c, index) => {
    console.log(`Caractere n° ${index}: ${c}`)
});


