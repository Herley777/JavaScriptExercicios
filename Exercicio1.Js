var input = require('readline-sync')
console.log('====================');
console.log(' Exercicio1.Js ');
console.log('====================')

var agora = new Date()
var anoAtual = agora.getFullYear()
var anoNascimento = Number(input.question('Digite seu ano de nascimento: '))
var idade = anoAtual - anoNascimento
var resultadoFinal = ``
console.clear()
console.log('====================');
console.log(' Exercicio1.Js ');
console.log('====================')
resultadoFinal = `Sua idade é ${idade} anos`
console.log(resultadoFinal)
console.log('====================')

