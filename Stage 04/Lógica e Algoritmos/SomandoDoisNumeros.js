/*
  Solicite 2 números, faça a soma deles
  e apresente o resultado final ao usuário
*/
alert("Vamos calcular a soma de dois números!")

let numberOne = prompt("Digite o primeiro número:")
let numberTwo = prompt("Digite o segundo número:")
let result = Number(numberOne) + Number(numberTwo)

alert(`A soma de ${numberOne} com ${numberTwo} é: ${result}`)