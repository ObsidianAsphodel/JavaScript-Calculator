let currentInput = '';
let currentOperation = '';
let previousInput = '';

function InputToConsole () {
    let inputValue = parseInt(document.getElementById("inputField").value);
    JSON.stringify(inputValue);
    console.log(inputValue);
}
function clearDisplay(){
    currentInput = '';
    previousInput = '';
    currentOperation = '';
    document.getElementById("display").value = "";
}
function appendNumber(number){
    currentInput += number;
    document.getElementById("display").value = `${previousInput} ${currentOperation}`;
}
function appendOperation(operator){
    console.log(operator);
    document.getElementById("display").value += operator;
}
function calculate(){
    if (previousInput === '' || currentInput === '') return;
    let result;
    let prev = parseFloat(previousInput);
    let current = parseFloat(currentInput);

    switch (currentOperation) {
        case '+':
            result = prev + current;
    }
}
function KeyInput(){
    console.log(KeyboardEvent.KeyInput());
}