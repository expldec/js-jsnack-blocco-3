// 3. Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
//Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti.

let squadre = [
    {
        nome: 'Genoa',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'Empoli',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'Frosinone',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'Reggina',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'Palermo',
        puntiFatti: 0,
        falliSubiti: 0
    }
]

squadre.forEach(squadra => {
    squadra.puntiFatti = generateRand();
    squadra.falliSubiti = generateRand();
})

console.log(squadre);

function generateRand() {
    return Math.floor(Math.random() * 100) + 1;
}