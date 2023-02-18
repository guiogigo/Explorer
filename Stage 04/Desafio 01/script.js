
let numberOne = Number(prompt("Insira o primeiro número:"))
let numberTwo = Number(prompt("Insira o segundo número:"))

const sum = numberOne + numberTwo;
const sub = numberOne - numberTwo;
const div = numberOne / numberTwo;
const mult = numberOne * numberTwo;
const rest = numberOne % numberTwo;

alert('O resultado da soma é: ' + sum)
alert('O resultado da subtração é: ' + sub)
alert('O resultado da multiplicação é: ' + mult)
alert('O resultado da divsão é: ' + div)
alert('O resto da divisão é: ' + rest)

if (sum % 2 == 0) {
  alert('O resultado da soma é um número par.')
} else {
  alert('O resultado da soma é um número ímpar.')
}

if (numberOne === numberTwo) {
  alert('Os números inseridos são iguais.')
} else {
  alert('Os números inseridos são diferentes.')
}
