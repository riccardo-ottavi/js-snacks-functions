/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';
const vowels = ["a" ,"e" ,"i" ,"o" ,"u"];

// Dichiara la funzione qui.
function countVowels(string) {
    let counter = 0;
    for(let i = 0; i < string.length; i++) {
        if(vowels.includes(string[i])){
            counter ++;
        }
        
    }
    return counter;
}

// Invoca la funzione qui e stampa il risultato in console
vowelsCounter = countVowels(word);
console.log(vowelsCounter);


//Risultato atteso se si passa 'javascript': 3 (a, a, i)