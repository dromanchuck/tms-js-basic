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
