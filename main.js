function calculator(a, b, c) {
    let output = "";
    try {
        switch(c) {
            case "+":
                output = a + b;
                break;
            case "-":
                output = a - b;
                break;
            case "*":
                output = a * b;
                break;
            case "/":
                if (b === 0) {
                    throw "Can't divide by 0!";
                    alert("Can't divide by 0!")
                } else {
                    output = a / b;
                }
                break;
        }
    } catch(e) {
        console.log("There's an error:", e);
    }
    return output;
}
console.log(calculator(7,9,'/'));

window.onload = function() {

const clearBtn = document.getElementById("clear");
const display = document.getElementById("display");
const keybuttons = document.querySelector("keybutton");
const deleteBtn = document.getElementById("");
const buttons = document.getElementsByTagName("button");
const numbers = document.querySelectorAll('numbers');
const operators = document.querySelectorAll("operator");
let firstNum ="";
let secondNum = "";
let operator="";
let resultValue =""


    for (var i = 0; i < buttons.length; i++) {
        buttons[i].onclick= function (e) {
        const BtnValue = this.innerHTML;

        if (BtnValue === "CLEAR") {
            display.innerHTML = "0";
        } else if (display.innerHTML === "0") {
            display.innerHTML = BtnValue;
        } else if (BtnValue === "DELETE") {
            display.innerHTML = display.innerHTML.slice(0,-1)
        } else if (operator === "") {
            display.innerHTML += BtnValue;
        } else {

        }
        }
    };
    

numbers.forEach(number => {
        number.addEventListener ("click", e => {
            if (operator === "") {
                firstNum += e.target.innerHTML;
            } else {
                secondNum += e.target.innerHTML
            }

        });
    });

operators.forEach(op => {
        op.addEventListener("click", e => {
            if (operator !== "=") {
                operator = e.target.innerHTML;

                console.log(firstNum);
                console.log(operator);
            } else {
                console.log(secondNum);
            }
        })
    })
};

