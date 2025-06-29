const add = (num1, num2) =>{
    return num1 + num2;
}
const subtract = (num1, num2) =>{
    return num1 - num2;
}
const multiply = (num1, num2) =>{
    return num1 * num2;
}
const divide = (num1, num2) =>{
    return num1 / num2;
}

const operate = (num1,num2,operator) =>{
    switch(operator){
        case "+":
           return add(num1,num2);
            
        case "-":
             return subtract(num1,num2);
            
        case "*":
             return multiply(num1,num2);
            
        case "/":
             return divide(num1, num2);
            
    }
}


let displayN1 = 0,
displayN2 = 0,
operator = "";