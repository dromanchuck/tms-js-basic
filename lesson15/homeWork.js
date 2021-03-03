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
let input = document.createElement(`input`);
let button = document.createElement(`button`);
let message  = `Вспомни, что ты должен сделать!`;
document.body.append(input, button);
input.placeholder = `Введите количество минут`;
input.setAttribute(`size`, `40px`);
input.setAttribute(`onclick`, `this.value`);
button.innerText = `Напомнить!`;
function alarm (){
    alert(message);
    let audio = new Audio(`https://freesound.org/people/Nandoo1/sounds/110268/`);
    audio.preload = `auto`;
    audio.src = `https://freesound.org/people/Nandoo1/sounds/110268/`;
    audio.play(`https://freesound.org/people/Nandoo1/sounds/110268/`);
}
setTimeout(alarm(), input.value*1000)