var input = require(`readline-sync`)
console.log('====================')
console.log( ` Exercicio2 `)
console.log('====================')
const numero = Number(input.question("Digite um numero: "))
if(numero % 2  == 0){
    console.log(`${numero} é Par!!`)
}else{
    console.log(`${numero} é Impar!!`)
}
console.log('====================')