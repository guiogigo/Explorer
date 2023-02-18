/*
  Capture 10 itens para compor a lista de um supermercado.

  Após capturar os 10 itens, imprima-os, separando por vírgula
 */

let list = []

for (let i = 0; i <= 9; i++) {
  let item = prompt('Insira um item na lista:')
  list.push(item)
}

alert(list)