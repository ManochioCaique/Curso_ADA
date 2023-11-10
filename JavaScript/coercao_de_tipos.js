//Coerção explícita (manual)
const numero  = 10
console.log(numero, typeof numero)

const numeroEmFormatoDeString = String(numero)
console.log(numeroEmFormatoDeString, typeof numeroEmFormatoDeString)

console.log(Number('123'))

console.log(Boolean(1)) //Qualquer numero diferente de 0 é verdadeiro
console.clear()
//Coerção Implícita (Automática )
console.log(10 + '1') // Concatena quando é string com numero 

