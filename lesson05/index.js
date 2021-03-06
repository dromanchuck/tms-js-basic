let user = {
  name: "Jack",
  secondName: "Sparrow",
  driverLicense: 1234512567543,
  kids: ["Adam", "Eva", "Harry"],
  wife: {
    name: "Isolda",
    secondName: "Sparrow",
  },
};

let {
  name,
  secondName,
  kids,
  wife: { secondName: wifesSecondName },
} = user;

let [firstKid, ...restKids] = kids;

let error = {
  status: 401,
  message: "Help me!",
};

const { message } = error;

console.log(message);

let user = {
  name: "Jack",
  secondName: "Sparrow",
  driverLicense: 1234512567543,
  kids: ["Adam", "Eva", "Harry"],
  wife: {
    name: "Isolda",
    secondName: "Sparrow",
  },
};

let keys = Object.keys(user);
let entries = Object.entries(user);
let values = Object.values(user);

let userMap = new Map();

userMap.set("name", "Jack");
userMap.set("secondName", "Sparrow");

let user = {};

user.name = "Jack";
user.secondName = "Sparrow";

//arguments
function findMax() {
  let argss = [...arguments];
  console.log(argss, arguments);

  let max = argss.reduce((acc, value) => {
    return acc > value ? acc : value;
  }, argss[0]);

  return max;
}

let max = findMax(1, 2, 3, 4, 8, 9);

//JSON parse stringify
