const prompt = require('prompt-sync')();

let raio = parseFloat(prompt("Raio: "));


function calculaVolume(raio){
    let formula = (3/4) * Math.PI * Math.pow(raio, 3);
    console.log(`Volume da esfera de raio ${raio}: ${formula}`);
}

calculaVolume(raio);