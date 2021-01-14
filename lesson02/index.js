let firstStr = prompt('Введеите первое число')
let secondStr = prompt('Введеите второе число')

let firstNum = Number(firstStr) // +firstNum
let secondNum = Number(secondStr) // +secondNum

if (
  (Boolean(firstNum) && Boolean(secondNum)) ||
  (Boolean(firstNum) && Boolean(secondNum === 0)) ||
  (Boolean(firstNum === 0) && Boolean(secondNum)) ||
  (Boolean(firstNum === 0) && Boolean(secondNum === 0))
) {
  let isMore = firstNum > secondNum
  let isEqual = firstNum === secondNum

  if (isMore) {
    alert('Первое число больше!')
  } else if (isEqual) {
    alert('Число равны!')
  } else {
    alert('Второе число больше!')
  }
} else {
  alert('Введите числа!')
}
