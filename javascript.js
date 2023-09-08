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
    const check1 = /[0+\-*\/]/
    if(e.target.textContent.match(check) || display.textContent.match(check1)) {
        display.textContent = e.target.textContent;
    } else {
        display.textContent += e.target.textContent;
        displayValue = display.textContent;
    }
}

//make the calc work
const numButtons = Array.from(document.querySelectorAll('.num'));

// numButtons.forEach(button => button.addEventListener('click', calculationTime));

const opButtons = Array.from(document.querySelectorAll('.op'));
opButtons.forEach(button => button.addEventListener('click', setOperator));

const equals = document.getElementById('equals');
equals.addEventListener('click', getResult);

const clear = document.getElementById('clear');
clear.addEventListener('click', clearFunction);

function setOperator(e) {
    display.textContent = e.target.textContent;
    if(e.target.textContent !== '=') {
        num1 = +displayValue;
        operator = e.target.textContent;
    }
}

function getResult() {
    num2 = +displayValue;
    result = operate(operator)
    display.textContent = result;
    console.log(num1, operator, num2, result);
}


// function calculationTime() {
//     if(num1 == null) {
//         num1 = +displayValue;
//     } else if(num2 == null && num1 !== null) {
//         num2 = +displayValue;
//         result = operate();
//     }
// }

function clearFunction() {
    num1 = null;
    num2 = null;
    operator = null;
    result = null;
    display.textContent = 0;
}



/* 


k
i krece niz brojeva koji ce biti num2, koji se isto cnct dok user ne klikne = ili sledeci operand;
ako klikne jednako, zavrsava se drugi num i storuje, display rezultat
ako klikne drugi operand onda se isto rezultat racuna ali se ne display vec se storuje i taj rezultat postaje onda num1 a ono sto user kuca posle novog operanda postaje num2

*/ 