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
let resultValue =""
let expression = ""
let partialx="";
let sec = "";

numbersBtn.forEach(function (numberButton) {
    numberButton.addEventListener("click", function () {
        if (operator === "") {
            displayprev.textContent += numberButton.textContent;
            firstNum = parseInt(displayprev.textContent);
            console.log(firstNum);
        } else {
            sec += numberButton.textContent;
            secondNum = parseInt(sec);
            displayprev.textContent = partialx + sec;
            // expression = displayprev.textContent
            console.log(sec);
            console.log(expression);
        }
    });
});


operatorsBtn.forEach(function(operatorBtn) {
    operatorBtn.addEventListener("click", function() {
        operator = operatorBtn.dataset.op;
        if (!isNaN(firstNum)) {
        displayprev.textContent = firstNum + operatorBtn.textContent
        partialx = displayprev.textContent
        console.log(operator);
        console.log(partialx);
    }});
});


clearBtn.addEventListener("click", () => {
    displayprev.textContent = ""
    displaycurr = ""
})








// numbersBtn.forEach( function(numberBtn){
//         numberBtn.addEventListener("click", function(){
//         if (partialx !== ""){
//         sec += numberBtn.textContent;
//         secondNum = parseInt(sec);
//         console.log(sec)}
//         });
//     });


