const screenDisplay = document.querySelector('.screen')
const buttons = document.querySelectorAll('button')
console.log(buttons)

let calculation = []
let accumulativeCalculation




function calculate(button) {

    console.log('clicked', button.textContent)

    const value = button.textContent;
    if (value === "Clear") {
        calculation = [];
        screenDisplay.textContent = ':';
    } else if (value === "=") {
        try {
            // eval ile hesaplama yapılmadan önce tüm ifadeyi birleştiriyoruz
            screenDisplay.textContent = eval(calculation.join('')) || ':';
            calculation = [screenDisplay.textContent]; // Sonucu yeniden hesaplama dizisine ekle
        } catch (e) {
            screenDisplay.textContent = "Error";
            calculation = [];
        }
    } else {
        calculation.push(value);
        screenDisplay.textContent = calculation.join('');
    }

    if (value === "√") {
        accumulativeCalculation = Math.sqrt(eval(accumulativeCalculation)).toString();
        screenDisplay.textContent = accumulativeCalculation;
        calculation = [accumulativeCalculation];
    } else if (value === "%") {
        accumulativeCalculation = (eval(accumulativeCalculation) / 100).toString();
        screenDisplay.textContent = accumulativeCalculation;
        calculation = [accumulativeCalculation];
    }

}


/* 

function calculate(button) {
    const value = button.textContent;
    if (value === "Clear") {
        calculation = [];
        screenDisplay.textContent = ':';
    } else if (value === "=") {
        try {
            // Soldan sağa işlem yapan manuel bir algoritma kullanıyoruz
            let result = leftToRightEvaluation(calculation);
            screenDisplay.textContent = result;
            calculation = [result.toString()]; // Sonucu hesaplama dizisine ekle
        } catch (e) {
            screenDisplay.textContent = "Error";
            calculation = [];
        }
    } else {
        calculation.push(value);
        screenDisplay.textContent = calculation.join('');
    }
}

// Soldan sağa işlemi yapan fonksiyon
function leftToRightEvaluation(calculationArray) {
    let result = parseFloat(calculationArray[0]);
    for (let i = 1; i < calculationArray.length; i += 2) {
        const operator = calculationArray[i];
        const nextNumber = parseFloat(calculationArray[i + 1]);
        
        if (operator === "+") {
            result += nextNumber;
        } else if (operator === "-") {
            result -= nextNumber;
        } else if (operator === "*") {
            result *= nextNumber;
        } else if (operator === "/") {
            result /= nextNumber;
        }
    }
    return result;
}


*/

buttons.forEach(button => button.addEventListener('click', () => calculate(button))) 