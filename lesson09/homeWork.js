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
let divbp = document.createElement('div');
let butt = document.createElement('button');
let par = document.createElement('p');

document.body.append(divbp);
divbp.append(butt,par);

butt.innerHTML = '0';
par.innerHTML = '0';

butt.onclick = () => {
  if(butt.onclick){
    par.innerHTML = Createrandom();
  }
}

function Createrandom() {
  return Math.floor(Math.random()*10);
}



/**
 * Задание 2
 * Создать 2 инпута, 3 параграфа и кнопку. Разместить следующим образом:
 * инпут, параграф с текстом +, инпут, параграф с текстом =, параграф в котором будет размещаться результат.
 * И ниже разместить кнопку с текстом 'посчитать сумму'.
 * Сделать так, чтобы пожатию на кнопку, происходило подсчет введенных в инпуты чисел.
 */
let div2 = document.createElement('div');
let div21 = document.createElement('div');
let div22 = document.createElement('div');
let butt2 = document.createElement('button');
let inp2 = document.createElement('input');
let inp21 = document.createElement('input');
let par2 = document.createElement('p');
let par21 = document.createElement('p');
let par22 = document.createElement('p');

document.body.append(div2);
div2.append(div21,div22);

document.body.append(div21);
div21.append(inp2,par2,inp21,par21,par22);

document.body.append(div22);
div22.append(butt2);

butt2.innerHTML = 'Посчитать сумму';
par2.innerHTML = '+';
par21.innerHTML = '=';
par22.innerHTML = 'Результат';

div21.style = `
  display: flex;
  align-items: center;
`;

butt2.onclick = () => {
  if(butt2.onclick){
    par22.innerHTML = calcSum();
  }
}
function calcSum() {
  return Number(inp2.value) + Number(inp21.value);
}

/**
 * Задание 3
 * Получить элементы ссылки (a) из div с id = 3. Добавить кнопку с текстом 'Показать путь'.
 * Сделать так, чтобы по нажатию на кнопку, к тексту ссылки добавить путь и после чего убрать кнопку.
 * Например:
 * Ссылка с текстом 'Ссылка 1' после нажатия на кнопку текст меняется на 'Ссылка 1 (yandex.ru)'.
 */
let first = document.getElementById("3");
let butt3 = document.createElement('button');
first.append(butt3);

butt3.innerHTML = 'Показать путь';

butt3.onclick = () =>{
  for (let elem of first.children) {
    if (elem.matches('a[href]')) {
       elem.innerHTML +=`${elem}`
    }
  }
  if(butt3.onclick){
    butt3.remove();
  }
}


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
let four = document.getElementById('4');
let buttonlist = document.querySelectorAll('div.exercise_4 > button')
let newFour = Array.from(four.children);
let array = Array.from(buttonlist)
   // Данная задача пока в процессе обработки моим мозгом
newFour[1].onclick = () =>{

}


/** Задание 5
 * Создать 2 кнопки с текстами 'Заблокировать' и 'Разблокировать' и 1 инпут.
 * Сделать так, чтобы по нажатию на кнопку 'Заблокировать', input блокируется,
 * по нажатию на 'Разблокировать' input разблокируется. Использовать атрибут disabled для input.
 */
let div5 = document.createElement('div');
let but51 = document.createElement('button');
let but52 = document.createElement('button');
let inp5 = document.createElement('input');

document.body.append(div5);
div5.append(but51,but52,inp5);

div5.style = `
  display:flex;
  margin: 20px;
  width: 500px;
  justify-content: space-around;
`;

but51.innerHTML = 'Заблокировать';
but52.innerHTML = 'Разблокировать';

but51.onclick = () =>{
  return inp5.setAttribute("disabled", "true");
}

but52.onclick = () =>{
  return inp5.removeAttribute("disabled");
}


/**
 * Задание 6
 * Создать 5 параграфов с числами(<p>5</p>).
 * По нажатию на параграф в нем должен появится квадрат числа, которое он содержит.
 *
 */

 let div6 = document.createElement('div');
 let p6 = document.createElement('p');
 let p61 = document.createElement('p');
 let p62 = document.createElement('p');
 let p63 = document.createElement('p');
 let p64 = document.createElement('p');

 p6.classList.add('list');
 p61.classList.add('list');
 p62.classList.add('list');
 p63.classList.add('list');
 p64.classList.add('list');

 document.body.append(div6);
 div6.append(p6,p61,p62,p63,p64);

 p6.innerHTML = '5';
 p61.innerHTML = '2';
 p62.innerHTML = '7';
 p63.innerHTML = '11';
 p64.innerHTML = '20';


 div6.onclick = function(event) {
  let calc = event.target.closest('.list'); 

  if (!calc) return;
  
  if(!div6.contains(calc)) return;

  return calc.innerHTML = (calc.innerHTML ** 2);
}