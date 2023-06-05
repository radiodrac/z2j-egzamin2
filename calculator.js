const error = "Błąd! Należy podać liczbę.";
let operand1, operand2, operator, result;

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

// Prompt for user input until it's a number:

function getUserInput(promptMessage, errorMessage) {
    while (true) {
        const input = prompt(promptMessage);
        console.log("User input: " + input);

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

function performCalculation() {

    operand1 = getUserInput("Podaj pierwszą liczbę", error);
    console.log("operand1 = " + operand1 + " " + typeof(operand1));
    operator = prompt("Podaj operator arytmetyczny (+, -, *, / lub %)");
    operand2 = getUserInput("Podaj drugą liczbę", error);
    console.log("operand2 = " + operand2 + " " + typeof(operand2));

    result = calculate(operand1, operator, operand2);
    console.log("result = " + result);

    alert(result);  
}

performCalculation();