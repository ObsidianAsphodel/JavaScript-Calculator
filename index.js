let currentInput = '';
let currentOperation = '';
let previousInput = '';

function appendNumber(number){
    currentInput += number;
    document.getElementById("display").value = `${previousInput} ${currentOperation} ${currentInput}`;
}
function appendOperation(operator){
    if (currentInput === '') return;
      if (previousInput !== ''){
        calculate();
    }
    currentOperation = operator;

    previousInput = currentInput;

    currentInput = '';

    document.getElementById("display").value = `${previousInput} ${currentOperation}`;
}
function calculate(){
    if (previousInput === '' || currentInput === '') return;
    let result;
    let prev = parseFloat(previousInput);
    let current = parseFloat(currentInput);

    switch (currentOperation) {
        case '*':
            result = prev * current;
            break;
        case '/':
            if (current === 0){
                console.log("Cannot Divide By Zero");
                return;
            }
            result = prev / current;
            break;
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        default:
            return;
    }

    currentInput = result.toString();
    currentOperation = '';
    previousInput = '';
    document.getElementById("display").value = currentInput;
}
function clearDisplay(){
    currentInput = '';
    previousInput = '';
    currentOperation = '';
    document.getElementById("display").value = "";
}