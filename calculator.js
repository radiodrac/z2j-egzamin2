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
    if (operand2 === 0) {
        alert("Nie dziel przez 0!")
        return null;
    } else {
        return operand1 / operand2;
    }
}

function calcModulo(operand1, operand2) {
    if (operand2 === 0) {
        alert("Nie dziel przez 0!")
        return null;
    } else {
        return operand1 % operand2;
    }
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
            alert("Wystąpił nieoczekiwany błąd.")
            result = null;
    }
    
    return result;
}

// Prompt for user input until it's a number or prompt window is canceled:

function getUserInput(promptMessage, errorMessage) {
    while (true) {
        const input = prompt(promptMessage);

        if (input === null) {
            alert("Anulowano.");
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
            alert("Anulowano.");
            return null;
        } else if (operators.includes(operator)) {
            return operator;
        } else {
            alert(errorMessage);
        }
    }
}

function performCalculation() {
    const errorOperand = "Błąd! Należy podać liczbę.";
    const promptOperator = "Podaj operator arytmetyczny (+, -, *, / lub %) lub pozostaw puste, aby zakończyć obliczenia.";
    const errorOperator = "Nieobsługiwany operator.";
    let operand1, operand2, operator, result;

    operand1 = getUserInput("Podaj pierwszą liczbę:", errorOperand);
    if (operand1 === null) return;
    result = operand1;
    operator = getOperator(promptOperator, errorOperator);
    if (operator === null) return;

    // Multiple calculations loop
    
    while (!["=",""].includes(operator)) {
        operand2 = getUserInput("Podaj kolejną liczbę:", errorOperand);
        if (operand2 === null) return;
        operand1 = result;

        result = calculate(result, operator, operand2);
        console.log(result);

        if (result === null) return;

        alert(operand1 + " " + operator + " " + operand2 + " = " + result);

        operator = getOperator(promptOperator, errorOperator);
        if (operator === null) return;
    }

    alert("Wynik: " + result);
}

performCalculation();