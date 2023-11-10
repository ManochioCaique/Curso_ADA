//ARRAYS - PARTE 2 - MÉTODOS DE ARRAYS
//fatiamento/slice

const arr1 = [30, 12, 45, 34, 29]
const arr2 = []
console.log(arr1.slice(0,2))
console.log(arr1.slice(2))
console.clear()
//adicionando elemento: push  | unshift 
console.log("Antes de adicionar:", arr2)

arr2.push(10, 20, 30, 40)

console.log('Depois de adicionar:', arr2)

console.log('Antes de adicionar com unshift:', arr2)

arr2.unshift(0)

console.log('Depois de adicionar com unshift:', arr2)

console.clear()

//Removendo elementos com pop e shift
console.log('Antes de de remover com pop:', arr2)

arr2.pop()

console.log('Depois de remover com pop:', arr2)

console.log('Antes de de remover com shift:', arr2)

arr2.shift()

console.log('Depois de remover com shift:', arr2)

console.clear()

//Concatenando arrys
console.log('arr1', arr1)
console.log('arr2', arr2)

console.log(arr1.concat(arr2))
console.clear()

//Buscando elementos indexof | lastIndexOf

let indeceDoElemneto34 = arr1.indexOf(34)
console.log(indeceDoElemneto34)

console.log(arr1)
console.log(arr1.includes(10))