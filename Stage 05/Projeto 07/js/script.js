import { Modal } from "./modal.js"
import { AlertError } from "./alert-error.js"
import { calculateIMC, notANumber} from "./utils.js"

const form = document.querySelector('form')
const inputWeight = document.getElementById('weight')
const inputHeight = document.getElementById('height')

inputHeight.oninput = () => AlertError.close()
inputWeight.oninput = () => AlertError.close()

form.onsubmit = function(event) {
  event.preventDefault()

  const weight = inputWeight.value 
  const height = inputHeight.value

  const weightOrHeightIsNotANumber = notANumber(weight) || notANumber(height)

  if(weightOrHeightIsNotANumber) {
    AlertError.open();
    return;
  }

  AlertError.close();
  
  const result = calculateIMC(weight, height)
  displayResultMessage(result)
}

function displayResultMessage(result) {
  let message = `Seu IMC é de ${result}`

  Modal.message.innerText = message
  Modal.open()
}


