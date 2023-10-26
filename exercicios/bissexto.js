const prompt = require('prompt-sync')();

let year = parseInt(prompt('Year: '));
console.log("==================================================")

function checkInput(year) {
    if(!isNaN(year) && typeof year === 'number'){
        checkYear(year);
    }else{
        console.log("Invalid input!")
    }
}


function checkYear(year) {
    if((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)){
        console.log(`Year ${year} is a leap year`);
    }else{
        console.log(`Year ${year} is not a leap year`);
    }
}


checkInput(year)