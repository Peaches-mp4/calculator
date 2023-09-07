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
// operator = '';
// num1 = 6;
// num2 = 3;
// console.log(operate())

//functions to populate the display
const display = document.getElementById('result');
const showButtons = Array.from(document.querySelectorAll('.show'));
showButtons.forEach(button => button.addEventListener('click', displayNumbers)
);


function displayNumbers(e) {
    display.textContent = e.target.textContent;
}