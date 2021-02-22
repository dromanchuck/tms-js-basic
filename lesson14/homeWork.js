/**
 * Задание 0
 * Переписать задания к уроку 13 используя классы.
 */

function MyString() {}

MyString.prototype.reverse = function (str) {
  let arr = [...str].reverse();

  return arr.join("");
};

MyString.prototype.upperCaseFirst = function (str) {
  let arr = [...str];
  arr[0] = arr[0].toUpperCase();

  return arr.join("");
};

MyString.prototype.upperCaseWords = function (str) {
  let arr = str.split(" ");

  arr.forEach((element, index, array) => {
    arr[index] = this.upperCaseFirst(element);
  });

  return arr.join(" ");
};

class MyString {
  static reverse(str) {
    let arr = [...str].reverse();

    return arr.join("");
  }

  static upperCaseFirst(str) {
    let arr = [...str];
    arr[0] = arr[0].toUpperCase();

    return arr.join("");
  }

  static upperCaseWords(str) {
    let arr = str.split(" ");

    arr.forEach((element, index, array) => {
      arr[index] = this.upperCaseFirst(element);
    });

    return arr.join(" ");
  }
}

MyString.reverse("Hello");

/**
 * Задание 1
 * Реализуйте класс User, который будет иметь следующие свойства: имя, фамилия, email; следующие методы:
 * getFullName, getEmail.
 */

class User {
  constructor(name, surname, email) {
    this.name = name;
    this.surname = surname;
    this.email = email;
  }

  getFullName() {
    return this.name + " " + this.surname;
  }

  getEmail() {
    return this.email;
  }
}

let user = new User("Arnold", "Schwarzennegger", "ash@mail.ru");

/**
 * Задание 2
 * Реализуйте класс Student, который будет наследовать класс User.
 * Этот класс должен иметь следующие свойства: name (имя, наследуется от User), surname (фамилия, наследуется от User),
 * year (год поступления в вуз). Класс должен иметь метод getFullName() (наследуется от User),
 * с помощью которого можно вывести одновременно имя и фамилию студента. Также класс должен иметь метод getCourse(),
 * который будет выводить текущий курс студента (от 1 до 5). Курс вычисляется так: нужно от текущего года отнять год
 * поступления в вуз. Текущий год получить программно, используя объект Date (https://learn.javascript.ru/datetime).
 */

class Student extends User {
  constructor(name, surname, email, year) {
    super(name, surname, email);

    this.year = year;
  }

  getCourse() {
    let date = new Date();
    let currentYear = date.getFullYear();

    let diff = currentYear - this.year;

    if (diff === 0) {
      return 1;
    }

    if (diff >= 1 && diff <= 5) {
      return diff;
    }

    alert("Error");
  }
}

/**
 * Задание 0
 * Реализуйте функцию конструктор Worker (Работник), который будет создавать объект и иметь следующие свойства: name (имя),
 * secondName (фамилия),
 * rate (ставка за день работы), days (количество отработанных дней). Также класс должен иметь метод getSalary(),
 * который будет выводить зарплату работника.
 * Зарплата - это произведение (умножение) ставки rate на количество отработанных дней days.
 */

/**
 * Задание 1
 * Модифицируйте функцию конструктор Worker из предыдущей задачи следующим образом:
 * У каждого объекта класса Worker должны быть доступны методы getName, getSecondName, getRate, getDays,
 * каждый из которых будет возвращать соответствующее поле в объекте.
 * И также методы setRate, setDays, которые будут устанавливать новые значения для соответственно свойств rate и days.
 */

/**
 * Задание 2
 * Реализуйте функцию конструктор MyString, объект которого будет иметь следующие методы: метод reverse(),
 * который параметром принимает строку, а возвращает ее в перевернутом виде,
 * метод ucFirst(),
 * который параметром принимает строку, а возвращает эту же строку, сделав ее первую букву заглавной
 * и метод ucWords,
 * который принимает строку и делает заглавной первую букву каждого слова этой строки.
 */
