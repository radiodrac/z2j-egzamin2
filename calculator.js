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
    const operators = ["+", "-", "*", "/", "%"];

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

function performCalculation() {
    const error = "Błąd! Należy podać liczbę.";
    let operand1, operand2, operator, result;

    operand1 = getUserInput("Podaj pierwszą liczbę", error);
    if (operand1 === null) return;
    result = operand1;
    operator = getOperator("Podaj operator arytmetyczny (+, -, *, / lub %)", "Nieobsługiwany operator");
    if (operator === null) return;
    operand2 = getUserInput("Podaj drugą liczbę", error);
    if (operand2 === null) return;

    result = calculate(operand1, operator, operand2);

    alert(result);  
}

performCalculation();