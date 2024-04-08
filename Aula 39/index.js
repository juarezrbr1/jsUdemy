function random(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

const min = 1;
const max = 50;
let cont = 0;

let rand = random(min, max);

while (rand != 10) {
    cont++;
    rand = random(min, max);
    console.log(`Numero: ${rand}`);
}
console.log(`Contador: ${cont}`);