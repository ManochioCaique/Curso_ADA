//LAÇOS NUMÉRICOS: for

const input = require('readline-sync')

/*
const input = require('readline-sync')

const nota1 = Number(input.question('Informe a  nota 1:'))
const nota2 = Number(input.question('Informe a  nota 2:'))
const nota3 = Number(input.question('Informe a  nota 3:'))

let media = (nota1 + nota2 + nota3)/3

Acumulador

acumulador = acumulador + 10
acumulador++ //soma um unidade
console.clear()*/

for (let i = 0; i < 10; i++) {
     console.log('Repetição', i)
}


for (let i = 12; i < 8; i--) {
    console.log('Repetição', i)
}
console.clear()

let nota;
let soma = 0;
for (let i = 1; i <= 3; i++) {
    nota = Number(input.question(`Informe a nota ${i}:`))
    
    soma = soma + nota

}
console.log(`A média do aluno é ${soma / 3}`)
