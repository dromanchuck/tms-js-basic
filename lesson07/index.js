function calcSum(number) {
  let numStr = String(number);
  let arr = numStr.split("");
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += +arr[i];
  }

  return sum;
}

function test(message, result, expectedResult) {
  let status = result === expectedResult ? " Успех" : " Ошибка";
  console.log(message +"----" + "Результат: " + result +
      " ожидаемый результат " +
      expectedResult +
      "   status" +
      status
  );
}

test("Число 2021 - должно вывести 5", calcSum(2021), 5);
test("Число 2022 - должно вывести 6", calcSum(2022), 6);
test("Число 2021 - должно вывести 5", calcSum(2021), 4);
test("Число 2021 - должно вывести 5", calcSum(2021), 5);
