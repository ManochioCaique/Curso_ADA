//Funções

function saudacao() {
    console.log('Olá, seja-vinde ao nosso curso de JavaScript!')
}

saudacao()

//como enviar pâmetros para funções 

function saudacao(nome) {

    console.log(`Olá,  ${nome}! seja-vinde ao nosso curso de JavaScript!`)
}

saudacao('Caique')

//Retorno

function soma(numero1, numero2){
    return numero1 + numero2
}
const resultado = soma (10, 30)
console.log(resultado)