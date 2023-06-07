// Available calculations functions

function calcSum(operand1, operand2) {
    return operand1 + operand2;
}

function calcSubtract(operand1, operand2) {
    return operand1 - operand2;
}

function calcMultiply(operand1, operand2) {
    return operand1 * operand2;
}

function calcDivide(operand1, operand2) {
    return (
        (operand2 === 0) ? "Nie dziel przez 0!" : operand1 / operand2
    );
}

function calcModulo(operand1, operand2) {
    return (
        (operand2 === 0) ? "Nie dziel przez 0!" : operand1 % operand2
    );
}

// Calculate result depending on operator

function calculate(operand1, operator, operand2) {
    let result;
    switch (operator) {
        case "+":
            result = calcSum(operand1, operand2);
            break;
        case "-":
            result = calcSubtract(operand1, operand2);
            break;
        case "*":
            result = calcMultiply(operand1, operand2);
            break;
        case "/":
            result = calcDivide(operand1, operand2);
            break;
        case "%":
            result = calcModulo(operand1, operand2);
            break;
        default:
            result = "Nieobsługiwany operator";
    }
    
    return result;
}

// Prompt for user input until it's a number or prompt window is canceled:

function getUserInput(promptMessage, errorMessage) {
    while (true) {
        const input = prompt(promptMessage);

        if (input === null) {
            return null;
        } else if (input === "") {
            continue;
        } else if (!isNaN(input)) {
            return Number(input);
        } else {
            alert(errorMessage);
        }
    }
}

// Prompt for an operator until it's correct or prompt window is canceled:

function getOperator(promptMessage, errorMessage) {
    const operators = ["+", "-", "*", "/", "%", "=", ""];

    while (true) {
        const operator = prompt(promptMessage);
        
        if (operator === null) {
            return null;
        } else if (operators.includes(operator)) {
            return operator;
        } else {
            alert(errorMessage);
        }
    }
}

// Cancel alert if input canceled

function cancel(input) {
    if (input === null) {
        alert("Anulowano.");
        return true;
    }
}

function performCalculation() {
    const error = "Błąd! Należy podać liczbę.";
    let operand1, operand2, operator, result;

    operand1 = getUserInput("Podaj pierwszą liczbę:", error);
    if (cancel(operand1)) return;
    result = operand1;
    operator = getOperator("Podaj operator arytmetyczny (+, -, *, / lub %) lub pozostaw puste, aby zakończyć obliczenia.", "Nieobsługiwany operator.");
    if (cancel(operator)) return;
    
    while (!["=",""].includes(operator)) {
        operand2 = getUserInput("Podaj kolejną liczbę:", error);
        if (cancel(operand2)) return;
        operand1 = result;

        result = calculate(result, operator, operand2);
        console.log(result);
        alert(operand1 + " " + operator + " " + operand2 + " = " + result);

        operator = getOperator("Podaj operator arytmetyczny (+, -, *, / lub %) lub pozostaw puste, aby zakończyć obliczenia.", "Nieobsługiwany operator.");
        if (cancel(operator)) return;
    }

    alert("Wynik: " + result);
    
}

performCalculation();