import Timer from "./timer.js"
import Controls from "./controls.js"
import Sounds from "./sounds.js"
import Events from "./events.js"
import {  
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonSet,
  minutesDisplay,
  secondsDisplay,
} from "./elements.js"

const sound = Sounds()

const controls = Controls({
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonSet,
})

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.reset,
})

Events({controls, timer, sound})



