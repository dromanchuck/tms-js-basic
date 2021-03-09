const prevMonthButton = document.querySelector('#prev-month');
const nextMonthButton = document.querySelector('#next-month');
const daysTemplate = document.querySelector('#curr-month');
const calendarTemplate = document.querySelector('#calendar');

const currentMonth = new Date().getMonth();
const currentYear = new Date().getFullYear();

let months = [
  'Январь',
  'Февраль',
  'Март',
  'Апрель',
  'Май',
  'Июнь',
  'Июль',
  'Август',
  'Сентябрь',
  'Октябрь',
  'Ноябрь',
  'Декабрь',
];

let holidays = [
  { month: 0, day: 1 },
  { month: 0, day: 7 },
  { month: 2, day: 8 },
  { month: 4, day: 1 },
  { month: 4, day: 9 },
  { month: 6, day: 3 },
  { month: 10, day: 7 },
  { month: 11, day: 25 },
];

function currentMonthDays(month, year) {
  let days = new Date(new Date(year, month + 1).setDate(0)).getDate();
  return days;
}

function showCurrentMonthDays(month, year) {
  let template = document.createElement('div');
  template.classList.add('calendar');
  let firstDay = new Date(year, month).getDay();
  console.log(firstDay);
  if (firstDay >= 2) {
    for (let i = 2; i < firstDay; i++) {
      let div = document.createElement('div');
      template.append(div);
    }
  }
  if (firstDay === 0) {
    for (let i = 0; i < 6; i++) {
      let div = document.createElement('div');
      template.append(div);
    }
  }
  createTemplate: for (let i = 1; i <= currentMonthDays(month, year); i++) {
    for (let item of holidays) {
      if (month === item.month && i === item.day) {
        let div = document.createElement('div');
        div.classList.add('calendar-item', 'calendar-item_red');
        if (
          month === currentMonth &&
          year === currentYear &&
          i === new Date().getDate()
        ) {
          div.classList.add('calendar-item_today');
        }
        div.innerText = i;
        template.append(div);
        continue createTemplate;
      }
    }
    if (
      month === currentMonth &&
      year === currentYear &&
      i === new Date().getDate()
    ) {
      let div = document.createElement('div');
      div.classList.add('calendar-item', 'calendar-item_today');
      div.innerText = i;
      template.append(div);
    } else {
      let div = document.createElement('div');
      div.classList.add('calendar-item');
      div.innerText = i;
      template.append(div);
    }
  }
  calendar.innerHTML = '';
  calendar.append(template);
}

let cbMonth = currentMonth;
let cbYear = currentYear;

prevMonthButton.addEventListener('click', () => {
  let month = cbMonth ? --cbMonth : ((cbMonth = 11), 11);
  let year = cbMonth === 11 ? --cbYear : cbYear;
  render(month, year);
});

nextMonthButton.addEventListener('click', () => {
  let year = cbMonth !== 11 ? cbYear : ++cbYear;
  let month = cbMonth !== 11 ? ++cbMonth : ((cbMonth = 0), 0);
  render(month, year);
});

function render(month, year) {
  daysTemplate.innerHTML = `${months[month]} ${year}`;
  showCurrentMonthDays(month, year);
}

render(currentMonth, currentYear);
