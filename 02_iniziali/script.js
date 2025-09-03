/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
function firstLetterCreate(array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        let str = array[i];
        newArray.push(str.substr(0,1));
    }
    return newArray;
}

// Invoca la funzione qui e stampa il risultato in console
let firstLetterArray = firstLetterCreate(names);
console.log(firstLetterArray);

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]