/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';
const now = new Date();
const currentTime = now.toLocaleTimeString();
const hour = now.getHours();;


// Dichiara la funzione qui.
function gMorningOrNight(name) {
    if (hour > 13 && hour < 17) {
        return "Buon pomeriggio " + name;
    }else if(hour < 13 ) {
        return "Buongiorno " + name;
    }else if (hour > 17) {
        return "Buonasera " + name;
    }

}

// Invoca la funzione qui e stampa il risultato in console
let helloString = gMorningOrNight(name);
console.log(helloString);




//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.