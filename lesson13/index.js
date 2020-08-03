let user = {
  name: "Petr",
  secondName: "Pupkin",
  email: "email@mail.ru",

  sayHello() {
    console.log(`Hello, my name is ${this.getFullName()}`);
  },

  setName(name) {
    this.name = name;
  },

  getFullName() {
    return `${this.name} ${this.secondName}`;
  },
};

user.sayHello();
user.setName("Vova");
user.sayHello();
