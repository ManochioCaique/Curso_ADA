//ESTRUTURA DE REPETIÇÃO
const input = require('readline-sync')
const numero_sorteado = 5;

let numero = Number(input.question('Qual o numero voce escolhe?'))


if (numero === numero_sorteado) {
    console.log('Você acertou!')
} else {
    console.log('Você errou!')
}
while ( numero !== numero_sorteado) {
    console.log('Você errou o número. Tente novamente')

    numero = Number(input.question('Qual o numero voce escolhe?'))
}

console.log('Você acertou!')