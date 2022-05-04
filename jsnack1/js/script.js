// 1. Crea due array che hanno un numero di elementi diversi.
// Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro.

let array1 = [1,2,5,7,3,5,8,56,234];
let array2 = [2,5,64,46,2];

array1.length < array2.length ? padArray(array1,array2.length) : padArray(array2,array1.length);

function padArray(arrayToPad,lengthToReach) {
    while (arrayToPad.length < lengthToReach) {
        arrayToPad.push('pad');
    }
}