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

let prevButton = document.querySelector('#prev');
let nextButton = document.querySelector('#next');
let calendar = document.querySelector('#calendar');
let currentMonth = document.querySelector('#date');

let getCurrentMonth = new Date().getMonth();
let getCurrentYear = new Date().getFullYear();

function makeCalendar(year, month) {

    let lastDayOfMonth = new Date(year,month+1,0).getDate();
    let D = new Date(year,month,lastDayOfMonth);
    let dayOfWeekLastDayOfMonth = new Date(D.getFullYear(),D.getMonth(),lastDayOfMonth).getDay();
    let dayOfWeekFirstDayOfMonth = new Date(D.getFullYear(),D.getMonth(),1).getDay();
    let monthArray = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
    let publicHolidays = [
        {month: 'Январь', day: '1'},
        {month: 'Январь', day: '7'},
        {month: 'Март', day: '8'},
        {month: 'Май', day: '1'},
        {month: 'Май', day: '9'},
        {month: 'Июль', day: '3'},
        {month: 'Ноябрь', day: '7'},
        {month: 'Декабрь', day: '25'}
      ];

    if (dayOfWeekFirstDayOfMonth !=0) {
        for(let i=1; i<dayOfWeekFirstDayOfMonth; i++) {
            let day = document.createElement('div');
            day.classList.add('day');
            calendar.append(day) ; 
        }   
    } else {
        for(let i=0; i<6; i++) {
            let day = document.createElement('div');
            day.classList.add('day');
            calendar.append(day); 
        }
    }

    for(let i = 1; i <= lastDayOfMonth; i++) {
        if (i == new Date().getDate() && D.getFullYear() == new Date().getFullYear() && D.getMonth() == new Date().getMonth()) {
            let day = document.createElement('div');
            day.classList.add('day');
            calendar.append(day);
            day.innerText = i;
            day.classList.add('today');
        } else {
            let day = document.createElement('div');
            day.classList.add('day');
            calendar.append(day);
            day.innerText = i;
        }
    }
    
    if(dayOfWeekLastDayOfMonth !=0) {
        for(let i=dayOfWeekLastDayOfMonth; i<7; i++) {
            let day = document.createElement('div');
            day.classList.add('day');
            calendar.append(day);  
        }
    }
     
    currentMonth.innerHTML = D.getFullYear() + ` ` + monthArray[D.getMonth()]
    
    for (let i=0; i<publicHolidays.length; i++) {
        if(monthArray[D.getMonth()]  === publicHolidays[i].month) {
            let items = calendar.querySelectorAll('.day');
            for (let item of items) {
                if(item.innerHTML === publicHolidays[i].day) {
                    item.classList.add('publicHoliday')
                }
            }
        }
    }
}

makeCalendar(getCurrentYear, getCurrentMonth);

prevButton.addEventListener('click', function() {
    calendar.innerHTML = '';
    let month;
    let year;
    if(getCurrentMonth > 0) {
        getCurrentMonth = getCurrentMonth - 1;
        month = getCurrentMonth;
    } else {
        getCurrentMonth = 11;
        month = 11;
    }
    
    if (getCurrentMonth === 11) {
        getCurrentYear = getCurrentYear - 1;
        year = getCurrentYear;
    } else {
        year = getCurrentYear
    }
   
 makeCalendar(year, month);
    
})

nextButton.addEventListener('click', function() {
    calendar.innerHTML = '';
    let month;
    
    let year;

    if (getCurrentMonth !== 11) {
        getCurrentMonth = getCurrentMonth + 1;
        month = getCurrentMonth;
    } else {
        getCurrentMonth = 0;
        month = 0;
    }
    if (getCurrentMonth === 0) {
        getCurrentYear = getCurrentYear + 1;
        year = getCurrentYear;
       
    } else {
        year = getCurrentYear ;
    }
 makeCalendar(year, month);
    
})