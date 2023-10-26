const prompt = require('prompt-sync')();

let word = prompt('Word: ');
console.log("==================================================")


function verifyPalindrome(word){
    var wordReverse = word.split('').reverse().join('');

    if(word === wordReverse){
        console.log(`The word ${word} is a palindrome`)
    }else{
        console.log(`The word ${word} is not a palindrome`)
    }
}


verifyPalindrome(word);