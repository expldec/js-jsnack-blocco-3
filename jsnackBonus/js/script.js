// **BONUS
// Crea due tag div con due id diversi. Un div avrà il testo colorato di rosso mentre l’altro di verde.
// Partendo da un array di numeri, stampiamo nell’id rosso i numeri dispari e in verde i numeri pari.

const arrayDiNumeri = [1,2,3,4,5,6,324,643,754,75,28,45,66];
const arrayPari = [];
const arrayDispari = [];


let container = document.querySelector('.container');


let redDiv = document.createElement('div');
redDiv.style.color = 'red';
let greenDiv = document.createElement('div');
greenDiv.style.color = 'green';

arrayDiNumeri.forEach(numero => {
    numero % 2 === 0 ? arrayPari.push(numero) : arrayDispari.push(numero);
})

greenDiv.textContent = arrayPari.join(', ');
redDiv.textContent = arrayDispari.join(', ');

container.append(greenDiv, redDiv)