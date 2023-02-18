/**
  Dada uma lista de pacientes, descubra o IMC de cada paciente e imprima

  "Paciente X possui o IMC de: Y"

  Onde X é o nome do paciente e Y é o IMC desse paciente

  Crie uma função para fazer o cálculo de IMC: Peso / Altura²
 */

const pacients = [
  {
    name: "Guilherme",
    age: 17,
    weight: 65,
    height: 1.71,
  },
  {
    name: "Marcelo",
    age: 25,
    weight: 100,
    height: 1.90,
  },
  {
    name: "Ricardo",
    age: 40,
    weight: 97,
    height: 1.82,
  },
]

function pacientIMC(name, weight, height) {
  let result = (weight / (height ** 2)).toFixed(2)
  alert(`O paciente ${name} possui o IMC de: ${result}`)
}

for (let pacient of pacients) {
  pacientIMC(pacient.name, pacient.weight, pacient.height)
}