let promise = new Promise((resolve, reject) => {
  let error = new Error("Something went wrong");

  resolve(3);
})
  .then(
    (result) => {
      console.log({ result });
    }
    // (error) => {
    //   console.log("onreject", { error });
    // }
  )
  .catch((error) => {
    alert(error.message);
  });

let myFetch = (url) =>
  new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", url);

    xhr.send();

    xhr.onload = function (res) {
      let result = JSON.parse(res.target.response);

      resolve(result);
    };

    xhr.onerror = function (error) {
      reject(error);
    };
  });

// let promiseFetch = fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((result) => console.log(result))
//   .catch((error) => console.log({ error }))
//   .finally(() => console.log("finally"));

// let str = prompt("Введите что-нибудь");

try {
  if (!str) {
    let error = new Error("Пустое поле!");

    throw error;
  }

  // alert(`Введенный текст: ${str}`);
} catch (error) {
  // alert(error.message);
} finally {
  // alert("Спасибо, что пользуетесь нами!");
}

async function createPromise() {
  try {
    let result = await fetch("https://jsonplaceholder.typicode.com/posts");
    let posts = await result.json();
    console.log({ posts });

    return result;
  } catch (error) {
    console.log(error);
  }
}

createPromise();

let usersPromise = fetch(
  "https://jsonplaceholder.typicode.com/users"
).then((res) => res.json());
let postsPromise = fetch(
  "https://jsonplaceholder.typicode.com/posts"
).then((res) => res.json());

Promise.all([usersPromise, postsPromise]).then((result) => {
  console.log(result);
});

let script = document.createElement("script");

script.src = "index1.js";

document.body.append(script);

const promiseWeather = fetch(
  `https://api.openweathermap.org/data/2.5/weather?q=Minsk&appid=abc18123f9933da0d20e9228118f1a0d&units=metric`
)
  .then((res) => res.json())
  .then((result) => console.log(result));
