/**
 * Домашнее задание к занятию 9
 * Каждому нужно создать новую ветку от ветки master. Название ветки должно содержать имя + первая буква фамилии + /lesson09.
 * Например: dmitryR/lesson09. Выполнение задания производится в свое ветке и в этом файле.
 * После выполнения задания делаете пулл реквест и сообщаете о том, что задание выполнено:)
 * В случае неполодок с гитом, присылаете папку с проектом мне в личные сообщения
 * Код решения должен быть сразу же после самого задания
 */

//Внимание! Верстку для заданий использовать файл index.html

/**
 * Задание 1
 * Создать кнопку и параграф с текстом '0'. Сделать так, чтобы по нажатию
 * на кнопку, в параграф вставлялась рандомная цифра от 0 до 10.
 */

//  let p = document.querySelector('.ex1_p');
//  let button = document.querySelector('.ex1_btn');

//  button.addEventListener('click', function() {
//    let span = document.createElement('span');
//    span.style.marginRight = '5px';
//    p.append(span, random());
//  })

//  function random () {
//    return Math.floor(Math.random() * 10);
//  }

/**
 * Задание 2
 * Создать 2 инпута, 3 параграфа и кнопку. Разместить следующим образом:
 * инпут, параграф с текстом +, инпут, параграф с текстом =, параграф в котором будет размещаться результат.
 * И ниже разместить кнопку с текстом 'посчитать сумму'.
 * Сделать так, чтобы пожатию на кнопку, происходило подсчет введенных в инпуты чисел.
 */

//  let sumBtn = document.querySelector('.sum_btn');
//  let inputOne = document.querySelector('.inputOne');
//  let inputTwo = document.querySelector('.inputTwo');
//  let spanResult = document.querySelector('.parThree');
//  let clearBtn = document.querySelector('.clear_btn')

//  sumBtn.addEventListener('click', function() {
//    spanResult.append(Number(inputOne.value) + Number(inputTwo.value));
//  })

//  clearBtn.addEventListener('click', function() {
//    inputOne.value = '';
//    inputTwo.value = '';
//    spanResult.innerHTML = '';
//  })

/**
 * Задание 3
 * Получить элементы ссылки (a) из div с id = 3. Добавить кнопку с текстом 'Показать путь'.
 * Сделать так, чтобы по нажатию на кнопку, к тексту ссылки добавить путь и после чего убрать кнопку.
 * Например:
 * Ссылка с текстом 'Ссылка 1' после нажатия на кнопку текст меняется на 'Ссылка 1 (yandex.ru)'.
 */

//  let a = document.getElementById('3').children;
//  let btnShow = document.querySelector('.showPath');

//  btnShow.addEventListener('click', function() {
//    for (let i = 0; i < a.length; i++) {
//     let aHref = a[i].getAttribute('href');
//     a[i].append(aHref);
//    }
//    btnShow.classList.add('btn_hidden');
//  })

/**
 * Задание 4
 * Получить элемент с id = 4. 
 *   <div id="4">
      <div class="exercise_4">
        <button>5</button>
        <button>6</button>
        <button>3</button>
        <button>8</button>
        <button>1</button>
        <button>9</button>
        <button>10</button>
        <button>9</button>
        <button>15</button>
        <button>0</button>
        <button>10</button>
        <button>90</button>
        <button>100</button>
        <button>2</button>
        <button>3</button>
      </div>
      <button>Отсортировать</button>
    </div>
 * 
 * Сделать так, чтобы по нажатию на кнопку Отсортировать, кнопки были отсортированы по возрастанию.
 *
 */

//  let div = document.getElementById('4');
//  let div4 = document.querySelector('.exercise_4');
//  let sortButton = document.querySelector('.sort_btn');
//  let buttons = document.querySelectorAll('.exercise_4 > button');

//  sortButton.addEventListener('click', function() {
//    let arrBtn = [...buttons];
//    let sortedArrBtn = arrBtn.sort((a, b) => a.innerHTML - b.innerHTML);

//    div4.innerHTML = '';
//    for(let btn of sortedArrBtn) {
//      div4.appendChild(btn);
//    }
//  })


/** Задание 5
 * Создать 2 кнопки с текстами 'Заблокировать' и 'Разблокировать' и 1 инпут.
 * Сделать так, чтобы по нажатию на кнопку 'Заблокировать', input блокируется,
 * по нажатию на 'Разблокировать' input разблокируется. Использовать атрибут disabled для input.
 */

//  let blockBtn = document.querySelector('.block_btn');
//  let unblockBtn = document.querySelector('.unblock_btn');
//  let input = document.querySelector('.input5');

//  blockBtn.addEventListener('click', function() {
//    input.setAttribute('disabled', '');
//  })

//  unblockBtn.addEventListener('click', function() {
//    input.removeAttribute('disabled');
//  })

/**
 * Задание 6
 * Создать 5 параграфов с числами(<p>5</p>).
 * По нажатию на параграф в нем должен появится квадрат числа, которое он содержит.
 *
 */

//  let firstP = document.querySelector('.firstP');
//  let secondP = document.querySelector('.secondP');
//  let thirdP = document.querySelector('.thirdP');
//  let fourthP = document.querySelector('.fourthP');
//  let fifthP = document.querySelector('.fifthP');

//  let arrayP = [firstP, secondP, thirdP, fourthP, fifthP];

//  for (let value of arrayP) {
//    value.addEventListener('click', function() {
//      value.innerText = String(Number(value.innerText) ** 2);
//    })
//  }


