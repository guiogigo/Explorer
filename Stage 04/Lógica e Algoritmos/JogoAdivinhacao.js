/*
  Apresente a mensagem ao usuário:
  "Adivinhe o número que estou pensando. Está entre 0 e 10"

  Crie uma lógica para gerar um número aleatório e verificar se o número digitado é o mesmo que o aleatório gerado pelo sistema

  Enquanto o usuário não adivinhar o número, mostrar a mensagem:
  "Erro, tente novamente:"

  Caso o usuário acerter o número, apresentar a mensagem:
  "Parabéns! Você adivinhou o número em x tentativas"

  Substitua o "x" da mensagem pelo número de tentativas
*/

alert("Adivinhe o número que estou pensando. Está entre 0 e 10")

let attempt = 1;

while (true) {
  const randomNumber = Math.round(Math.random() * 10)
  const number = Number(prompt("Adivinhe o número:"))
  const result = number == randomNumber;

  if (result) {
    alert(`Parabéns! O número que eu pensei foi ${randomNumber}. Você adivinhou o número em ${attempt} tentativas`)
    break
  } 
  else {
    "Erro, tente novamente:"
    attempt += 1;
  }
}



