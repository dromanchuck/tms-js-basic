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

/**
 * Задание 2
 * Написать мини приложение "напоминалка". Оно должно содержать инпут и кнопку.
 * В инпут необходимо ввести время (минут) через сколько должна сработать напоминалка(alert с сообщением)
 * + как только пришло время должен сработать звуковой сигнал (погуглить как работать с звуком в js).
 */

let container = document.createElement('div');
let input = document.createElement('input');
let button = document.createElement('button');

button.innerText = "Set a reminder";
container.append(input, button);
document.body.append(container);

input.setAttribute('type', 'number');
input.placeholder = 'Введите время в минутах';
let audio = new Audio(`./what.mp3`);

button.onclick = function() {
    setTimeout(() => {
        audio.play();
        alert("It's time to learn JavaScript!");
    }, input.value * 60 * 1000)
}