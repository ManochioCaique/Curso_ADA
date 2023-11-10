//OPERADORES BOOLENOS

const numero = 10

console.log(numero > 20)

console.log(numero == 10)

console.log(numero == '10')

console.log(numero === '10')


console.clear() //limpa o console

console.log(numero !== '10')

//AND
let idade = 26 
let tenhoCNH = true
const possoDirigir =  idade >= 18 && tenhoCNH === true  
console.log('Posso dirigir?', possoDirigir)

//OR

idade = 40;

const votoFacultativo = idade < 18 || idade >= 70

//NOT
const estouGostandoDoCurso = false 
console.log(!estouGostandoDoCurso)
