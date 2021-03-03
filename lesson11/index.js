// function showConsole() {
//   function first() {
//     console.log("Show first");
//   }

//   function second() {
//     console.log("Show second");
//   }

//   function third() {
//     console.log("Show third");
//   }

//   setTimeout(first, 10000);
//   setTimeout(second, 5000);
//   setTimeout(third, 0);
// }

// showConsole();

//HTTP

//GET
//POST
//PUT
//DELETE

//Web socket

//Cетевый запросы

function getData(url, callback) {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", url);

  console.log("Делаем запрос!");

  xhr.send();

  xhr.onload = function (res) {
    let result = JSON.parse(res.target.response);

    callback(result);
  };

  xhr.onerror = function (error) {
    console.log(error);
  };

  xhr.onprogress = function (event) {
    console.log("onprogress", { event });
  };
}

let container = document.createElement("div");

container.style = `
  display: flex;
  flex-direction: column;
`;

document.body.append(container);

let showUsers = function (usersArr) {
  usersArr.forEach((item) => {
    let div = document.createElement("div");
    let name = document.createElement("p");
    name.innerText = item?.name;

    let userName = document.createElement("p");
    userName.innerText = item.username;

    let email = document.createElement("p");
    email.innerText = item.email;

    div.style = `
      display: flex;
      flex-direction: column;
      border-bottom: 1px white solid;
    `;

    div.onclick = () => {
      showCommentsNEW(item.id);
    };

    div.append(name, userName, email);

    container.append(div);
  });
};

function showCommentsOLD(userId) {
  getData("https://jsonplaceholder.typicode.com/posts", function (posts) {
    let filteredPosts = posts.filter((item) => item.userId === userId);

    getData(
      "https://jsonplaceholder.typicode.com/comments",
      function (comments) {
        const [firstPost] = filteredPosts;

        let filteredComments = comments.filter(
          (item) => item.postId === firstPost.id
        );

        console.log(filteredComments);
      }
    );
  });
}

// getData("https://jsonplaceholder.typicode.com/users", showUsers);

//fetch

function showCommentsNEW(userId) {
  fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
    .then((res) => res.json())
    .then((posts) => {
      return fetch(
        `https://jsonplaceholder.typicode.com/comments?postId=${posts[0].id}`
      )
        .then((res) => res.json())
        .then((comments) => {
          console.log(comments);
        });
    });
}

let usersPromise = fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => {
    return res.json();
  })
  .then((response) => {
    showUsers(response);
  });

fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  body: JSON.stringify({
    title: "FE-42",
    body: "The best ever!!!",
    userId: 1,
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
