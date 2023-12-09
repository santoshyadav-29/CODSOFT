function sum(a, b) {
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

let numA;
let numB;
let operator = ''
let operation = '';
let displayNumb = '';

function operate(a, b, op) {
    if (a === 0 && b === 0) return '???'
    if (op === '') return 'ERROR'
    if (op === '+') return sum(a, b)
    if (op === '-') return subtract(a, b)
    if (op === '*') return multiply(a, b)
    if (op === '/') return divide(a, b)
    operator = ''
}

const display = document.querySelector('.result');
display.textContent = displayNumb;

const numbers = document.querySelectorAll('#number');
numbers.forEach(num => num.addEventListener('click', function(){
    if (this.textContent === '.' && displayNumb.includes('.')) {
        return
    }
    operation += this.textContent;
    displayNumb += this.textContent; 
    display.textContent = displayNumb;
}))

const operators = document.querySelectorAll('.op')
operators.forEach(op => op.addEventListener('click', function(){
    if (operator !== '') getResult()
    operator = this.textContent;
    operation += this.textContent;
    displayNumb = '';
}))

const equals = document.querySelector('.equals')
equals.addEventListener('click', getResult)

function removeOperation(){
    numA = undefined;
    numB = undefined;
    displayNumb = '';
    operator = '';
    operation = '';
    display.textContent = ''
}

function getResult(){
    let arr = operation.split(operator);
    numA = +arr[0];
    numB = +arr[1];
    let finalResult = operate(numA, numB, operator);
    if (finalResult === '???') {
        removeOperation()
        display.textContent = finalResult;
    } else {
        operation = parseFloat(finalResult.toFixed(2)).toString();
        displayNumb = operation;
        display.textContent = operation;
        operator = '';
        numA = null;
        numB = null;
    }
}

const AC = document.querySelector('.ac')
AC.addEventListener('click', removeOperation)

const DEL = document.querySelector('.del')
DEL.addEventListener('click', function(){
    if (display.textContent === '') {
        return
    } else if (numA !== undefined || numB !== undefined || 
        displayNumb !== ''){

        let arr = operation.split('')
        arr.pop()
        operation = arr.join('');

        let arrDisplay = display.textContent.split('');
        arrDisplay.pop()
        display.textContent = arrDisplay.join('')
        displayNumb = display.textContent;
    }
})