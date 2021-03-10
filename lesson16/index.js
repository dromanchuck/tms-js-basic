let monthInput = document.querySelector('.calendar__month');
let yearInput = document.querySelector('.calendar__year');
let btn = document.querySelector('.calendar__btn');

let sunday = document.querySelector('.sunday')
let monday = document.querySelector('.monday')
let tuesday = document.querySelector('.tuesday')
let wednesday = document.querySelector('.wednesday')
let thursday = document.querySelector('.thursday')
let friday = document.querySelector('.friday')
let saturday = document.querySelector('.saturday')

let today = new Date;
let todayNum = today.getDate();
let todayMonth = today.getMonth();
let todayYear = today.getFullYear();

let arrDaysOfMonth = [];
let arrOfThisMonth = [];

//function
function emptyLi() {
    let emptyLi = document.createElement('li')
    emptyLi.setAttribute('class', 'emptyLi')
    emptyLi.innerText = ' '
    return emptyLi
}

function newMonth() {
    
    arrDaysOfMonth = []

    monthValue = monthInput.value;
    yearValue = yearInput.value;

    for(let i = 1; i < 32; i++) {
        let dayOfMonth = newDate(yearValue, monthValue, i);
        arrDaysOfMonth.push(dayOfMonth)
    }

    arrOfThisMonth = [];

    arrOfThisMonth = arrDaysOfMonth
        .filter(item => arrDaysOfMonth[0].getMonth() === item.getMonth())
        .map(item => newItem(item));

    [...document.querySelectorAll('ul > li')].forEach(item => item.remove());
        
    weekDay(arrOfThisMonth)
}

function newDate(year, month, day) {
   
    let newDay = new Date;
    newDay.setFullYear(year, month, day);

    return newDay
}

function weekDay(arr) {
    arr.forEach(day => {
        let li = document.createElement('li')
        li.innerText = day.number;

        if(day === arr[0]) {
            if(day.dayOfWeek === 0) {
                sunday.append(li);
            }
    
            if(day.dayOfWeek === 1) {
                monday.append(li);
            }
    
            if(day.dayOfWeek === 2) {
                tuesday.append(li);
            }
    
            if(day.dayOfWeek === 3) {
                wednesday.append(li);
            }
    
            if(day.dayOfWeek === 4) {
                thursday.append(li);
            }
    
            if(day.dayOfWeek === 5) {
                friday.append(li);
            }
    
            if(day.dayOfWeek === 6) {
                saturday.append(li);
            }

            if(day.dayOfWeek === 1) {
                sunday.append(emptyLi());
            } else if (day.dayOfWeek === 2) {
                sunday.append(emptyLi());
                monday.append(emptyLi());
            } else if (day.dayOfWeek === 3) {
                sunday.append(emptyLi());
                monday.append(emptyLi());
                tuesday.append(emptyLi());
            } else if (day.dayOfWeek === 4) {
                sunday.append(emptyLi());
                monday.append(emptyLi());
                tuesday.append(emptyLi());
                wednesday.append(emptyLi());
            } else if (day.dayOfWeek === 5) {
                sunday.append(emptyLi());
                monday.append(emptyLi());
                tuesday.append(emptyLi());
                wednesday.append(emptyLi());
                thursday.append(emptyLi());
            } else if (day.dayOfWeek === 6) {
                sunday.append(emptyLi());
                monday.append(emptyLi());
                tuesday.append(emptyLi());
                wednesday.append(emptyLi());
                thursday.append(emptyLi());
                friday.append(emptyLi());
            }


        } else {
            if(day.dayOfWeek === 0) {
                sunday.append(li);
            }
    
            if(day.dayOfWeek === 1) {
                monday.append(li);
            }
    
            if(day.dayOfWeek === 2) {
                tuesday.append(li);
            }
    
            if(day.dayOfWeek === 3) {
                wednesday.append(li);
            }
    
            if(day.dayOfWeek === 4) {
                thursday.append(li);
            }
    
            if(day.dayOfWeek === 5) {
                friday.append(li);
            }
    
            if(day.dayOfWeek === 6) {
                saturday.append(li);
            }
        }
    });
}

function newItem(day) {
    let newDay = {
        number: 0,
        dayOfWeek: '',
    }

    newDay.number = day.getDate()
    newDay.dayOfWeek = day.getDay()
    
    return newDay
}

//Event
btn.addEventListener('click', () => {
    newMonth()
    if(yearInput.value === String(todayYear) && monthInput.value === String(todayMonth)) {
        let collectionLi = document.querySelectorAll('li');
        let arr = [...collectionLi];
        let index = arr.find(item => item.innerText === String(todayNum));
        index.setAttribute('class', 'today')
    }

    if(monthInput.value === '2') {
        let collectionLi = document.querySelectorAll('li');
        let arr = [...collectionLi];
        let index = arr.find(item => item.innerText === '8');
        index.setAttribute('class', 'Mar8')
    }
})

