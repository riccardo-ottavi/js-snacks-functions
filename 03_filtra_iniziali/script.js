/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];

// Dichiara la funzione qui.
function searchFirstLetter(array, letter) {
    let newArray =[];
    for (let i= 0; i < array.length; i++) {
        let firstLetter = array[i].substr(0,1);
        if (firstLetter === letter) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}

// Invoca la funzione qui e stampa il risultato in console
let firstLetterArray = searchFirstLetter(names, "A");
console.log(firstLetterArray);

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]