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

operand1 = +prompt("Podaj pierwszą liczbę");

if (isNaN(operand1)) {
    alert(error);

} else {
    operator = prompt("Podaj operator arytmetyczny (+, -, *, / lub %)");
    operand2 = +prompt("Podaj drugą liczbę");
    
    if (isNaN(operand2)) {
        alert(error);

    } else if (operator === "+") {
        result = calcSum(operand1, operand2);
    } else if (operator === "-") {
        result = calcSubtract(operand1, operand2);
    } else if (operator === "*") {
        result = calcMultiply(operand1, operand2);
    } else if (operator === "/") {
        result = calcDivide(operand1, operand2);
    } else if (operator === "%") {
        result = calcModulo(operand1, operand2);
    } else {
        result = "Nieobsługiwany operator";
    }

    alert(result);
}
