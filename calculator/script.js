var input = document.getElementById("screen");
var currentExpression = "0";


input.value = currentExpression;

function showNumber(button) {
    if (input.value === "0" || input.value === "Error") {
        currentExpression = button.value;
        input.value = currentExpression;
    } else {
        currentExpression += button.value;
        input.value = currentExpression;
    }
}


function deleteAll() {
    currentExpression = "";
    input.value = "";
}

function addValues() {
    if (currentExpression !== "" && !isOperator(currentExpression.slice(-1))) {
        currentExpression += "+";
        input.value = currentExpression;
    }
}

function multiplyValues() {
    if (currentExpression !== "" && !isOperator(currentExpression.slice(-1))) {
        currentExpression += "×";
        input.value = currentExpression;
    }
}

function divideValues() {
    if (currentExpression !== "" && !isOperator(currentExpression.slice(-1))) {
        currentExpression += "÷";
        input.value = currentExpression;
    }
}



function substractValues() {
    if (currentExpression !== "" && !isOperator(currentExpression.slice(-1))) {
        currentExpression += "-";
        input.value = currentExpression;
    }
}

function goBack() {
    if (currentExpression.length > 0) {
        currentExpression = currentExpression.slice(0, -1);
        input.value = currentExpression;
    }
}

function isOperator(char) {
    return char === '+' || char === '-' || char === '*' || char === '/';
}


function showResult() {
    try {
        const result = eval(input.value.replace("×", "*").replace("÷", "/"));
        
        if (isNaN(result)) {
            input.value = "Error";
        } else {
            input.value = result;
            currentExpression = result.toString(); 
        }
    } catch (error) {
        input.value = "Error";
    }
}


function decimalButton() {
    const parts = currentExpression.split(/[-+×÷]/);
    const currentNumber = parts[parts.length - 1];
    if (!currentNumber.includes(".") && currentNumber !== "") {
        currentExpression += ".";
        input.value = currentExpression;
    }
}








