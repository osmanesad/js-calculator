const screenDisplay = document.querySelector('.screen')
const buttons = document.querySelectorAll('button')
console.log(buttons)

let calculation = []
let accumulativeCalculation

function calculate(button) {
    console.log('clicked', button.textContent)
    const value = button.textContent
    if (value === "Clear") {
        calculation = []
        screenDisplay.textContent = ':'
    } else if (value === "=") {
        console.log(accumulativeCalculation)
        screenDisplay.textContent = eval(accumulativeCalculation)
    } else {

        calculation.push(value)
        console.log(calculation)
        accumulativeCalculation = calculation.join('')
        console.log(accumulativeCalculation)
        screenDisplay.textContent = accumulativeCalculation

    }

}

buttons.forEach(button => button.addEventListener('click', () => calculate(button))) 