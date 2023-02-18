/*
  Solicitar o nome do aluno e as 3 notas do bimestre.
  Calcular a média daquele aluno.

  Se o aluno passou no bimestre, dar os parabéns.

  Se o aluno não passou no bismestre, motivar o aluno a dar o
  seu melhor na prova de recuperação.

  Em ambos os casos, mostra uma mensagem com o nome do aluno e a nota
*/

let student = prompt("Insira o seu nome:")
let firstGrade = Number(prompt("Insira sua primeira nota:"))
let secondGrade = Number(prompt("Insira sua segunda nota:"))
let thirdGrade = Number(prompt("Insira sua terceira nota:"))

const average = (firstGrade + secondGrade + thirdGrade) / 3;
let view = average.toFixed(2)

if (average >= 6) {
  alert(`Parabéns ${student}! Sua média foi de ${view}`)
} else {
  alert(`${student} estude para a prova de recuperação! Sua média foi de ${view}`)
}
