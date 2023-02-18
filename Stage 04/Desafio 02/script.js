
let students = [
  {
    name: 'Guilherme',
    grade1: 10,
    grade2: 5,
    average: average(10, 5),
  },
  {
    name: 'Marcelo',
    grade1: 7,
    grade2: 9,
    average: average(7, 9),
  },
  {
    name: 'Gustavo',
    grade1: 3,
    grade2: 2,
    average: average(3, 2),
  },
  {
    name: 'Michele',
    grade1: 6,
    grade2: 6,
    average: average(6, 6),
  },
]

function average(grade1, grade2) {
  return((grade1 + grade2) / 2)
}

let situation = function(average) {
  if (average >= 7) {
    return(`Parabéns! Você foi aprovado nesse bimestre.`)
  } else {
    return(`Não foi dessa vez! Tende novamente.`)
  }
}

for (let student of students) {
  alert(`A média do aluno(a) ${student.name} é: ${student.average} \n ${situation(student.average)}`)
}
