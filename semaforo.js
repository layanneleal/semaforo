const img = document.getElementById('img')
const buttons = document.getElementById('buttons')
let colorIndex = 0
let intervalId = null

const semaforo = (event) => {
  stopAutomatic()
  turnOn[event.target.id]()
  

}

const proximoIndice = () => {

/*Outra maneira de usar:
const proximoIndice = () => colorIndex = colorIndex < 2 ? ++colorIndex : 0
*/

  if (colorIndex < 2) {
    colorIndex++
  }else {
    colorIndex = 0
}
}

const mudarCor = () => {
  const colors = ['red', 'yellow', 'green']
  const color = colors [colorIndex]
  turnOn[color]() 
  proximoIndice()
}

const stopAutomatic = () => {
  clearInterval(intervalId)
}

const turnOn = {
  'red':       () => img.src = './img/semaforovermelho.png',
  'yellow':    () => img.src = './img/semaforoamarelo.png',
  'green':     () => img.src = './img/semaforoverde.png',
  'automatic': () => intervalId = setInterval(mudarCor, 1000)
}

buttons.addEventListener('click', semaforo)