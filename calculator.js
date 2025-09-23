const clearBtn = document.getElementById("clear");
const display = document.getElementById("display");
const displayprev = document.getElementById("displayprev");
const displaycurr = document.getElementById("displaycurr");
const deleteBtn = document.getElementById("delete");
const buttons = document.getElementsByTagName("button");
const numbersBtn = document.querySelectorAll('.numbers');
const operatorsBtn = document.querySelectorAll(".operator");
let firstNum ="";
let secondNum = "";
let operator="";
let resultValue ="";
let expression = "";

numbersBtn.forEach(function (numberButton) {
    numberButton.addEventListener("click", function () {
        if (operator === "") {
            firstNum += numberButton.textContent;
            displayprev.textContent = firstNum;
            console.log(firstNum);
        } else {
            secondNum += numberButton.textContent;
            displayprev.textContent = firstNum+ operatorSymbol + secondNum;
            expression = displayprev.textContent
            console.log(secondNum);
            console.log(expression);
        }
    });
});


operatorsBtn.forEach(function(operatorBtn) {
    operatorBtn.addEventListener("click", function() {
        operator = operatorBtn.dataset.op;
        operatorSymbol = operatorBtn.textContent
        if (!isNaN(firstNum)) {
        displayprev.textContent = firstNum + operatorSymbol
        console.log(operator);
        
    }});
});


clearBtn.addEventListener("click", () => {
    displayprev.innerHTML = "";
    firstNum = "";
    secondNum = "";
    operator = ""
     })
deleteBtn.addEventListener("click", () => {
    if (operator === "") {
        firstNum = firstNum.slice(0,-1);
        displayprev.textContent = firstNum
    } else if (secondNum) {
        secondNum = secondNum.slice(0,-1);
        displayprev.textContent = firstNum + operatorSymbol + secondNum
    } else {
        operator = "";
        operatorSymbol = "";
        displayprev.textContent = firstNum;
    }
   
})







// numbersBtn.forEach( function(numberBtn){
//         numberBtn.addEventListener("click", function(){
//         if (partialx !== ""){
//         sec += numberBtn.textContent;
//         secondNum = parseInt(sec);
//         console.log(sec)}
//         });
//     });


