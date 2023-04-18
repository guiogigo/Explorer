/*
const btnPlay = document.querySelector('.play')
const btnPause = document.querySelector('.pause')
const btnStop = document.querySelector('.stop')
const btnAdd = document.querySelector('.add')
const btnDecrease = document.querySelector('.decrease')
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
let timerTimeOut

btnPlay.addEventListener('click', timerPlay)
btnPause.addEventListener('click', timerPause)
btnStop.addEventListener('click', timerReset)
btnAdd.addEventListener('click', timerAdd)
btnDecrease.addEventListener('click', timerDecrease)

function timerPlay() {
  btnPlay.classList.add('hide')
  btnPause.classList.remove('hide')
  startCountDown()
}

function timerPause() {
  hold()
  btnPlay.classList.remove('hide')
  btnPause.classList.add('hide')
}

function timerReset() {
  timerPause()
  updateDisplay()
}

function timerAdd() {
  let newMinutes = Number(minutesDisplay.textContent) + 5
  updateDisplay(newMinutes)
  updateMinutes(newMinutes)
}

function timerDecrease() {
  if(Number(minutesDisplay.textContent) > 0) {
    let newMinutes = Number(minutesDisplay.textContent) - 5
    updateDisplay(newMinutes)
    updateMinutes(newMinutes)
  }
}

let minutes = Number(minutesDisplay.textContent)

function startCountDown() {
  timerTimeOut = setTimeout(function() {
    let minutes = Number(minutesDisplay.textContent)
    let seconds = Number(secondsDisplay.textContent)
    let isFinished = minutes <= 0 && seconds <= 0

    updateDisplay(minutes, 0)

    if(isFinished) {
      timerReset()
      return
    }

    if(seconds <= 0) {
      seconds = 6
      --minutes
    }

    updateDisplay(minutes, String(seconds - 1))

    startCountDown()
  }, 1000) 
}
  
function updateDisplay(newMinutes, seconds) {
  newMinutes = newMinutes === undefined ? minutes : newMinutes;
  seconds = seconds === undefined ? 0 : seconds;
  minutesDisplay.textContent = String(newMinutes).padStart(2, "0")
  secondsDisplay.textContent = String(seconds).padStart(2, "0")
}

function hold() {
  clearTimeout(timerTimeOut)
}

function updateMinutes(newMinutes) {
  minutes = newMinutes
}

// MAIN: 
/*
import Timer from "./countDown.js"
import { sound } from "./sounds.js"
import { buttons } from "./buttons.js"

const btnPlay = document.querySelector('.play')
const btnPause = document.querySelector('.pause')
const btnStop = document.querySelector('.stop')
const btnAdd = document.querySelector('.add')
const btnDecrease = document.querySelector('.decrease')
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')

const timer = Timer(minutesDisplay, secondsDisplay, timerReset);

btnPlay.addEventListener('click', timerPlay)
btnPause.addEventListener('click', timerPause)
btnStop.addEventListener('click', timerReset)
btnAdd.addEventListener('click', timerAdd)
btnDecrease.addEventListener('click', timerDecrease)

function timerPlay() {
  btnPlay.classList.add('hide')
  btnPause.classList.remove('hide')
  timer.startCountDown()
  sound.buttonPressAudio.play()
}

function timerPause() {
  timer.hold()
  btnPlay.classList.remove('hide')
  btnPause.classList.add('hide')
  sound.buttonPressAudio.play()
}

function timerReset() {
  timerPause()
  timer.updateDisplay()
}

function timerAdd() {
  let newMinutes = Number(minutesDisplay.textContent) + 5
  timer.updateDisplay(newMinutes)
  timer.updateMinutes(newMinutes)
}

function timerDecrease() {
  if(Number(minutesDisplay.textContent) > 0) {
    let newMinutes = Number(minutesDisplay.textContent) - 5
    timer.updateDisplay(newMinutes)
    timer.updateMinutes(newMinutes)
  }
}

const btnForest = document.querySelector('#forest')

btnForest.addEventListener('click', buttons.teste()) 
*/

//Count Down
/*
import { sound } from "./sounds.js"

export default function Timer(minutesDisplay, secondsDisplay, timerReset) {

  let timerTimeOut
  let minutes = Number(minutesDisplay.textContent)

  function startCountDown() {
    timerTimeOut = setTimeout(function() {
      let minutes = Number(minutesDisplay.textContent)
      let seconds = Number(secondsDisplay.textContent)
      let isFinished = minutes <= 0 && seconds <= 0
  
      updateDisplay(minutes, 0)
  
      if(isFinished) {
        timerReset()
        sound.kitchenTimer.play()
        return
      }
  
      if(seconds <= 0) {
        seconds = 6
        --minutes
      }
  
      updateDisplay(minutes, String(seconds - 1))
  
      startCountDown()
    }, 1000) 
  }

  function updateDisplay(newMinutes, seconds) {
    newMinutes = newMinutes === undefined ? minutes : newMinutes;
    seconds = seconds === undefined ? 0 : seconds;
    minutesDisplay.textContent = String(newMinutes).padStart(2, "0")
    secondsDisplay.textContent = String(seconds).padStart(2, "0")
  }

  function hold() {
    clearTimeout(timerTimeOut)
  }

  function updateMinutes(newMinutes) {
    minutes = newMinutes
  }

  return {
    hold,
    startCountDown,
    updateDisplay,
    updateMinutes
  }
}
*/
