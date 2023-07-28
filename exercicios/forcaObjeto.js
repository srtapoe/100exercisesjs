const prompt = require('prompt-sync')();

let trabalho = parseInt(prompt("Trabalho: "));
let deslocamento = parseInt(prompt("Deslocamento: "));

const resultadoFormula = (trabalho, deslocamento) => {
            return trabalho * deslocamento;
}

console.log("Resultado: " + resultadoFormula(trabalho, deslocamento));
            