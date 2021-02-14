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

 let startBtn = document.querySelector('.start');
 let stopBtn = document.querySelector('.stop');
 let resetBtn = document.querySelector('.reset');
 let p = document.querySelector('.counter');

 let count = 0;
 p.append(count);
 let interval;
 
startBtn.addEventListener('click', function() {
    interval = setInterval(function() {
        count++;
        p.innerHTML = count;
    }, 100);
    
    stopBtn.classList.remove('hidden');
    resetBtn.classList.remove('hidden');

})

stopBtn.addEventListener('click', function() {
    clearInterval(interval);
})

resetBtn.addEventListener('click', function() {
    p.innerHTML = 0;
    stopBtn.classList.add('hidden');
    resetBtn.classList.add('hidden');
})


/**
 * Задание 2
 * Есть ссылки в lesson10/index.html. Они находятся в div c id  = 2. Сделать так, чтобы по ховеру на ссылку (событие mouseover),
 * в аттрибут title у ссылки поместить значение пути ссылки.
 */

 let div2 = document.getElementById('2').children;
 let a = [...div2];

 for (let j = 0; j < a.length; j++) {
    a[j].addEventListener('mouseover', function() {
        for(let i = 0; i < a.length; i++) {
           let href = a[i].getAttribute('href');
           a[i].setAttribute('title', href);
        }
    })
 }


/**
 * Задание 3
 * Есть инпуты, они находятся в div с id = 3. Сделать так, чтобы нажатию на enter
 * введенное значение из инпута попадало в div в виде:
 * `${индекс инпута}: ${введенный текст}`
 * 
 *
 */

 let div3 = document.getElementById('3').children;
 let result = document.getElementById('result');
 let div3Arr = [...div3];
 
 for (let x = 0; x < div3Arr.length; x++) {
     div3Arr[x].addEventListener('keydown', function(event) {
         if(event.key === 'Enter') {
            result.innerHTML = `Input c индексом № ${div3Arr.indexOf(div3Arr[x])} : ${div3Arr[x].value}`;
         }
     })
 }

/**
 * Задание 4
 * Создать инпут с плейсхолдером Username, инпут с плейсхолдером Password (не забываем про type password), кнопка Log In.
 * Создать массив пользователей([{userName: '', password: ''}]). Сделать так, чтобы по нажатию на кнопку Log In будет происходить
 * проверка введенного userName и password и если введенные данные соответсвуют одному из юзеров,
 * то убрать инпуты и кнопку, и показать сообщение: Hello ${userName}!. Если введенные данные не соответсвуют, то показать
 * alert c сообщением об ошибке
 *
 */

 let users = [{userName: 'Ivan', passWord: '123'}, {userName: 'Vika', passWord: '555'}, {userName: 'Vasya', passWord: '101'}];

 for (let person of users) {
     console.log(person);
 }

 let username = document.querySelector('.username');
 let password = document.querySelector('.userpassword');
 let logInBtn = document.querySelector('.logIn');

 logInBtn.addEventListener('click', function() {
     for (let user of users) {
        if (username.value === user.userName && password.value === user.passWord) {
            
            username.classList.add('hidden');
            password.classList.add('hidden');
            logInBtn.classList.add('hidden');

            return alert(`Hello ${user.userName}!`);

        } else {
            return alert('Error: wrong username or password');
        }
     }
 })
 
/**
 * Задание 5
 * Сделать 'тикающие часы' в формате: 00:00:00, они должны показывать текущее время.
 *
 * P.S. Задача со звездой :-)
 *
 */

function currentTime() {
    let date = new Date(); 
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    hour = updateTime(hour);
    min = updateTime(min);
    sec = updateTime(sec);
    document.getElementById("clock").innerText = hour + " : " + min + " : " + sec; 
    let a = setTimeout(function(){ currentTime() }, 1000); 
  }
  
  function updateTime(b) {
    if (b < 10) {
      return "0" + b;
    }
    else {
      return b;
    }
  }
  
  currentTime(); 