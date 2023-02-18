/*
  Capturar 2 números e fazer as operações:
  - Soma
  - Subtração
  - Multiplicação
  - Divisão e resto
*/

let numberOne = Number(prompt("Digite o primeiro número:"))
let numberTwo = Number(prompt("Digite o segundo número:"))

const sum = numberOne + numberTwo
const sub = numberOne - numberTwo
const multi = numberOne * numberTwo
const div = numberOne / numberTwo
const rest = numberOne % numberTwo

alert(`Soma: ${sum}`)
alert(`Subtração: ${sub}`)
alert(`Multiplicação: ${multi}`)
alert(`Divisão: ${div}`)
alert(`Resto da divisão: ${rest}`)