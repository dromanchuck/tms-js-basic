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


let input = document.createElement('input')
document.body.append(input)
let btn = document.createElement('button')
btn.innerHTML = 'Sound ON'

btn.onclick = async () => {
    if (input.value.trim() !== '') {
        if (input.value > 0) {
            let timer = input.value * 60000
            setTimeout(() => {
                var audio = new Audio();
                audio.preload = 'auto';
                audio.src = 'Sound_17211.mp3';
                audio.play();
                setTimeout(() => {
                    alert('ZABAVNO')
                }, timer)
            }, timer)
        }
        else {
            throw new Error('NOT LETTERS')
        }
    }
    else {
        throw new Error('ENTER SOMETHING')
    }
}

document.body.append(input, btn)