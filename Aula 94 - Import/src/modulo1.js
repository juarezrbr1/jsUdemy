export const nome = 'Juarez';
export const sobrenome = 'Ribeiro';
export const idade = 30;

export function soma(x, y) {
    return x + y;
}

export default class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}