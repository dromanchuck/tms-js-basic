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

import { Container } from '../components/container.js';
import { Input } from '../components/input.js';
import { Button } from '../components/buttons.js';

let container = new Container();
let input = new Input('enter time');
let button = new Button('set timer');

container.addChild(input, button);
document.body.append(container.getElement());

let audio = new Audio(`./sound.mp3`);

button.onClick(() => {
  setTimeout(() => {
    audio.play();
    alert('alert');
  }, input.getValue() * 1000);
});
