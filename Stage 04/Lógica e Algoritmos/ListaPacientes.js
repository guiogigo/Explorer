/*
  Crie um lista de pacientes

  Cada paciente dentro da lista deverá ter:
    Nome
    Idade
    Peso
    Altura

  Escreva uma lista contendo o nome dos pacientes
*/

pacientName = [] 
pacientAge = []
pacientWeight = [] 
pacientHeight = []

const pacients = [
  {
    name: "Roberto",
    age: 20,
    weight: 70,
    height: 1.70,
  },
  {
    name: "Guilherme",
    age: 17,
    weight: 65,
    height: 1.71,
  },
  {
    name: "Michele",
    age: 8,
    weight: 50,
    height: 1.56,
  },
]

for (let pacient of pacients) {
  pacientName.push(pacient.name);
  pacientAge.push(pacient.age);
  pacientWeight.push(pacient.weight);
  pacientHeight.push(pacient.height)
}

for (let i = 0; i < pacients.length; i++) {
alert(`O paciente ${pacientName[i]} tem ${pacientAge[i]} anos, pesa ${pacientWeight[i]}Kg e tem ${pacientHeight[i]}m de altura.`)
}

