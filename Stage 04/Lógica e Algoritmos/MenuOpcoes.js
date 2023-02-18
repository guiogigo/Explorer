/*
  Faça um programa que tenha um menu e apresente a seguinte mensagem:

  Olá usuário! Digite o número da opções desejada

  1. Cadastrar um item na lista
  2. Mostrar itens cadastrados
  3. Sair do programa

  ---

  O programa deverá capturar o número digitado pelo usuário e mostrar os seguintes cenários:

  Caso o usuário digite 1, ele poderá cadastrar um item em uma lista
  Caso o usuário digite 2, ele poderá ver os itens cadastrados
    Se não houver nenhum item cadastrado, mostrar a mensagem:
      "Não existem itens cadastrados"
  Caso o usuário digite 3, a aplicação deverá ser encerrada

  (Funciona com If/Else ou com Swtich)
*/

let list = [];
let option;

while (true) {

option = Number(prompt(`
Olá usuário! Digite o número da opção desejada

1. Cadastrar um item na lista
2. Mostrar itens cadastrados
3. Sair do programa
`))

  if (option == 1) {
    let item = prompt("Insira o nome do item:")
    list.push(item)
  } else if (option == 2) {
    if (list[0] == undefined) {
      alert("Não existem itens cadastrados")
    } else {
      alert(list)
    }
  } else if (option == 3) {
    break
  } else {
    alert("Opção inválida, tente novamente.")
  }
}

alert("Obrigado por utilizar nosso sistema.")
