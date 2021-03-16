class Calculator {
  constructor() {
    this._operand = 0;
  }

  set operand(num) {
    if (typeof num === "number") {
      this._operand = num;
    } else {
      this._operand = 0;
    }
  }

  get operand() {
    return this._operand;
  }

  calculate(operator, value) {
    console.log({ operator, value }, this.operand);

    if (operator === "+") {
      this.operand = this.operand + value;
    }

    if (operator === "*") {
      this.operand = this.operand ? this.operand * value : value;
    }

    if (operator === "-") {
      this.operand = this.operand ? this.operand - value : value;
    }

    if (operator === "/") {
      this.operand = this.operand ? this.operand / value : value;
    }
  }
}

let calculator = new Calculator();
let buttons = document.getElementById("buttons");
let answer = document.getElementById("answer");

let isOperatorPressed = false;
let isEqualPressed = false;
let lastOperator = "";

buttons.addEventListener("click", (event) => {
  let numbers = new Set(["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]);
  let operators = new Set(["+", "-", "*", "/"]);

  if (numbers.has(event.target.value)) {
    if (isOperatorPressed || isEqualPressed) {
      answer.innerHTML = event.target.value;
      isOperatorPressed = false;
      isEqualPressed = false;
    } else {
      if (Number(answer.innerHTML) === 0) {
        answer.innerHTML = event.target.value;
      } else {
        if (answer.innerHTML.length <= 12) {
          answer.innerHTML += event.target.value;
        }
      }
    }
  }

  if (operators.has(event.target.value)) {
    isOperatorPressed = true;
    lastOperator = event.target.value;
    calculator.calculate(event.target.value, Number(answer.innerHTML));

    answer.innerHTML = calculator.operand;
  }

  if (event.target.value === "=") {
    if (isOperatorPressed) {
      answer.innerHTML = calculator.operand;
    } else {
      calculator.calculate(lastOperator, Number(answer.innerHTML));
      answer.innerHTML = calculator.operand;
    }

    calculator.operand = 0;
    isEqualPressed = true;
  }

  if (event.target.value === "ac") {
    answer.innerHTML = "0";

    calculator.operand = 0;
  }

  if (event.target.value === "ce") {
    answer.innerHTML = "0";
  }
});
