setInterval(setClock, 1000)

let hourHand = document.querySelector('[hrs]')
let minuteHand = document.querySelector('[min]')
let secondHand = document.querySelector('[sec]')

function setClock() {
  let currentDate = new Date()
  let secondsRatio = currentDate.getSeconds() / 60
  let minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
  let hoursRatio = (minutesRatio + currentDate.getHours()) / 12


  function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360)
  }
  setRotation(secondHand, secondsRatio)
  setRotation(minuteHand, minutesRatio)
  setRotation(hourHand, hoursRatio)  
}

