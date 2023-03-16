//Variáveis
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const btnOpen = document.getElementById("cookie");
const btnReturn = document.getElementById("btnReturn");

//Eventos
btnOpen.addEventListener('click', toggleScreen)
btnReturn.addEventListener('click', toggleScreen)
document.addEventListener('keydown', enterReturn)

//Funções
function toggleScreen() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}

function enterReturn(e) {
  if(e.key == 'Enter' && screen1.classList.contains("hide")) {
    toggleScreen()
  }
}
