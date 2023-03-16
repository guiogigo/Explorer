//Variáveis
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.getElementById('btnTry')
const btnReset = document.getElementById('btnReset')
let randomNumber = Math.round(Math.random() * 10);
let xAttempts = 1;

//Eventos
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', enterResetClick)

//Funções
function handleTryClick(event) {
  if(inputNumber.value != "" && inputNumber.value >= 0) {
    event.preventDefault()

    const inputNumber = document.getElementById('inputNumber')
    if (Number(inputNumber.value) == randomNumber) {
      toggleScreen()
      document.querySelector(".screen2 h2").innerText = `Acertou em ${xAttempts} tentativas!`
    }

    inputNumber.value = ""
    xAttempts++
  }else {
    alert("Valor inválido")
  }
}

function handleResetClick() {
  toggleScreen()
  randomNumber = Math.round(Math.random() * 10)
  xAttempts = 1
}

function enterResetClick(e) {
  if(e.key == 'Enter' && screen1.classList.contains('hide')) {
    handleResetClick()
  }
}

function toggleScreen() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}

