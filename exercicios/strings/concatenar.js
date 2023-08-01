const prompt = require('prompt-sync')();

let palavraUm = prompt("Primeira palavra: ");
let palavraDois = prompt("Segunda palavra: ");

function concatenarPalavras(palavraUm, palavraDois) {
    let novaPalavra = palavraUm.concat( palavraDois);

    console.log(`Resultado: ${novaPalavra}`);
}

concatenarPalavras(palavraUm, palavraDois);