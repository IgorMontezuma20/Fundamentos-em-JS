console.log('01)', '1' == 1) //São iguais mas de tipos diferentes, pois o == não considera o tipo.
console.log('2)', '1' === 1) //Não são iguais pois === considera o tipo.
console.log('3)', '3' != 3) // Não sã0 diferentes pois o tipo não é considereado.
console.log('4)', '3' !== 3)// São diferentes pois o tipo é considerado.

console.log('5)', '3' < 2) 
console.log('6)', '3' > 2)
console.log('7)', '3' <= 2)
console.log('8)', '3' >= 2)

const d1 = new Date(0) // Data de referência no JS. 01/01/ 1970
const d2 = new Date(0)
console.log('9)', d1 === d2)
console.log('10)', d1 == d2)