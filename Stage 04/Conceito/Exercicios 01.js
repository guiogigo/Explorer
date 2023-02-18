
// Declare uma variável de nome weight
let weight

// Que tipo de dado é a variável acima?
console.log(typeof weight)

/* 
  Declare uma variável e atribua valores para cada um dos dados:
    * name: string
    * age: number (int)
    * stars: number (float)
    * isSubscribed: boolean
*/
let name = 'Guilherme'
let age = 17
let stars = 4.9
let isSubscribed = true

/*
  A variável Student abaixo é de que tipo de dado?

  Atribua a ela as mesmas propriedades e valores do exercicio anterior

  Mostra no console a seguinte mensagem:
    <name> de idade <age> pesa <weight>Kg.

*/
let student = {
  name: 'Guilherme',
  age: 17,
  stars: 4.9,
  isSubscribed: true,
  weight: 67.5
};

console.log(`${student.name} de idade ${student.age} pesa ${student.weight}`)

/*
  Declae uma variável do tipo Array, de nome Students e atribua a ela nenhum valor, ou seja, somente o Array vazio.
*/
let students = []

/*
  Reatribua valor para a variável acima, colocando dentro dela o objeto student já criado 
*/

students = [
  student
]

/*
  Coloque no console o valor da posição zero do Aray acima
*/
console.log(students[0])

/*
  Crie um novo Student e coloque na posição 1 do array acima
*/

const mary = {
  name: 'Mary',
  age: 19,
  stars: 3.5,
  isSubscribe: true,
  weight: 59,
}

students[1] = mary


