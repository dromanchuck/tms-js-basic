/**
 * Домашнее задание к занятию 7
 * Каждому нужно создать новую ветку от ветки master. Название ветки должно содержать имя + первая буква фамилии + /lesson05.
 * Например: dmitryR/lesson07. Выполнение задания производится в свое ветке и в этом файле.
 * После выполнения задания делаете пулл реквест и сообщаете о том, что задание выполнено:)
 * В случае неполодок с гитом, присылаете папку с проектом мне в личные сообщения
 * Код решения должен быть сразу же после самого задания
 */

//ВНИМАНИЕ! К кажому заданию написать тесты(минимум 3)! Использовать функцию test из index.js или написать свою собственную функцию

/**
 * Задание 0
 * Написать функцию, которая вычислит минимальное значени всех аргументов функции и вернет это значение.
 * (Math.min использовать нельзя :-) )
 */
function test(message, result, expectedResult) {
    let status = result === expectedResult ? " Успех" : " Ошибка";
    console.log(message +"----" + "Результат: " + result +
        " ожидаемый результат " +
        expectedResult +
        "   status" +
        status
    );
  }
  
  function calkMin(array, array1) {
      array.sort((a,b) => a - b);
      array1.sort((c,d) => c - d);
      if(array[0] < array1[0]){
        return array[0];
      }else{
        return array1[0];
      }
  }
  console.log(calkMin([8,7,5,2,4],[5,1,7,3,9]))
  
  test('Наименьшое число в аргументах', calkMin([8,7,0,2,4],[5,1,7,3,9]),0);
  test('Наименьшое число в аргументах', calkMin([8,7,5,2,4],[5,7,3,9]),5);
  test('Наименьшое число в аргументах', calkMin([8,7,1,2,4],[5,1,7,3,9]),1);

/**
 * Задание 1
 * Сделать функцию, которая вычисляет разность между двумя числами и вернет разность.
 * Выполнить используя замыкание, результат должен выглядеть примерно так
 * let sub = substract(a)(b) // a - b
 */
function calcDiff(a,b){
    function DiffNum(){
         return a - b;
    }
    return DiffNum();
 }
 calcDiff(5,4);

test('Разность чисел', calcDiff(2,3),0);
test('Разность чисел', calcDiff(10,5),5);
test('Разность чисел', calcDiff(4,2),2);
/**
 * Задание 2
 * Создайте замыкание: функция makePassword получает пароль в аргументе и возвращает
 * внутреннюю функцию, которая принимает введенную строку и возвращает булево значение true,
 * если введенная строка совпадает с паролем и false – если не совпадает.
 * Пример выполнения функции:
 * let checkPassword = makePassword('somePassword'); //задаем пороль
 *
 * checkPassword('password') // возвращает false
 * checkPassword('somePassword')
 */
function createPassword(makepassword){
    let password = 'SayMeHi';
    function somePassword(){
      return (password === makepassword) ? true : false
    }
    return somePassword();
  }
  createPassword('SayMeHi');
  
  test('Пароль совпадает', createPassword('GiveMeFalse'),true);
  test('Пароль совпадает', createPassword('SayMeHi'),true);
  test('Пароль совпадает', createPassword('SayMeHi'),true);

/** Задание 3
 * Написать функцию, которая приобразуем любую строку в строку написанную кебаб кейсом (все буквы с маленькой буквы и на месте пробелов - тире)
 * Например:
 * 'Hello World' -> 'hello-world';
 * 'Hello dear hell' -> 'hello-dear-hell'
 */
function createLower(text){
    return text.split(' ').join('-').toLowerCase();
  }
  createLower('My car is eating oil');
  
test('Kebab case', createLower('My car is eating oil'),'my-car-is-eating-oil');
test('Kebab case', createLower('hello my dear friend'),'hello-my-dear-friend');
test('Kebab case', createLower('Its a bread'),'my-car-is-eating-oil');
/**
 * Написать функцию, которая из любой фразы сделает вернет ее абревиатуру.
 *
 * 'Республика беларусь' -> 'РБ'
 * 'Минск' -> 'М'
 */
function createUpper(text){
    return text.split(' ').map(text => text[0]).join('').toUpperCase();
  }
  createUpper('tell me hi');
  
test('Абревиатура', createUpper('tell me hi'),'TMH');
test('Абревиатура', createUpper('hello my dear friend'),'HMDF');
test('Абревиатура', createUpper('i feel cold'),'IFC');