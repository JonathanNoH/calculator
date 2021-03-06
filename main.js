function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

function subtract(a, b) {
    return a - b;
}

function divide(a, b) {
    if(b == 0) {
        setTimeout(function() {
            clearDisplay();
        }, 2000);
        return "Don't do that.";
    }
    return a / b;
}

function operate(operator, a, b) {
    switch (operator) {
        case "+":
            return add(a, b);
        case "-":
            return subtract(a, b);
        case "*":
            return multiply(a,b);
        case "/":
            return divide(a,b);
        default:
            console.log("ERROR");
    }
}

function addNum(num) {
    appendNum(num);
    displayNum(currentNumAsString);
}

function displayNum(num) {
    display.innerText = `${num}`;
}

function appendNum(num) {
    currentNumAsString += `${num}`;
}

function clearDisplay() {
    currentNumAsString = "";
    display.innerText = "0";
    numArray = [];
}
/* operator button functions */
function operateOn(operator) {
    /* guard after using equals button*/
    if(currentNumAsString != "") {
        numArray.push(+currentNumAsString);
    }
    /*guard for pressing operator button multiple times*/
    if(isNaN(numArray[numArray.length - 1])) {
        return;
    }
    if (numArray.length >= 3) {
        let newAnswer = evaluate();
        displayNum(newAnswer);
        numArray.push(operator);
        currentNumAsString = "";
        
    } else {
        numArray.push(operator);
        currentNumAsString = "";
        display.innerText = "0";
    }
}
/* equal buttons functions */
function performEquation() {
    /* guard after using equals button*/
    if(currentNumAsString != "") {
        numArray.push(+currentNumAsString);
    }
    /* guard against pressing equals button multiple times*/
    if(numArray.length < 3) {
        return;
    }
    let ans = evaluate();
    numArray = [ans];
    currentNumAsString = "";
    displayNum(ans);
}

function evaluate() {
    let currentAns = operate(numArray[1], +numArray[0], +numArray[2]);
    currentAns.round(10);
    numArray.splice(0, 3, currentAns);
    return numArray[0];
}
/* rounding function */
Number.prototype.round = function(places) {
    return +(Math.round(this + "e+" + places)  + "e-" + places);
}

/* decimal function */

function addDecimal() {
    if (currentNumAsString.includes(".")){
        return;
    }
    addNum(".");
}

/* set intial states */
let currentNumAsString = "";
let numArray = [];
const display = document.querySelector(".display");

/* number buttons */
const zero = document.querySelector(".zero");
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");
const seven = document.querySelector(".seven");
const eight = document.querySelector(".eight");
const nine = document.querySelector(".nine");

zero.addEventListener('click', () => {addNum(0);});
one.addEventListener('click', () => {addNum(1);});
two.addEventListener('click', () => {addNum(2);});
three.addEventListener('click', () => {addNum(3);});
four.addEventListener('click', () => {addNum(4);});
five.addEventListener('click', () => {addNum(5);});
six.addEventListener('click', () => {addNum(6);});
seven.addEventListener('click', () => {addNum(7);});
eight.addEventListener('click', () => {addNum(8);});
nine.addEventListener('click', () => {addNum(9);});

/* decimal button */

const decimalButton = document.querySelector(".decimal");
decimalButton.addEventListener('click', () => {addDecimal();});

/* operation buttons */
const divideButton = document.querySelector(".divide");
const multiplyButton = document.querySelector(".multiply");
const subtractButton = document.querySelector(".subtract");
const addButton = document.querySelector(".add"); 
const clearButton = document.querySelector(".clear");
const equalButton = document.querySelector(".equals");

divideButton.addEventListener('click', () => {operateOn("/");});
multiplyButton.addEventListener('click', () => {operateOn("*");});
subtractButton.addEventListener('click', () => {operateOn("-");});
addButton.addEventListener('click', () => {operateOn("+");});
clearButton.addEventListener('click', () => {clearDisplay();});
equalButton.addEventListener('click', () => {performEquation();});