const error = "Błąd! Należy podać liczbę.";
let operand1, operand2, operator, result;

operand1 = +prompt("Podaj pierwszą liczbę");

if (isNaN(operand1)) {
    alert(error);

} else {
    operator = prompt("Podaj operator arytmetyczny (+, -, *, / lub %)");
    operand2 = +prompt("Podaj drugą liczbę");
    
    if (isNaN(operand2)) {
        alert(error);

    } else if (operator === "+") {
        result = operand1 + operand2;
    } else if (operator === "-") {
        result = operand1 - operand2;
    } else if (operator === "*") {
        result = operand1 * operand2;
    } else if (operator === "/") {
        result = (operand2 === 0) ? "Nie dziel przez 0!" : operand1 / operand2;
    } else if (operator === "%") {
        result = operand1 % operand2;
    } else {
        result = "Nieobsługiwany operator";
    }

    alert(result);
}
