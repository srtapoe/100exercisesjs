const prompt = require('prompt-sync')();

//esse exercício é um candidato bom para adicionar testes unitários devido as entradas serem diversas

let hemisphere = parseInt(prompt('Which hemisphere do you live in?: '));
let month = parseInt(prompt('Which month do you are? '));
let day = parseInt(prompt('Which day do you are? '));

    if(hemisphere === 1){
        verifySeasonsNorth(month, day);
    }else if(hemisphere === 2){
        verifySeasonsSouth(month, day);
    }

function verifySeasonsNorth(month, day){
    if ((month === 12 && day >= 21) || (month === 1) || (month === 2) || (month === 3 && day <= 20)) {
        console.log( "Winter");
    } else if ((month === 3 && day >= 21) || (month === 4) || (month === 5) || (month === 6 && day <= 20)) {
        console.log("Spring");
    } else if ((month === 6 && day >= 21) || (month === 7) || (month === 8) || (month === 9 && day <= 20)) {
        console.log("Summer");
    } else if ((month === 9 && day >= 21) || (month === 10) || (month === 11) || (month === 12 && day <= 20)) {
        console.log("Autuum");
    } else {
        console.log("Invalid date");
    }
}


function verifySeasonsSouth(month, day){
    if ((month === 12 && day >= 21) || (month === 1) || (month === 2) || (month === 3 && day <= 20)) {
        console.log("Summer");
    } else if ((month === 3 && day >= 21) || (month === 4) || (month === 5) || (month === 6 && day <= 21)) {
        console.log("Autuum");
    } else if ((month === 6 && day >= 22) || (month === 7) || (month === 8) || (month === 9 && day <= 21)) {
        console.log( "Winter");
    } else if ((month === 9 && day >= 22) || (month === 10) || (month === 11) || (month === 12 && day <= 20)) {
        console.log("Spring");
    } else {
        console.log("Invalid date");
    }
}
