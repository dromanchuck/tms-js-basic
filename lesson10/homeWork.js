/**
 * Домашнее задание к занятию 10
 * Каждому нужно создать новую ветку от ветки master. Название ветки должно содержать имя + первая буква фамилии + /lesson10.
 * Например: dmitryR/lesson10. Выполнение задания производится в свое ветке и в этом файле.
 * После выполнения задания делаете пулл реквест и сообщаете о том, что задание выполнено:)
 * В случае неполодок с гитом, присылаете папку с проектом мне в личные сообщения
 * Код решения должен быть сразу же после самого задания
 */

/**
 * Задание 1
 * Написать счетчик от 0 до бесконечности. Он должен содержать кнопку Старт, по нажатию на которую стартует отсчет,
 * элемент p, в котором будет отображаться число, кнопка Стоп,  по нажатию на которую счетчик отстанавливается,
 * кнопка Reset, по нажатию на которую счетчик ресетиться к 0.
 * Время инкремента числа выбрать самостоятельно:)
 * + Сделать так, чтобы кнопки Reset и Стоп не было видно, когда число счетчика равно 0
 */
let div1 = document.createElement('div');
let butStart = document.createElement('button');
let butStop = document.createElement('button');
let pCounter = document.createElement('p');
let butReset = document.createElement('button');
let interval;

document.body.append(div1);
div1.append(butStart,pCounter,butStop,butReset);

butStart.innerHTML = 'Start';
butStop.innerHTML = 'Stop';
butReset.innerHTML = 'Reset';
pCounter.innerHTML = '0';

div1.style =`
    display: flex;
    align-items: center;
    justify-content: center;
`;

if(pCounter.innerHTML === '0'){
butStop.style =` 
    display: none
`;
butReset.style =`
    display: none
`;
}

butStart.onclick = () =>{
    if(pCounter.innerHTML != String){
    interval = setInterval(() => {
            pCounter.innerHTML ++; 
        }, 100);
    }
    butStop.style =` 
        display: flex
    `;
    butReset.style =`
        display: flex
    `;
}

butStop.onclick = () =>{
    setTimeout(() => {clearInterval(interval); }, 0.0001);
}

butReset.onclick = () =>{
    pCounter.innerHTML = '0';
    setTimeout(() => {clearInterval(interval); }, 0.0001);
    if(pCounter.innerHTML === '0'){
        butStop.style =` 
            display: none
        `;
        butReset.style =`
            display: none
        `;
        }
}



/**
 * Задание 2
 * Есть ссылки в lesson10/index.html. Они находятся в div c id  = 2. Сделать так, чтобы по ховеру на ссылку (событие mouseover),
 * в аттрибут title у ссылки поместить значение пути ссылки.
 */
let idlist = document.getElementById('2');

for (let atr of idlist.children){
    atr.addEventListener("mouseover", function() {
        if(atr.matches('a[href]')){
            atr.setAttribute('title', atr.href)
        }
    })

    atr.addEventListener("mouseout", function() {
        if(atr.matches('a[href]')){
            atr.removeAttribute('title', atr.href)
        }
    })

}
/**
 * Задание 3
 * Есть инпуты, они находятся в div с id = 3. Сделать так, чтобы нажатию на enter
 * введенное значение из инпута попадало в div в виде:
 * `${индекс инпута}: ${введенный текст}`
 *
 */
let three = document.getElementById('3');
let inp = three.querySelectorAll('input');
let arr = [...inp];
let div3 = three.querySelector('div');

arr.map((item,index) => {
    item.addEventListener('keydown', function(event) {
        if (event.code == 'Enter') {
          return div3.innerText = `${index}:${item.value}`
        }
      });
})


/**
 * Задание 4
 * Создать инпут с плейсхолдером Username, инпут с плейсхолдером Password (не забываем про type password), кнопка Log In.
 * Создать массив пользователей([{userName: '', password: ''}]). Сделать так, чтобы по нажатию на кнопку Log In будет происходить
 * проверка введенного userName и password и если введенные данные соответсвуют одному из юзеров,
 * то убрать инпуты и кнопку, и показать сообщение: Hello ${userName}!. Если введенные данные не соответсвуют, то показать
 * alert c сообщением об ошибке
 *
 */
let arrUser = [{userName : 'Artyom', password: '12345'},{userName : 'Petr', password: 'PetrBlog'},{userName : 'Aleks', password: '24687'}];

let divUser = document.createElement('div');
let user = document.createElement('input');
let pass = document.createElement('input');
let but4 = document.createElement('button');

document.body.append(divUser);
divUser.append(user,pass,but4)

user.setAttribute('placeholder', 'Username');
pass.setAttribute('placeholder', 'Password');
pass.setAttribute('type', 'password');
but4.innerHTML = 'Log In';


but4.onclick = () => {
    let search = arrUser.find(item => item.userName === user.value && item.password === pass.value)
    
    if(search !== undefined){
        user.style =`
        display: none;
        `;
        pass.style =`
        display: none;
        `;
        but4.style =`
        display: none;
        `;
        alert(`Hello ${user.value}!`)
    }else{
        alert('Введите правильные данные')
    }
}
/**
 * Задание 5
 * Сделать 'тикающие часы' в формате: 00:00:00, они должны показывать текущее время.
 *
 * P.S. Задача со звездой :-)
 *
 */
