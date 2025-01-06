let firstNumber = parseFloat(prompt("Enter the first number:"));

let secondNumber = parseFloat(prompt("Enter the second number:"));

let operation = prompt("Enter the operation (+, -, *, /):");

let result;

if (operation === "+") {
  result = firstNumber + secondNumber;
} else if (operation === "-") {
  result = firstNumber - secondNumber;
} else if (operation === "*") {
  result = firstNumber * secondNumber;
} else if (operation === "/") {
  result = firstNumber / secondNumber;
} else {
  alert("Invalid operation entered.");
}
if (result !== undefined) {
  alert(`The result of ${firstNumber} ${operation} ${secondNumber} is ${result}`);
}