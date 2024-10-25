const display = document.querySelector(".display");
const numbers = document.querySelector(".numbers");
let numbersOne = [];

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
    console.log(numbersOne);
    displayContent(numbersOne);
});



function displayContent(arr) {
    let num = "";
    for(let i = 0; i < arr.length; i++) {
         num += arr[i]
    }
    display.textContent = num;
}