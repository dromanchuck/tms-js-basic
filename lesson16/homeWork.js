/**
 * Домашнее задание к занятию 16
 * Каждому нужно создать новую ветку от ветки master. Название ветки должно содержать имя + первая буква фамилии + /lesson16.
 * Например: dmitryR/lesson16. Выполнение задания производится в свое ветке и в этом файле.
 * После выполнения задания делаете пулл реквест и сообщаете о том, что задание выполнено:)
 * В случае неполодок с гитом, присылаете папку с проектом мне в личные сообщения
 * Код решения должен быть сразу же после самого задания
 */

/**
 * Задание 1
 * Добавить в проект GoodWeather даты в ForecastItem(разместить выше максимальной температуры).
 * Добавить к максимальной/минимальной температуре label (MAX/MIN).
 * Добавить время рассвета и заката(разместить ниже минимальной температуры)
 */


/**
 * Задание 2
 * Написать миниприложение строчный календарь. Пример календаря будет в файле calendar.html(только твой должен быть красивее =))
 * По нажатию на кнопки Следующий месяц и Предыдущий месяц должна производится навигация по месяцам.
 * Сегодняшний день должен быть закрашеным. День 8е марта тоже должен быть закращеным каким-нибудь другим цветом.
 */

 let nowDate = new Date();
 let nowDateNumber = nowDate.getDate();

 let nowMonth = nowDate.getMonth();
 let nowYear = nowDate.getFullYear();

 let container = document.getElementById('month-calendar');
 let monthContainer = container.getElementsByClassName('month-name')[0];
 let yearContainer = container.getElementsByClassName('year-name')[0];
 let daysContainer = container.getElementsByClassName('days')[0];
 
 let prev = container.getElementsByClassName('prev')[0];
 let next = container.getElementsByClassName('next')[0];

 let monthName = ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'];



let curDate = nowDate.setMonth(nowDate.getMonth() - 1);

function setMonthCalendar(year,month) {
 let monthDays = new Date(year, month + 1, 0).getDate();
 let monthPrefix = new Date(year, month, 0).getDay();
 let monthDaysText = '';

 monthContainer.textContent = monthName[month];
 yearContainer.textContent = year;
 daysContainer.innerHTML = '';

 if (monthPrefix > 0){
     for (let i = 1  ; i <= monthPrefix; i++){
         monthDaysText += '<li></li>';
     }
 }

 for (let i = 1; i <= monthDays; i++){
     monthDaysText += '<li>' + i + '</li>';
 }

 daysContainer.innerHTML = monthDaysText;

 if (month == nowMonth && year == nowYear){
     days = daysContainer.getElementsByTagName('li');
     days[monthPrefix + nowDateNumber - 1].classList.add('date-now');
 }
}

setMonthCalendar(nowYear,nowMonth);

prev.onclick = function () {
 let curDate = new Date(yearContainer.textContent,monthName.indexOf(monthContainer.textContent));

 curDate.setMonth(curDate.getMonth() - 1);

 let curYear = curDate.getFullYear(),
     curMonth = curDate.getMonth();

 setMonthCalendar(curYear,curMonth);
}

next.onclick = function () {
 let curDate = new Date(yearContainer.textContent,monthName.indexOf(monthContainer.textContent));

 curDate.setMonth(curDate.getMonth() + 1);

 let curYear = curDate.getFullYear(),
     curMonth = curDate.getMonth();

 setMonthCalendar(curYear,curMonth);
}
