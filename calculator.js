const clearBtn = document.getElementById("clear");
const display = document.getElementById("display");
const displayprev = document.getElementById("displayprev");
const displaycurr = document.getElementById("displaycurr");
const deleteBtn = document.getElementById("delete");
const buttons = document.getElementsByTagName("button");
const numbersBtn = document.querySelectorAll('.numbers');
const operatorsBtn = document.querySelectorAll(".operator");
const equalBtn = document.getElementById("equal");
const decimal = document.getElementById("decimal");

let firstNum ="";
let secondNum = "";
let firstOperator="";
let output ="";
let expression ="";
let result ="";


//NUMBER BUTTON
numbersBtn.forEach(function (numberButton) {
    numberButton.addEventListener("click", function () {
        if (firstOperator === "") {
            firstNum += numberButton.textContent;
            displayprev.textContent = (firstNum);
            console.log(firstNum)  
        } else {
            secondNum += numberButton.textContent;
            displayprev.textContent = firstNum+ operatorSymbol + secondNum;
            expression = displayprev.textContent;
            console.log(secondNum);
            console.log(expression);
        }

        if (firstNum.startsWith("0")) {
            firstNum = firstNum.slice(0,-1)
            displayprev.textContent = firstNum
        } else if (secondNum.startsWith("0")) {
            secondNum = secondNum.slice(0,-1)
            displayprev.textContent = firstNum + operatorSymbol + secondNum;
        }
       
    });
});


//OPERATORS BUTTON
operatorsBtn.forEach(function(operatorBtn) {
    operatorBtn.addEventListener("click", function() {
        decimal.disabled = false;
        if (!isNaN(firstNum) && secondNum ==="") {
        firstOperator = operatorBtn.dataset.op + "";
        operatorSymbol = operatorBtn.textContent;
        displayprev.textContent = firstNum + operatorSymbol
        console.log(firstOperator);
        } else if (firstNum !=="" && firstOperator !=="" && secondNum !==""){
            result = calculate(firstNum,secondNum,firstOperator)
            console.log(result)
            firstNum = result
            secondNum = ""

            firstOperator = operatorBtn.dataset.op+""
            operatorSymbol = operatorBtn.textContent;
            displayprev.textContent = firstNum  + operatorSymbol;
            console.log(firstOperator)
        }   
    });
});



//DECIMAL BUTTON
decimal.addEventListener("click", function(e) {
    if (!displayprev.textContent.includes(".")){
        if(firstOperator ==='') {
            firstNum += "."
            displayprev.textContent = firstNum;
        } else {
            secondNum += "."
            displayprev.textContent = secondNum;
        }
    } else {
        decimal.disabled = true;
    }
})


//CLEAR BUTTON
clearBtn.addEventListener("click", () => {
    displayprev.innerHTML = "";
    displaycurr.innerHTML = "0";
    firstNum = "";
    secondNum = "";
    firstOperator = ""
    decimal.disabled = false
     })

//DELETE BUTTON
deleteBtn.addEventListener("click", () => {
    decimal.disabled = false 

    if (firstOperator === "") {
        firstNum = firstNum.slice(0,-1);
        displayprev.textContent = firstNum
    } else if (secondNum) {
        secondNum = secondNum.slice(0,-1);
        displayprev.textContent = firstNum + operatorSymbol + secondNum
    } else {
        firstOperator = "";
        operatorSymbol = "";
        displayprev.textContent = firstNum;
    }
})

//EQUAL BUTTON
equalBtn.addEventListener("click", function(){
     if (expression !== "") {   
        displaycurr.textContent = calculate(firstNum,secondNum,firstOperator)
        result = displaycurr.textContent
        console.log(result); 
       
    } 
});

//CALCULATE
function calculate(firstNum, secondNum, firstOperator) {
  
try {
    switch(firstOperator) {
        case "+": 
            output = parseFloat(firstNum) + parseFloat(secondNum)
            break;
        case "-":
            output = parseFloat(firstNum) - parseFloat(secondNum);
            break;
        case "*":
            output = parseFloat(firstNum) * parseFloat(secondNum);
            break;
        case "/":
            if(secondNum === "0") {
                alert ("Can divide by 0!");
                return "infinity";
            
            } else {
                output = parseFloat(firstNum) / parseFloat(secondNum);
            }
            break;
    }
    return output.toFixed(1);
} catch(e) {
    console.log("Theres an error:", e);
    
}
};




