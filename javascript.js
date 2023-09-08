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
    const check = /[+\-*\/]/
    if(e.target.textContent.match(check) || display.textContent.match(check)) {
        display.textContent = e.target.textContent;
        if(!display.textContent.match(check)) {
            displayValue = display.textContent;
        }
    } else {
        display.textContent += e.target.textContent;
        displayValue = display.textContent;
    }
}

//make the calc work

const numButtons = Array.from(document.querySelectorAll('.num'));

const opButtons = Array.from(document.querySelectorAll('.op.show'));
opButtons.forEach(button => button.addEventListener('click', setOperator));

const equals = document.getElementById('equals');
equals.addEventListener('click', getResult);

const clear = document.getElementById('clear');
clear.addEventListener('click', clearFunction);

function setOperator(e) {
    display.textContent = e.target.textContent;

    if(operator !== null) {
        num2 = +displayValue;
        result = operate(operator);
        num1 = result;
        operator = e.target.textContent;
        displayValue = `${result}${operator}`;
    } else {
        num1 = +displayValue;
        operator = e.target.textContent;
    }
}

function getResult() {
    num2 = +displayValue;
    result = operate(operator);
    display.textContent = result;
    displayValue = result;
}

function clearFunction() {
    num1 = null;
    num2 = null;
    operator = null;
    result = null;
    display.textContent = "";
}
