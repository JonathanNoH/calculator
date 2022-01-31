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
    displayNum(num);
    appendNum(num);
}

function displayNum(num) {
    if (display.innerText == "0") {
        display.innerText = `${num}`;
        return;
    }
    display.innerText += `${num}`;
}

function appendNum(num) {
    currentNumAsString += `${num}`;
}
let currentNumAsString = ""

const display = document.querySelector(".display");
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