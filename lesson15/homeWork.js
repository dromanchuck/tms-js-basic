/**
 * Домашнее задание к занятию 15
 * Каждому нужно создать новую ветку от ветки master. Название ветки должно содержать имя + первая буква фамилии + /lesson15.
 * Например: dmitryR/lesson15. Выполнение задания производится в свое ветке и в этом файле.
 * После выполнения задания делаете пулл реквест и сообщаете о том, что задание выполнено:)
 * В случае неполодок с гитом, присылаете папку с проектом мне в личные сообщения
 * Код решения должен быть сразу же после самого задания
 */

/**
 * Задание 1
 * Дописать цитатник из файла qoute.js. Добавить кнопку и сделать так, чтобы по нажатию на
 * кнопку, цитата и автор менялись на рандомную цитату и автора (https://quotes.rest/quote/random)
 * Ссылка на API https://quotes.rest/
 */

// Использовал другую API, в условии - платная.

/**
 * Задание 2
 * Написать мини приложение "напоминалка". Оно должно содержать инпут и кнопку.
 * В инпут необходимо ввести время (минут) через сколько должна сработать напоминалка(alert с сообщением)
 * + как только пришло время должен сработать звуковой сигнал (погуглить как работать с звуком в js).
 */

let reminder = document.createElement('div');
let reminderInput = document.createElement('input');
let reminderButton = document.createElement('button');
reminderInput.setAttribute('type', 'number');
reminderInput.setAttribute('placeholder', 'Enter the number of minutes');
reminderButton.innerText = 'Set timer';
reminder.append(reminderInput, reminderButton);
document.body.append(reminder);

let timerSound = document.createElement('audio');
timerSound.src = 'alert.mp3';

let end;
let timer;

reminderInput.onblur = () => {
  reminderInput.style = 'outline-color: black';
};

reminderButton.addEventListener('click', () => {
  if (!reminderInput.value) {
    reminderInput.style = 'outline-color: red';
    reminderInput.focus();
    return;
  }
  let endDate = new Date(Date.now() + reminderInput.value * 6e4);
  end = endDate;
  let timerID = setInterval(checkTimer, 1000);
  timer = timerID;
});

function checkTimer() {
  let current = Date.now();
  if (current >= end) {
    timerSound.play();
    alert('Time out');
    clearInterval(timer);
  }
}
