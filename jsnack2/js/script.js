// 2. Crea un array vuoto e chiedi all’utente un numero da inserire nell’array.
// Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando a somma degli elementi è minore di 50.
let menoDi50 = [];

while (sumArray(menoDi50) < 50) {
    let thisPrompt = '';
    do {
        thisPrompt = parseInt(prompt('inserisci un numero'));
    }
    while (isNaN(thisPrompt));
    menoDi50.push(thisPrompt);
    console.log(menoDi50, sumArray(menoDi50));
}

function sumArray(array) {
    let sum = 0;
    array.forEach(element => {
        sum += element;
    });
    return sum;
}
