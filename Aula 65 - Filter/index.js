// Filter -> Sempre retorna um array, com a mesma quantidade de elementos ou menos

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

// function callbackFilter(valor, indice, array) {
//     return valor > 10
// }

// const maioresQue10 = numeros.filter(callbackFilter)


// Retorne os números maiores que 10
const maioresQue10 = numeros.filter(numero => numero > 10)
console.log(maioresQue10)


// Retorne as pessoas que tem o nome com 5 letras ou mais (reduzir)
// Retorne as pessoas com mais de 50 anos
// Retorne as pessoas cujo nome termina com a
const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 },
];
const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length >= 5)
console.log(pessoasComNomeGrande)

const pessoasComMaisdeCinquentaAnos = pessoas.filter(obj => obj.idade > 50)
console.log(pessoasComMaisdeCinquentaAnos)

const pessoasNomeTerminaA = pessoas.filter(obj => obj.nome.toLocaleLowerCase().endsWith('a'))
console.log(pessoasNomeTerminaA)

