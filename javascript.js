//basic math functions

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

//calc operation variables
let num1 = null;
let num2 = null;
let operator = null;
let result = null;
let displayValue = null;
//operate function

function operate() {
    
    switch(operator) {
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case '*':
            return multiply(num1, num2);
        case '/':
            return divide(num1, num2);
    }
}

//populate the display

const display = document.getElementById('display-num');
const visibleButtons = Array.from(document.querySelectorAll('.show'));
visibleButtons.forEach(button => button.addEventListener('click', displayNumbers));

function displayNumbers(e) {
    display.textContent = e.target.textContent;
    displayValue = e.target.textContent;
}

//make the calc work
const numButtons = Array.from(document.querySelectorAll('.num'));
numButtons.forEach(button => button.addEventListener('click', calculationTime));

const opButtons = Array.from(document.querySelectorAll('.op'));
opButtons.forEach(button => button.addEventListener('click', (e) => operator = e.target.textContent));

const equals = document.getElementById('equals');
equals.addEventListener('click', () => display.textContent = result);

const clear = document.getElementById('clear');
clear.addEventListener('click', clearFunction);
  

function calculationTime() {
    if(num1 == null) {
        num1 = +displayValue;
    } else if(num2 == null && num1 !== null) {
        num2 = +displayValue;
        result = operate();
        console.log(result)
    }
}

function clearFunction() {
    num1 = null;
    num2 = null;
    operator = null;
    result = null;
    display.textContent = 0;
    // console.log(num1, num2, operator, result)
}