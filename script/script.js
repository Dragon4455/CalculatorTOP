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
    if(num2 === 0){
        return "";
    } else{
        return num1 / num2;

    }
}

const operate = (num1,num2 = 0,operator) =>{
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    switch(operator){
        case "+":
           return `${add(num1,num2)}`
            
        case "-":
             return `${subtract(num1,num2)}`
            
        case "*":
             return `${multiply(num1,num2)}`
            
        case "/":
             return `${divide(num1, num2)}`
            
    }
}
let $buttonsNumbers = document.querySelector(".calc__numbers"),
$buttonsOperators = document.querySelector(".calc__operators"),
$calcResult = document.querySelector(".calc__text");

$buttonsNumbers.addEventListener("click", (e)=> {

if(!(e.target.matches(".calc__numbers"))){

    if(e.target.id === "Clear"){
            result = "";
            operator = "";
            displayN2 = "",
            displayN1 = "";
            
        } else if(e.target.id === "Del"){
            if(!(displayN2) && !(operator)){

                displayN1 = displayN1.slice(0, displayN1.length - 1);
            }
            if(displayN1 && !(displayN2)){
                operator = operator.slice(0, operator.length - 1);
            }
            if(displayN1 && operator){
                displayN2 = displayN2.slice(0, displayN2.length - 1);
            }
           
            

        }else {
    
            if(displayN1 && operator){
          
              if(displayN2 === "0" && e.target.id === "0" ){
                  displayN2 = 0;
              } else{
                  
                  displayN2 = displayN2 + e.target.id;
                  console.log(displayN2);
              }
          
            } else{
          
              if(displayN1 === "0" && e.target.id === "0" ){
                  displayN1 = 0;
              } else{
                  
                  displayN1 = displayN1 + e.target.id;
                    console.log(displayN1)
              }
          
            }
        }

        
      $calcResult.textContent = `${displayN1}${operator}${displayN2}` ;
}  
        

});

$buttonsOperators.addEventListener("click", (e)=>{


if(!(e.target.matches(".calc__operators"))){
        if((e.target.id === "+" ||
       e.target.id === "-" ||
       e.target.id === "*" ||
       e.target.id === "/" ) &&
       displayN1 &&
       !(operator)) 
       {
        operator = e.target.id;
        console.log(operator)
    }
    if((e.target.id === "+" ||
       e.target.id === "-" ||
       e.target.id === "*" ||
       e.target.id === "/" ) &&
       displayN1 && operator && displayN2) 
       {
        result = operate(displayN1, displayN2, operator);
        displayN1 = result;
        displayN2 = "";
        operator = e.target.id;
        result = "";
    }


    if(e.target.id === "=" && displayN1 && operator && displayN2){

        result = operate(displayN1, displayN2, operator);
        console.log(result)
        displayN1 = result;

        result = "";
        operator = "";
        displayN2 = "";
    }
    $calcResult.textContent = `${displayN1} ${operator} ${displayN2}`;
   
  
    }
});


let displayN1 = "",
displayN2 = "",
operator = "",
result = "";