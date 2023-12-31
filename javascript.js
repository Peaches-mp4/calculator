//basic math functions

function add(a, b) {
    return (a + b);
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
let lastClicked = null;

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
            if(num2 === 0) {
                return "Nice try"
            } else {
                return divide(num1, num2);
            }
    }
}

//populate the display

const display = document.getElementById('display-num');
const visibleButtons = Array.from(document.querySelectorAll('.show'));
visibleButtons.forEach(button => button.addEventListener('click', displayNumbers));

function displayNumbers(e) {

    const check = /[+\-*\/]/

    if(e.target.textContent.match(check) || display.textContent.match(check) || display.textContent == result) {
        display.textContent = e.target.textContent;
        if(!display.textContent.match(/\./)) {
        document.getElementById('dot').disabled = false;
        }
        if(!display.textContent.match(check)) {
            displayValue = display.textContent;
        }
    } else {
        display.textContent += e.target.textContent;
        displayValue = display.textContent;
    }
    if(display.textContent.match(/\./)) {
        document.getElementById('dot').disabled = true;
    }
}

//add sound effects

const allButtons = Array.from(document.querySelectorAll('.btn'));
allButtons.forEach(button => button.addEventListener('click', playSound))
const playButton = document.getElementById('play');
const pauseButton = document.getElementById('pause');
const bars = document.getElementById('bars');

playButton.addEventListener('click', () => {
    playMusic();
    makeVisible();
});
pauseButton.addEventListener('click', () => {
    pauseMusic();
    makeInvisible();
});

function playSound() {
    audio = document.getElementById('click');
    audio.currentTime = 0.43;
    audio.volume = 0.8;
    audio.play();
}

function playMusic() {
    audio = document.getElementById('soundtrack');
    audio.volume = 0.5;
    audio.play();
    audio.loop = true;
}

function pauseMusic() {
    audio = document.getElementById('soundtrack');
    audio.pause();
}

function makeVisible() {
    bars.classList.remove('invisible');
    bars.classList.add('visible');
}

function makeInvisible() {
    bars.classList.remove('visible')
    bars.classList.add('invisible');
}

//make the calc work

const numButtons = Array.from(document.querySelectorAll('.num'));
numButtons.forEach(button => button.addEventListener('click', () => lastClicked = 'number'));

const opButtons = Array.from(document.querySelectorAll('.op.show'));
opButtons.forEach(button => button.addEventListener('click', setOperator));
opButtons.forEach(button => button.addEventListener('click', () => lastClicked = 'operator'));

const equals = document.getElementById('equals');
equals.addEventListener('click', getResult);

const clear = document.getElementById('clear');
clear.addEventListener('click', clearFunction);

const del = document.getElementById('del');
del.addEventListener('click', delNumber);

function delNumber() {
   display.textContent = display.textContent.slice(0, -1);
   displayValue = +display.textContent;
}

function setOperator(e) {
    display.textContent = e.target.textContent;

    if(operator !== null) {
        if(displayValue != result){
            getResult();
        }
        num1 = result;
    } else {
        num1 = +displayValue;
    }
    operator = e.target.textContent;
}

function getResult() {
    if(lastClicked == 'number'){
        num2 = +displayValue;
    }
    result = (operate(operator));
    if(typeof result === 'number') {
        result = +result.toFixed(2);
    }
    if(num1 !== null){
        display.textContent = result;
    }
    console.table(num1, operator, num2, result, displayValue);
}

function clearFunction() {
    num1 = null;
    num2 = null;
    operator = null;
    result = null;
    display.textContent = "";
}

// add keyboard support
window.addEventListener('keydown', getNumber)

function getNumber(e) {
    let button = document.querySelector(`button[data-key="${e.code}"]`);
    if(e.code == 'Equal' && e.shiftKey) {
       button = document.querySelector(`button[data-key="Plus"]`);
    } else if(e.code == 'Digit8' && e.shiftKey) {
        button = document.querySelector(`button[data-key="Multiplier"]`);
    } else if(e.code == 'Slash') {
        e.preventDefault();
    } else if(e.code == 'Enter') {
        button = document.querySelector(`button[data-key="Backspace"]`);
    }
    button.click();
}

// sound waves


for(let i = 0; i < 90; i++){
  
    const left = (i * 2) + 1;
    const anim = Math.floor(Math.random() * 75 + 400);
    const height = Math.floor(Math.random() * 25 + 3);
    console.log(height);
    
    document.querySelector('#bars').innerHTML += `<div class="bar" style="left:${left}px;animation-duration:${anim}ms;height:${height}px"></div>`;
  }
  
  