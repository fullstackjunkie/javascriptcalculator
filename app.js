const display = document.querySelector(".display");
const numbers = document.querySelector(".numbers");
const operators = document.querySelector(".operators");

let numbersOne = [];
let numbersTwo = [];
let numTwo = "";
let mOperator = "";
let numMain = "";
display.textContent = 0;

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}


function divide(num1, num2) {
    if(num2 > 0) {
        return num1  / num2;
    }
    return "Sorry, you can not divide by 0";
}

function operate(operator, num1, num2) {
    switch(operator) {
        case "+": 
            return add(num1, num2);
            
        case "-":
            return subtract(num1, num2);
            
        case "*":
            return multiply(num1, num2);
        case "/":
            return divide(num1, num2);
        default:
            return "Sorry, this is not working";     
    }
}



numbers.addEventListener("click", (e) => {
    // display.textContent = e.target.textContent;
    numbersOne.push(e.target.textContent);
    
    let numOne = getNum(numbersOne);
    
    let numTwo = "";
    let operation = e.target.textContent;
   
    display.textContent = numOne;
    
    if(operation == "+") {
        
        
        mOperator = "+";
        
        display.textContent = "0";
        numMain = numOne;
        numbersOne = [];
    }
    if(operation == "-") {
        mOperator = "-";
        display.textContent = "0";
        numMain = numOne;
        numbersOne = [];
    }
    if(operation == "*") {
        mOperator = "*";
        display.textContent = "0";
        numMain = numOne;
        numbersOne = [];
    }
    if(operation == "/") {
        mOperator = "/";
        display.textContent = "0";
        numMain = numOne;
        numbersOne = [];
    }
    if(operation == "AC") {
        mOperator = "";
        display.textContent = "0";
        numMain = "";
        numbersOne = [];
    }

    if(operation == "=") {
        let finNum = numMain.slice(0, numMain.length - 1);
        let secFinNum = numOne.slice(0, numOne.length - 1);
        console.log(`mOperator is ${mOperator}`);
        console.log(`numMain is ${finNum}`);
        console.log(`numOne is ${secFinNum}`);
        display.textContent = operate(mOperator, Number(finNum), Number(secFinNum));
    }
});



function getNum(arr) {
    let num = "";
    for(let i = 0; i < arr.length; i++) {
        
            num += arr[i]
        
            
        
         
    }
    return num;
}